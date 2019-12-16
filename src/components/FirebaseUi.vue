<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { firebase, auth } from '~/plugins/firebase'
export default {
  name: 'FirebaseUi',
  mounted () {
    this.startUi()
  },
  methods: {
    startUi () {
      const vm = this
      if (process.browser) {
        const firebaseui = require('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        // FirebaseUI config.
        const uiConfig = {
          callbacks: {
            signInSuccessWithAuthResult (authResult, redirectUrl) {
            // User successfully signed in.
            // don't redirect automatically
              vm.$emit('login')
              return false
            }
          },
          // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
          signInFlow: 'popup',
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
          tosUrl: 'https://pooltablerugs.com',
          // Privacy policy url/callback.
          privacyPolicyUrl: 'https://pooltablerugs.com'
        }
        ui.start('#firebaseui-auth-container', uiConfig)
      }
    }
  }
}
</script>

<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
