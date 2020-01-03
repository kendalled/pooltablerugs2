<template>
  <div class="wrapper mx-auto py-12">
    <form id="payment-form" class="max-w-md mx-auto" method="post" style="display: block;">
      <div class="form-row">
        <label for="card-element">
          Credit or Debit:
        </label>
        <div id="card-element">
          <!-- A Stripe Element will be inserted here. -->
        </div>
        <!-- Used to display Element errors. -->
        <div id="card-errors" role="alert" />
      </div>

      <div class="col-12 col-12-xsmall">
        <br>
        <ul class="actions" style="float: right;">
          <li><input type="submit" class="text-center px-4 py-2 rounded shadow hover:bg-gray-200 cursor-pointer transition-bg focus:outline-none" value="Continue"></li>
        </ul>
        <br>
      </div>
    </form>
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'
export default {
  layout: 'checkout',
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
      firebase.firestore().collection('rug_customers').doc(this.userAccount).collection('tokens').add({
        token: token.id
      }).then(() => {
        console.log('Token created')
      })
    }
  }
}
</script>
