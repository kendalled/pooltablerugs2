<template>
  <div class="loginroot pb-2 bg-gray-800 h-screen w-full">
    <div class="transition-all flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div class="flex rounded-lg shadow-lg h-auto w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="min-height:500px; max-width: 700px;">
        <div class="flex flex-col w-full md:w-2/3 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-3xl text-center tracking-tighter text-gray-800">
              Login to complete checkout.
            </h1>
            <div class="w-full mt-4 px-2">
              <div id="firebaseui-auth-container" />
              <!-- <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                <div class="flex flex-col mt-4">
                  <input
                    id="email"
                    type="text"
                    class="flex-grow h-8 px-2 border rounded border-grey-400"
                    name="email"
                    value=""
                    placeholder="Email"
                  >
                </div>
                <div class="flex flex-col mt-4">
                  <input
                    id="password"
                    type="password"
                    class="flex-grow h-8 px-2 rounded border border-grey-400"
                    name="password"
                    required
                    placeholder="Password"
                  >
                </div>
                <div class="flex items-center mt-4">
                  <input id="remember" type="checkbox" name="remember" class="mr-2"> <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                </div>
                <div class="flex flex-col mt-8">
                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                    Login
                  </button>
                </div>
              </form> -->
              <div class="text-center mt-4">
                <a class="no-underline hover:underline text-gray-600 text-xs" href="#">
                  Forgot Your Password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="loginpic hidden md:block md:w-1/3 rounded-r-lg bg-cover bg-center" />
      </div>
    </div>
  </div>
</template>

<script>
import { firebase, uiConfig } from '~/plugins/firebase'
let firebaseui
if (process.client) {
  firebaseui = require('firebaseui')
}
export default {
  name: 'LoginCard',
  mounted () {
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style scoped>
.loginpic {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.55)), url("https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Fsamplerug.jpg?alt=media&token=44e0a8cd-2231-4058-baa9-a2eba8ef23d6")
}
@media (min-width: 1280px) {
  .loginroot {
    height: 92vh !important;
  }
}
</style>
