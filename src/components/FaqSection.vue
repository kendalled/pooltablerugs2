<template>
  <div class="w-screen h-auto subs py-20">
    <h2
      class="text-center text-3xl text-white font-semibold -mt-2 leading-snug"
    >
      Frequently Asked Questions
    </h2>
    <p class="text-center text-lg text-gray-100 mt-2 px-6">
      Our rugs are both stylish and functional.
    </p>

    <div class="h-1 mx-auto bg-gray-100 w-40 opacity-75 mb-2 mt-4 rounded" />
    <Accordion />
  </div>
</template>

<script>
import Accordion from '~/components/Accordion'
export default {
  name: 'FaqSection',
  components: {
    Accordion
  }
}
</script>

<style scoped>
.subs {
  background-color: #646464;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23394359' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E") !important;
}
</style>
