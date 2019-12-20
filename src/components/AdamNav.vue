<template>
  <div id="nav" class="bg-white border-b antialiased parent z-20">
    <div class="lg:px-8">
      <nav
        class="relative flex flex-wrap items-center justify-between lg:py-4"
      >
        <nuxt-link to="/" class="relative z-10 flex-shrink-0 pl-4 py-4 lg:p-0">
          <img class="h-6 w-auto mt-1" src="~/static/logo.png" alt="">
        </nuxt-link>
        <!-- <SearchBar class="hidden" /> -->
        <div class="flex-shrink-0 pr-4 lg:hidden">
          <button
            ref="openButton"
            @click="open"
            type="button"
            class="block text-gray-600 focus:outline-none focus:text-gray-900"
            aria-label="Menu"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
              />
              <path
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
              />
              <path
                d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
              />
            </svg>
          </button>
        </div>
        <div
          class="hidden lg:block lg:ml-10 lg:flex lg:items-baseline lg:justify-between lg:bg-transparent"
        >
          <div class="lg:absolute inset-0 flex items-center justify-center">
            <VerticalNav />
          </div>
          <div class="ml-10 relative flex items-baseline">
            <LoginModal @login="accountChange(1)" @logout="accountChange(0)" />
            <!-- old cart link -->
            <button @click="removeFromCart" class="py-2 pl-3 pr-2 text-sm font-medium text-gray-100 bg-green-600 rounded transition-bg hover:bg-green-700 hover:text-white focus:outline-none">
              Cart&nbsp;
              <svg class="fill-current inline-block h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
              <svg v-if="cartCount !== 0" class="absolute top-0 right-0 -mt-3 -mr-4 fill-current text-gray-300" width="31.25" height="31.25">
                <circle cx="15.625" cy="15.625" r="12.5" />
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  class="text-xs font-bold text-gray-700"
                  dy=".3em"
                >{{ cartCount }}</text>
              </svg>
              <svg v-if="cartCount === -1" class="absolute top-0 right-0 -mt-3 -mr-4 fill-current text-green-300" width="31.25" height="31.25">
                <circle cx="15.625" cy="15.625" r="12.5" />
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  class="text-xs font-bold text-green-900 antialiased"
                  dy=".3em"
                >{{ cartCount }}</text>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div class="lg:hidden">
      <!-- Off-canvas menu background overlay -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
        appear
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div
            @click="close"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="-1"
          />
        </div>
      </transition>

      <!-- Off-canvas menu -->
      <transition
        enter-class="translate-x-full"
        enter-active-class="ease-out transition-slow"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="ease-in transition-medium"
        leave-to-class="translate-x-full"
        appear
      >
        <div
          v-show="isOpen"
          class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white overflow-y-auto"
        >
          <div class="relative z-10 bg-white">
            <div
              :class="isOpen ? 'block' : 'hidden'"
              class="absolute top-0 right-0 p-4"
            >
              <button
                ref="closeButton"
                @click="close"
                type="button"
                class="text-gray-600 focus:outline-none focus:text-gray-900"
                aria-label="Close"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"
                  />
                </svg>
              </button>
            </div>
            <div class="px-4 pt-5 pb-6">
              <img class="h-6 w-auto" src="~/static/logo.png" alt="">
              <a
                href="#"
                class="mt-8 block text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >Products</a>
              <a
                href="#"
                class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
              >Checkout</a>
              <a
                href="#"
                class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
              >Payments</a>
              <a
                href="#"
                class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
              >Billing</a>
              <a
                href="#"
                class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
              >Insights</a>
            </div>
            <div class="border-t-2 border-gray-200 px-4 pt-6">
              <a
                href="#"
                class="block font-medium text-gray-900 hover:text-gray-700"
              >Marketplace</a>
              <a
                href="#"
                class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
              >About</a>
            </div>
          </div>
          <div class="relative bg-white">
            <div class="px-4 pt-4 pb-6">
              <a
                href="#"
                class="block font-medium text-gray-900 hover:text-gray-700"
              >Log in</a>
            </div>
            <div class="p-4">
              <a
                href="#"
                class="block px-3 py-3 font-medium text-center bg-gray-300 rounded-lg text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >Create Account</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
  .parent {
  position: fixed;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
}
</style>

<script>
import VerticalNav from '~/components/VerticalNav'
import LoginModal from '~/components/LoginModal'
export default {
  components: {
    VerticalNav,
    LoginModal
  },
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
    open () {
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.closeButton.focus()
      })
    },
    accountChange (val) {
      if (val === 1) {
        console.log('log in seen from nav')
      } else if (val === 0) {
        console.log('log out seen from nav')
      } else {
        console.log('woops')
      }
      console.log('emit received from loginModal')
    },
    removeFromCart (item) {
      this.$store.commit('removeFromCart', item)
    },
    close () {
      this.isOpen = false
      this.$nextTick(() => {
        this.$refs.openButton.focus()
      })
    }
  }
}
</script>
