<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,900&display=swap');
html {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
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
html {
  max-width: 100vw;
}
</style>
<script>
export default {
  name: 'admin'
}
</script>
