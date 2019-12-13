<template>
  <div class="signIn">
    <button @click="open = true" class="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none transition-bg">
      Sign In
    </button>
    <Modal :open="open" @close="open = false">
      <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
        <h2 class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4">
          Sign in
        </h2>
        <div class="w-full mt-6 px-2">
          <div id="firebaseui-auth-container" />
          <!-- old form placement -->
          <div class="text-center mt-4">
            <a class="no-underline hover:underline text-gray-600 text-xs" href="#">
              Forgot Your Password?
            </a>
          </div>
        </div>
        <!-- <div class="mt-6">
            <button @click="open = false" type="button" class="px-4 py-2 text-white font-semibold bg-red-500 hover:bg-red-600 border border-transparent rounded focus:outline-none focus:shadow-outline">
              Delete my account
            </button>
            <button @click="open = false" class="ml-4 px-4 py-2 text-gray-800 font-semibold bg-white hover:bg-gray-100 border rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div> -->
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '~/components/Modal'
import { firebase } from '~/plugins/firebase'
let firebaseui, uiConfig

if (process.client) {
  firebaseui = require('firebaseui')
  // FirebaseUI config.
  uiConfig = {
    callbacks: {
      uiShown () {
        // do something
      }
    },
    signInSuccessUrl: 'https://pooltablerugs.com/checkout',
    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'https://lapelpinsandcoins.com',
    // Privacy policy url/callback.
    privacyPolicyUrl () {
      window.location.assign('https://lapelpinsandcoins.com')
    }
  }
}

export default {
  components: {
    Modal
  },
  data () {
    return {
      open: false
    }
  },
  mounted () {
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
