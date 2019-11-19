<template>
  <div class="wrapper max-w-lg mx-auto py-12">
    <CheckoutCard />
    <div id="card-element" />
  </div>
</template>

<script>
import CheckoutCard from '~/components/CheckoutCard'
export default {
  components: {
    CheckoutCard
  },
  mounted () {
    const elements = this.$stripe.import().elements()
    const card = elements.create('card')
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element')
  }
}
</script>
