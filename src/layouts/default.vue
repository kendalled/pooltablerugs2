<template>
  <div id="app">
    <AdamNav />
    <nuxt class="mt-16" />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f1f1f1;
}
.page-enter-active, .page-leave-active {
  transition: all .2s ease-in-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
<script>
import AdamNav from '~/components/AdamNav'
export default {
  name: 'Checkout',
  components: {
    AdamNav
  }
}
</script>
