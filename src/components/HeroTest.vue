<template>
  <div class="box">
    <img class="image" src="https://source.unsplash.com/hECwQNeR1iE" alt="flower" width="800" height="400">
  </div>
</template>

<style scoped>
.box {
  border: 5px solid #333;
  width: 800px;
  height: 400px;
  box-sizing: border-box;
  overflow: hidden;
}
.box .image {
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.box .image:hover {
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  /* Safari and Chrome */
  -ms-transform: scale(1.15);
  /* Firefox */
  -o-transform: scale(1.15);
  /* IE 9 */
  transform: scale(1.15);
  /* Opera */
}
</style>

<script>
export default {
  name: 'HeroTest'
}
</script>
