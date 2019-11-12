<template>
  <div id="app">
    <SiteHeader class="xl:flex-shrink-0" />
    <nuxt />
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

/*
.page-enter-active {
  animation: acrossIn .5s ease-out both;
}

.page-leave-active {
  animation: acrossOut .5s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
} */
/* .page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
} */
</style>
<script>
// import RespFooter from '~/components/RespFooter'
// // import RespNav from '~/components/RespNav'
import SiteHeader from '~/components/SiteHeader'
export default {
  name: 'Default',
  components: { SiteHeader }
}
</script>
