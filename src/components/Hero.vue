<template>
  <div
    :style="{ backgroundImage: 'linear-gradient(105deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 75%), url(' + require('@/static/'+bg) + ')' }"
    class="py-48 bg-cover h-full bg-center"
  >
    <div class="mx-auto w-3/4 px-4 my-12">
      <h1 class="mb-2 text-white leading-tight roboto font-black">
        Protect your pool table<br class="hidden md:block"> in style with a durable rug.
      </h1>
      <h2 class="text-2xl tracking-tight mb-6 text-gray-100">
        Thousands of designs, free shipping, 24/7 support.
      </h2>
      <div class="mt-0">
        <button aria-label="About Our Rugs" class="bg-gray-100 transition-bg hover:bg-white text-gray-800 font-semibold py-3 px-6 border border-gray-400 rounded shadow">
          Learn More
        </button>
        <nuxt-link to="/rugs">
          <button aria-label="Shop Rugs" class="px-6 py-3 inline-block ml-4 bg-green-700 hover:bg-green-500 rounded text-white font-semibold transition-bg tracking-wide shadow-md focus:outline-none">
            Shop Rugs
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    'bg': {
      type: String,
      default: 'original1920.jpg'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:900&display=swap');
h1 {
  text-shadow: 0px 4px 3px rgba(0,0,0,0.2), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
  font-size: 2.8rem;
}
</style>
