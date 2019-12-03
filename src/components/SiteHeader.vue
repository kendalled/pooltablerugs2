<template>
  <header class="bg-white sm:flex sm:items-center sm:justify-between xl:bg-white border-b">
    <div class="headerRoot flex justify-between px-4 py-3 xl:w-72 xl:justify-center xl:py-5">
      <nuxt-link to="/">
        <img class="h-6 w-auto mt-2" alt="Pool Table Rugs Logo" src="~/static/logo.png">
      </nuxt-link>
      <div class="flex sm:hidden">
        <button type="button" class="px-2 text-gray-600 hover:text-green-600 focus:outline-none focus:text-gray-500" aria-label="Account" @click="toggle">
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <div class="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
        </div>
        <input class="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" aria-label="Search Bar" placeholder="Search by keywords">
      </div>
      <div class="sm:flex sm:items-center">
        <div class="navitems px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
          <nuxt-link to="/rugs" class="block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:text-sm sm:px-2 xl:text-gray-800">
            Find a Rug
          </nuxt-link>
          <nuxt-link to="/" class="mt-1 block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-800">
            Add-Ons
          </nuxt-link>
          <nuxt-link to="/checkout" class="mt-1 block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-800">
            Cart&nbsp;
            <svg class="fill-current inline-block h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
            <div v-if="cartCount === 0" class="inline-block text-gray-700 top-0 right-0 px-2 py-0 bg-gray-300 rounded-full">
              <span class="text-sm font-semibold">{{ cartCount }}</span>
            </div>
            <div v-else class="inline-block text-green-900 top-0 right-0 px-2 py-0 bg-green-300 rounded-full">
              <span class="text-sm font-semibold">{{ cartCount }}</span>
            </div>
          </nuxt-link>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div class="flex items-center sm:hidden">
            <!-- mobile ul -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user px-1 h-8 w-8 object-cover rounded-full border-2 border-gray-600 text-green-600 fill-current"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" /></svg>
            <span class="ml-4 font-semibold text-gray-700 sm:hidden">Your Account</span>
          </div>
          <div class="mt-5 sm:hidden">
            <a href="#account" class="block text-gray-600 transition-colors xs:hover:text-green-600 xs:hover:text-white">Account settings</a>
            <a href="#support" class="mt-3 block text-gray-600 transition-colors xs:hover:text-green-600 xs:hover:text-white">Support</a>
            <nuxt-link to="login" class="mt-3 block text-gray-600 transition-colors xs:hover:text-green-600 xs:hover:text-white">
              Sign In
            </nuxt-link>
          </div>
          <Dropdown class="hidden sm:block">
            <template #trigger="{ hasFocus, isOpen }">
              <span
                class="block h-8 w-8 px-1 overflow-hidden rounded-full border-2 "
                :class="[(hasFocus || isOpen) ? 'border-white md:border-green-500' : 'border-gray-300 xl:border-gray-300']"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user fill-current text-green-600 h-full w-full object-cover"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" /></svg>

              </span>
            </template>
            <template #dropdown>
              <div class="mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl">
                <a href="#account" class="block hover:text-white text-gray-800 px-4 py-2 hover:bg-green-500">Account settings</a>
                <a href="#support" class="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-green-500">Support</a>
                <nuxt-link to="login" class="block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-green-500">
                  Sign In
                </nuxt-link>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </nav>
    <!-- <Cart /> -->
  </header>
</template>

<script>
import Dropdown from '~/components/Dropdown'
export default {
  components: { Dropdown },
  props: [],
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.navitems {
  font-family: "Source Sans Pro", sans-serif !important;
}
@media (min-width: 1280px) and (min-height: 900px) {
  .headerRoot {
    height: 8vh;
  }
}
</style>
