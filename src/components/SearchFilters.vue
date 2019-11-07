<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
        </div>
        <input class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords">
      </div>
      <button
        type="button"
        class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
        :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }"
        @click="toggle"
      >
        <svg class="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" /></svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>
    <form :class="{ 'hidden': !isOpen, 'block': isOpen }" class="xl:block xl:h-full xl:flex xl:flex-col xl:justify-between">
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <div class="px-4 py-4 border-b border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
          <div class="flex flex-wrap -mx-2">
            <h2 class="text-xl text-gray-100 font-semibold tracking-tight mx-auto text-center">
              Search our catalog.
            </h2>
          </div>
        </div>
        <div class="px-4 pt-3 pb-5 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
          <div class="flex flex-wrap -mx-2">
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
              <span class="text-sm font-semibold text-gray-400">Color</span>
              <select class="mt-1 form-select block w-full shadow focus:bg-gray-600">
                <option>White</option>
              </select>
            </label>
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
              <span class="text-sm font-semibold text-gray-400">Material</span>
              <select class="mt-1 form-select block w-full shadow focus:bg-gray-600">
                <option>Cotton</option>
              </select>
            </label>
            <label class="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
              <span class="text-sm font-semibold text-gray-400">Price Range</span>
              <select class="mt-1 form-select block w-full shadow focus:bg-gray-600">
                <option selected>Up to $1,000</option>
                <option>Up to $2,500</option>
                <option>Up to $5,000</option>
              </select>
            </label>
          </div>
        </div>
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-400">Pool Table Size</span>
          <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="house">
              <span class="ml-2 text-white">7' x 3.5'</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="apartment">
              <span class="ml-2 text-white">8' x 4'</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
              <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="loft">
              <span class="ml-2 text-white">8' x 5' (Pro)</span>
            </label>
          </div>
        </div>
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
          <span class="block text-sm font-semibold text-gray-400">Style</span>
          <div class="sm:flex sm:-mx-2 sm:flex-wrap">
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="balcony">
              <span class="ml-2 text-white">Modern</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="pool">
              <span class="ml-2 text-white">Casual</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" name="beach">
              <span class="ml-2 text-white">Classic</span>
            </label>
          </div>
        </div>
      </div>
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button class="block w-full sm:w-auto sm:inline-block bg-blue-600 hover:bg-blue-800 transition-bg font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">
          Apply Filter(s)
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      isOpen: false
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
.form-checkbox:focus, .form-radio:focus, .form-select:focus {
  outline: none;
}
</style>
