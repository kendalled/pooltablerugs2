<template>
  <div class="px-24 pb-4 flex flex-wrap items-center justify-center">
    <div v-for="i in 3" :key="i" class="flex flex-col items-start flex-shrink-0 m-8 bg-white max-w-xs w-full h-full rounded-lg shadow-lg px-6 bg-cover bg-center pt-32 pb-6" style="background-image: url('//a.storyblok.com/f/43708/1048x1048/ef79d343d8/tile-collection-bright.jpg');">
      <h3 class="flex items-end text-lg font-bold text-gray-100 text-left w-full h-64">
        Modern Rugs
      </h3>
      <div class="rounded-lg bg-white text-black uppercase font-bold text-xs tracking-wider px-2">
        NEW
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedCards'
}
</script>
