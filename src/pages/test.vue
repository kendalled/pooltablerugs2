<template>
  <div class="wrapper max-w-sm mx-auto py-12">
    <div id="card-element" />
  </div>
</template>

<script>

export default {
  mounted () {
    const elements = this.$stripe.import().elements()
    const card = elements.create('card')
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element')
  }
}
</script>
