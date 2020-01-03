<template>
  <form id="payment-form" class="max-w-md mx-auto" method="post" style="display: block;">
    <div class="form-row">
      <label for="card-element" class="text-base text-gray-800 font-medium hidden">
        Credit or Debit:
      </label>
      <div id="card-element" class="mt-4">
        <!-- A Stripe Element will be inserted here. -->
      </div>
      <!-- Used to display Element errors. -->
      <div id="card-errors" role="alert" />
    </div>

    <div class="col-12 col-12-xsmall hidden">
      <br>
      <ul class="actions" style="float: right;">
        <li><input id="stripeSubmit" type="submit" class="text-center px-4 py-2 text-gray-700 rounded shadow hover:bg-gray-200 cursor-pointer transition-bg focus:outline-none" value="Continue"></li>
      </ul>
      <br>
    </div>
  </form>
</template>

<script>
import { firebase } from '~/plugins/firebase'
export default {
  props: {
    'clicked': {
      type: Boolean,
      default: false
    }
  },
  computed: {
    userAccount () {
      return (this.$store.state.user ? this.$store.state.user.id : 'none')
    }
  },
  watch: {
    clicked () {
      if (process.client) {
        if (this.clicked) {
          console.log('yeet')
          const button = document.getElementById('stripeSubmit')
          button.click()
        } else {
          console.log('yah')
        }
      }
    }
  },
  mounted () {
    const vm = this
    if (process.browser) {
      // Handle form submission.
      const form = document.getElementById('payment-form')
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        stripe.createToken(card).then(function (result) {
          if (result.error) {
          // Inform the user if there was an error.
            const errorElement = document.getElementById('card-errors')
            errorElement.textContent = result.error.message
          } else {
          // Send the token to your server.
            vm.stripeTokenHandler(result.token)
          }
        })
      })
      // this.$store.commit('saveUserDetails')
      const stripe = this.$stripe.import()
      const elements = stripe.elements()
      const card = elements.create('card')
      // Add an instance of the card Element into the `card-element` <div>
      card.mount('#card-element')
    }
  },
  methods: {
    stripeTokenHandler (token) {
      const vm = this
      firebase.firestore().collection('rug_customers').doc(this.userAccount).collection('tokens').add({
        token: token.id
      }).then(() => {
        vm.$emit('token')
        console.log('Token created')
      })
    }
  }
}
</script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;
  border: 1px solid #002d5d;
  border-radius: 4px;
  background-color: #fcfcfc;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #f0feff !important;
}
</style>
