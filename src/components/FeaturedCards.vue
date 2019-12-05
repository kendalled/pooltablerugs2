<template>
  <div class="px-24 pb-4 flex flex-wrap items-center justify-center">
    <div v-for="i in 3" :key="i" class="product flex flex-col items-start flex-shrink-0 m-4 bg-white max-w-xs w-full h-full rounded-lg shadow-lg px-6 bg-cover bg-center h-64 pt-4 pb-6" style="background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('//a.storyblok.com/f/43708/1048x1048/ef79d343d8/tile-collection-bright.jpg');">
      <!-- bg-green-600 -->
      <div class="flex w-full h-12 justify-end items-center ">
        <div style="font-size: .7rem;" class="rounded-full bg-white text-gray-800 uppercase font-bold tracking-wide px-2 py-1">
          NEW
        </div>
      </div>
      <h3 class="flex items-end text-lg font-bold text-gray-100 text-left w-full mt-16 h-64">
        Modern Rugs
      </h3>
    </div>
  </div>
</template>

<style>
.product {
  transition-duration:.4s;
  -webkit-transition-duration:.4s;
}
.product:hover {
  transform:translateY(-6px);
  -ms-transform:translateY(-6px); /* prefix for IE 9 */
  -webkit-transform:translateY(-6px); /* prefix for Safari and Chrome */
}

</style>

<script>
export default {
  name: 'FeaturedCards'
}
</script>
