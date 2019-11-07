<template>
  <div
    class="py-24 mt-16 bg-cover bg-fixed md: mt-18"
    :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5 )), url(' + require('@/static/'+bg) + ')' }"
  >
    <div class="container mx-auto px-3">
      <h2 class="text-3xl font-bold mb-2 text-gray-100">
        What size is your pool table?
      </h2>
      <h3 class="text-2xl mb-8 text-gray-200 tracking-tighter">
        We'll only show you rugs that are a perfect fit.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSmall',
  props: {
    'bg': {
      type: String,
      default: 'samplerug.jpg'
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
