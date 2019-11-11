<template>
  <div class="antialiased">
    <div class="px-8 pt-8 pb-16 max-w-xl mx-auto lg:max-w-full lg:px-0 lg:pt-24 lg:pb-32 lg:relative lg:max-h-screen bg-white">
      <div class="xl:max-w-6xl lg:mr-0 lg:ml-32">
        <div class="lg:w-7/12 lg:pl-12 lg:pr-8">
          <div class="mt-8 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12">
            <img class="h-56 w-full object-cover object-center sm:h-56 rounded-lg shadow-xl lg:inset-0 lg:h-full lg:object-right lg:shadow-none lg:rounded-none" src="~/static/original1920.jpg" alt="Woman workcationing on beach">
            <svg
              style="margin-left: -0.015rem;"
              class="hidden lg:block absolute inset-y-0 left-0 w-20 h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon class="text-white" fill="currentColor" points="0,0 0,100 100,0" />
            </svg>
          </div>
          <h1 class="mt-4 lg:mt-8 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Protect your pool table
            <br class="hidden sm:inline">
            <span class="text-green-500">with a durable, stylish rug.</span>
          </h1>
          <p class="mt-4 text-gray-600 tracking-tight text-xl">
            Protect your game room with our custom rugs. <br> From spills to scuffs, our rugs keep your game room in shape.
          </p>
          <div class="mt-6">
            <button class="bg-white transition-bg hover:bg-gray-100 text-gray-800 font-semibold py-3 px-5 border border-gray-400 rounded shadow">
              Learn More
            </button>
            <nuxt-link to="/rugs">
              <button class="px-5 py-3 inline-block ml-4 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition-bg tracking-wide shadow-md focus:outline-none">
                Shop Rugs
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashHeader'
}
</script>

<style scoped>

</style>
