<template>
  <div class="wrapper max-w-lg mx-auto py-12">
    <form id="payment-form" method="post" style="display: block;">
      <div class="form-row">
        <label for="card-element">
          Credit or Debit {{ uid }}:
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
  data () {
    return {
      uid: null
    }
  },
  mounted () {
    // this.$store.commit('saveUserDetails')
    const stripe = this.$stripe.import()
    const elements = stripe.elements()
    const card = elements.create('card')
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element')

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
          firebase.firestore().collection('rug_customers').doc(this.uid).collection('tokens').add({ token: result.token }).then(() => {
            console.log('Token created')
          })
        }
      })
    })
  },
  created () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        this.uid = user.uid
        console.log('signed in!')
      } else {
        // No user is signed in.
        console.log('not signed in!')
      }
    })
  }
}
</script>
