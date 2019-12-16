<template>
  <div id="app" style="padding-top: 3.8rem">
    <AdamNav />
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,600,900&display=swap');
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
  transition: all .18s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
.roboto {
  font-family: 'Roboto', sans-serif;
}
@media screen and (min-width: 1024px){
  #app {
    padding-top: 4.4rem !important;
  }
}
</style>
<script>
import AdamNav from '~/components/AdamNav'
export default {
  name: 'Default',
  components: {
    AdamNav
  }
}
</script>
