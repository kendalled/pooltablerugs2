<template>
  <div class="py-20 bg-gray-100 text-2xl">
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
