<template>
  <nav class="bg-white shadow p-3 mt-0 w-full fixed z-20 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div class="flex pt-2 w-full md:w-1/2 justify-center md:justify-start text-gray-700">
        <nuxt-link class="text-gray-700 no-underline hover:text-gray-700 hover:no-underline lg:ml-4" to="/">
          <img class="w-56" src="../static/logo.png" alt="Pool Table Rugs Logo">
        </nuxt-link>
      </div>
      <div class="flex w-full content-center justify-between md:w-1/2 md:justify-end">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li class="mr-3">
            <nuxt-link class="inline-block text-gray-700 tracking-wide no-underline hover:text-green-500 hover:text-underline py-2 px-4" to="rugs">
              Rugs
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link class="inline-block text-gray-700 tracking-wide no-underline hover:text-green-500 hover:text-underline py-2 px-4" to="about">
              About
            </nuxt-link>
          </li>
          <li class="mr-3">
            <button class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <span>Cart &nbsp;</span>
              <svg class="fill-current text-white mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RespNav'
}
</script>

<style scoped>

</style>
