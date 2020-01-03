<template>
  <div class="wrapper mx-auto py-12">
    <StripeElement />
  </div>
</template>

<script>
import StripeElement from '~/components/StripeElement'
export default {
  layout: 'checkout',
  components: {
    StripeElement
  }
}
</script>
