<template>
  <div id="content" class="py-20 px-1">
    <h2
      class="text-center text-2xl lg:text-3xl text-white font-semibold -mt-2 leading-snug"
    >
      Spruce up your game room.
    </h2>
    <p class="text-center text-lg text-gray-100 mt-2 px-6">
      Our rugs are both stylish and practical.
    </p>

    <div class="h-1 mx-auto bg-gray-100 w-40 opacity-75 mb-2 mt-4 rounded" />
    <ThreeFeatures />
  </div>
</template>

<script>
import ThreeFeatures from '~/components/ThreeFeatures'
export default {
  name: 'BlankSection',
  components: {
    ThreeFeatures
  }
}
</script>

<style scoped>
#content {
    background-color: #38a168;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a724b' fill-opacity='0.19'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
