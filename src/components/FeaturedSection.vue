<template>
  <div class="py-20 px-24 bg-gray-200 text-2xl">
    <!-- bg-green-200 -->
    <div class="flex w-3/5 mx-auto h-auto px-2 py-2 justify-between">
      <h2 class="font-bold text-2xl text-gray-900">
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
