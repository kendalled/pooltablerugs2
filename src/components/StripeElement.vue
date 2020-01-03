<template>
  <form id="payment-form" class="w-full flex justify-between" method="post">
    <div class="form-row w-2/3">
      <label for="card-element" class="text-base text-gray-800 font-medium hidden">
        Credit or Debit:
      </label>
      <div id="card-element" class="w-full inline-block mt-4">
        <!-- A Stripe Element will be inserted here. -->
      </div>
      <!-- Used to display Element errors. -->
      <div id="card-errors" role="alert" />
      <!-- TODO: change to flex -->
    </div>
    <div class="button-row flex w-1/4 items-center justify-end mt-2">
      <button id="stripeSubmit" type="submit" class="inline-block bg-transparent hover:bg-blue-600 text-blue-600 font-medium hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded transition-colors">
        Save
      </button>
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
  border: 1px solid #dfe3e6;
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
