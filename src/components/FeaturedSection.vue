<template>
  <div class="pb-20 pt-4 lg:px-24 bg-gray-100 text-2xl">
    <!-- bg-green-200 -->
    <div class="flex w-5/6 mx-auto h-auto px-5 py-2 justify-between">
      <h2 class="font-semibold roboto text-2xl text-gray-800">
        Featured collections
      </h2>
      <nuxt-link to="rugs" class="bg-transparent transition-bg hover:bg-gray-900 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent text-base rounded">
        View All
      </nuxt-link>
    </div>
    <FeaturedCards />
  </div>
</template>

<script>
import FeaturedCards from '~/components/FeaturedCards'
export default {
  name: 'FeaturedSection',
  components: {
    FeaturedCards
  }
}
</script>
