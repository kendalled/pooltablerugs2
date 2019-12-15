<template>
  <client-only>
    <div class="signIn">
      <!-- @click="open = true" @click="shouldOpen = true" -->
      <button v-if="!loggedIn" @click="shouldOpen = true" class="ml-2 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none transition-bg">
        Sign In
      </button>
      <AccountDropdown v-if="loggedIn" @logout="signOut" @printuser="printUser" />
      <!-- :open="open" -->
      <Modal :open="shouldOpen">
        <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
          <h2 class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4">
            Sign in
          </h2>
          <div class="w-full mt-6 px-2">
            <FirebaseUi @login="printStuff"/>
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
      shouldOpen: false
    }
  },
  computed: {
    loggedIn () {
      return !(this.$store.state.user.user == null)
    },
    open () {
      return (this.$store.state.user.user == null)
    }
  },
  methods: {
    signOut () {
      auth.signOut().then(function () {
        console.log('signing out...')
      }).catch(function (e) {
        console.log(e)
      })
      // handle destruction of firebaseui
      this.$emit('logout')
    },
    printUser () {
      const user = auth.currentUser
      console.log(user)
      return (user)
    },
    printStuff () {
      console.log('stuff')
    }
  }
}

</script>
