<template>
  <nav class="fixed font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-5 px-6 bg-white shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0">
      <nuxt-link to="/">
        <img class="h-6 w-auto -mb-2 ml-2" alt="Pool Table Rugs Logo" src="~/static/logo.png">
      </nuxt-link>
    </div>
    <div class="flex justify-end w-full">
      <nuxt-link to="/rugs" class="inline-block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:text-sm sm:px-2 xl:text-gray-800">
        Find a Rug
      </nuxt-link>
      <nuxt-link to="/" class="mt-1 inline-block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-800">
        Add-Ons
      </nuxt-link>
      <nuxt-link to="/checkout" class="mt-1 inline-block px-3 py-1 rounded font-semibold text-gray-800 transition-colors hover:text-green-600 hover:text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-800">
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
  </nav>
</template>

<script>
export default {
  name: 'NewNav',
  computed: {
    cartCount () {
      return this.$store.state.cartCount
    }
  }
}
</script>
