<template>
  <div class="wrapper mx-auto py-12">
    <ProductDetails />
  </div>
</template>

<script>
import ProductDetails from '~/components/ProductDetails'
export default {
  layout: 'checkout',
  components: {
    ProductDetails
  }
}
</script>
