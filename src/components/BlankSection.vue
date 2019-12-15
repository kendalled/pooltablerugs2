<template>
  <div id="content" class="py-20">
    <h2
      class="text-center text-3xl text-white font-medium -mt-2 leading-snug"
    >
      Keep your game room spotless.
    </h2>
    <p class="text-center text-lg text-gray-100 mt-2 px-6">
      Our rugs are both stylish and functional.
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
