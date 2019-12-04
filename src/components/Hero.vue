<template>
  <div
    :style="{ backgroundImage: 'linear-gradient(105deg, rgba(0,0,0,0.65) 25%, rgba(0,0,0,0) 75%), url(' + require('@/static/'+bg) + ')' }"
    class="py-56 mt-16 bg-cover bg-fixed md: mt-18"
  >
    <div class="container mx-auto px-3">
      <h1 class="text-3xl font-bold mb-2 text-white">
        Pool Table Rugs
      </h1>
      <h2 class="text-2xl mb-8 text-gray-200">
        Protect your game room with style.
      </h2>
      <nuxt-link to="rugs">
        <button class="bg-green-600 text-white font-bold py-2 px-4 shadow-lg tracking-wide rounded hover:bg-green-800">
          Shop Rugs
        </button>
      </nuxt-link>
      <nuxt-link to="about">
        <button class="bg-white text-gray-700 font-bold py-2 px-4 shadow-lg tracking-wide rounded hover:bg-gray-400">
          Learn More
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    'bg': {
      type: String,
      default: 'background.jpg'
    }
  }
}
</script>

<style scoped>
/* #hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://pooltablerugs.firebaseapp.com/images/background.jpg');
  background-size: cover;
  background-attachment: fixed;
} */
</style>
