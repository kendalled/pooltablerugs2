<template>
  <div class="signIn">
    <button @click="open = true" class="ml-2 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none transition-bg">
      Sign In
    </button>
    <AccountDropdown @logout="signOut" @printuser="printUser" />
    <Modal :open="open" @close="open = false">
      <div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
        <h2 class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4">
          Sign in
        </h2>
        <div class="w-full mt-6 px-2">
          <FirebaseUi />
          <!-- old form placement -->
          <div class="text-center mt-4">
            <a class="no-underline hover:underline text-gray-600 text-xs" href="#">
              Forgot Your Password?
            </a>
          </div>
          <!-- cut me-->
          <div
            class="border-t-2 border-gray-200 py-1"
          >
            <button
              @click="emitLogin"
              class="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200"
            >
              emit
            </button>
          </div>
          <!-- end cut -->
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
  methods: {
    signOut () {
      auth.signOut().then(function () {
        console.log('signing out...')
      }).catch(function (e) {
        console.log(e)
      })
      this.$emit('logout')
    },
    // saveUserToVuex (user) {
    //   this.$store.commit('user/updateUser', user)
    // },
    printUser () {
      const user = auth.currentUser
      console.log(user)
      return (user)
    },
    emitLogin () {
      // idempotency used in emit
      this.$emit('login')
    }
  }
}

</script>
