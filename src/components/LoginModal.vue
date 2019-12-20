<template>
  <client-only>
    <div class="signIn">
      <!-- @click="open = true" -->
      <button v-if="!loggedIn" @click="open = true" class="mx-4 px-4 py-2 font-medium text-center text-sm rounded bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none transition-bg">
        Sign In
      </button>
      <AccountDropdown v-if="loggedIn" @logout="signOut" @printuser="printUser" />
      <Modal :open="open" @close="open = false" class="modal">
        <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
          <!-- <h2 class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4">
            Sign in
          </h2> -->
          <div class="flex justify-between items-center pb-4 border-b-2 border-gray-200">
            <p class="font-semibold text-gray-800 text-2xl leading-tight">
              Sign in
            </p>
            <div @click="open = false" class="cursor-pointer z-50">
              <svg
                class="fill-current text-gray-700 hover:text-green-700 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>
          <div v-show="!loggedIn" class="w-full mt-6 px-2">
            <FirebaseUi v-if="!loggedIn" @login="signedIn" />
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
  </client-only>
</template>

<script>
import Modal from '~/components/Modal'
import AccountDropdown from '~/components/AccountDropdown'
import { auth } from '~/plugins/firebase'
import FirebaseUi from '~/components/FirebaseUi'

export default {
  name: 'LoginModal',
  components: {
    Modal,
    AccountDropdown,
    FirebaseUi
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
    }
    // open () {
    //   return (this.$store.state.user.user == null)
    // }
  },
  methods: {
    signOut () {
      auth.signOut().then(function () {
        console.log('signing out...')
      }).catch(function (e) {
        console.log(e)
      })
      // TODO: fix destruction of firebaseui
      this.open = true
      this.$emit('logout')
    },
    printUser () {
      const user = auth.currentUser
      console.log(user)
      return (user)
    },
    signedIn () {
      this.open = false
      console.log('closing modal...')
    }
  }
}

</script>
