<template>
  <div class="flex h-screen w-screen">
    <div class="w-2/3">
      <CheckoutCard />
    </div>
    <div class="w-1/3 bg-red-500" />
  </div>
</template>

<script>
import CheckoutCard from '~/components/CheckoutCard'
export default {
  components: { CheckoutCard }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600|Source+Sans+Pro:400,500, 600&display=swap");
body {
  background: #ddeefc;
  font-family: "Source Sans Pro", sans-serif;
  max-width: 100vw;
  max-height: 100vh;
}
</style>
