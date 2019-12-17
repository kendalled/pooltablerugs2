<template>
  <div id="dropdown" class="relative inline-block">
    <button
      @click="opened = true"
      class="mx-4 pl-4 pr-2 py-2 font-medium inline-flex text-sm items-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition-bg"
    >
      Account
      <svg
        class="ml-2 h-6 w-6 text-white"
        style="margin-bottom: -.2rem;"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>

    <div
      v-if="opened"
      @click="opened = false"
      class="fixed inset-0"
      tabindex="-1"
    />

    <transition
      enter-active-class="transition-all transition-fastest ease-out-quad"
      leave-active-class="transition-all transition-faster ease-in-quad"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
    >
      <div
        v-if="opened"
        class="mt-2 absolute right-0 origin-top-right text-left"
      >
        <div class="w-64 bg-white rounded-lg shadow-lg border">
          <div class="flex items-center px-6 py-4">
            <span
              class="block h-10 w-10 px-1 overflow-hidden rounded-full border-2 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user fill-current text-green-600 h-full w-full object-cover"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" /></svg>

            </span>
            <div class="ml-4">
              <p class="font-semibold text-gray-900 leading-none">
                {{ accountName }}
              </p>
              <p>
                <a
                  href="#"
                  class="text-sm text-gray-600 leading-none hover:underline"
                >View Orders</a>
              </p>
            </div>
          </div>
          <div class="border-t-2 border-gray-200 py-1">
            <a
              href="#"
              class="block px-6 py-3 leading-tight hover:bg-gray-200"
            >Order History</a>
            <a
              href="#"
              class="block px-6 py-3 leading-tight hover:bg-gray-200"
            >Track Shipping</a>
          </div>
          <div class="border-t-2 border-gray-200 py-1">
            <a
              href="#"
              class="block px-6 py-3 leading-tight hover:bg-gray-200"
            >Terms of Service</a>
            <a
              href="#"
              class="block px-6 py-3 leading-tight hover:bg-gray-200"
            >Settings and Privacy</a>
          </div>
          <div
            class="border-t-2 border-gray-200 py-1"
          >
            <button
              @click="logOut"
              class="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccountDropdown',
  data () {
    return {
      opened: false
    }
  },
  computed: {
    accountName () {
      return this.$store.state.user.user.displayName || 'Your Account'
    }
  },
  methods: {
    logOut () {
      console.log('logging out')
      this.$emit('logout')
    }
    // printUser () {
    //   this.$emit('printuser')
    // }
  }
}
</script>
