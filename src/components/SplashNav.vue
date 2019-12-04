<template>
  <div>
    <SiteHeader :class="{ 'navbar bg-white mt-0 w-full fixed z-20 top-0 opacity-0': !showNavbar, 'navbar bg-white mt-0 w-full fixed z-20 top-0 opacity-100 shadow-md': showNavbar }" />
    <nav :class="{ 'bg-transparent p-3 mt-0 w-full absolute z-20 top-0': !showNavbar, 'hidden': showNavbar }" class="">
      <div class="mx-auto flex flex-wrap items-center">
        <div class="flex pt-2 w-full md:w-1/2 justify-center md:justify-start text-gray-700">
          <nuxt-link class="text-gray-700 no-underline hover:text-gray-700 hover:no-underline lg:ml-3" to="/">
            <img class="logo w-56" src="../static/logo.png" alt="Pool Table Rugs Logo">
          </nuxt-link>
        </div>
        <div class="flex w-full content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-3">
              <nuxt-link class="inline-block text-white font-semibold tracking-wide no-underline hover:text-green-600 rounded transition-colors py-2 px-4" to="rugs">
                Find a Rug
              </nuxt-link>
            </li>
            <li class="mr-3">
              <nuxt-link class="inline-block text-white font-semibold tracking-wide no-underline hover:text-green-600 rounded transition-colors py-2 px-4" to="/">
                Add-Ons
              </nuxt-link>
            </li>
            <li class="mr-3">
              <nuxt-link to="checkout" class="hover:bg-green-600 transition-bg text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Cart &nbsp;</span>
                <svg class="fill-current text-white mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader'
export default {
  name: 'SplashNav',
  components: { SiteHeader },
  data () {
    return {
      showNavbar: false,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 95) {
        return
      }
      // this.hideFirst = currentScrollPosition < this.lastScrollPosition
      this.showNavbar = currentScrollPosition >= 350
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: opacity 0.13s ease-in;
}

@media screen and (min-width:900px) {
  .logo {
    margin-left: 9.5rem;
  }
}

</style>
