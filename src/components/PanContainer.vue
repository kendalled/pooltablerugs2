<template>
  <div class="slide-container">
    <div :style="{ backgroundImage: 'linear-gradient(105deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 75%), url(' + require('@/static/'+bg) + ')' }" class="slide-bg">
      sme text
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanContainer',
  props: {
    'bg': {
      type: String,
      default: 'original1920.jpg'
    }
  }
}
</script>

<style scoped>
.slide-container {
  width: 1214px;
  height: 315px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid red;
}
.slide-bg {
  -webkit-animation: kenburns 120s infinite linear;
  animation: kenburns 120s infinite linear;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-position: 50% 35%;
  background-size: cover;
}

@keyframes kenburns {
  0% {
    transform: scale(1) rotate(0deg)
  }
  50% {
    transform: scale(1.4)
  }
  100% {
    transform: scale(1) rotate(0deg)
  }
}
</style>
