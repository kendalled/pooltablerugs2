<template>
  <div class="pb-4 flex w-5/6 mx-auto flex-wrap items-center justify-around">
    <div v-for="(style, i) in styles" :key="i" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.28)), url(' + require('@/static/'+style.imageSrc) + ')' }" class="product hover:cursor-pointer flex flex-col items-start flex-shrink-0 m-4 mx-3 bg-white max-w-xs w-full h-full rounded-lg shadow-xl px-6 bg-cover bg-center h-64 pt-4 pb-6">
      <!-- bg-green-600 -->
      <div class="flex w-full h-12 justify-end items-center ">
        <div v-show="style.new" style="font-size: .7rem;" class="rounded-full bg-white text-black uppercase font-bold tracking-wide px-2 py-1">
          NEW
        </div>
      </div>
      <h3
        class="cardlabel flex items-end text-lg font-bold text-gray-100 text-left w-full mt-16 h-64"
      >
        {{ style.title }} Rugs
      </h3>
    </div>
  </div>
</template>

<style>
.product {
  transition-duration:.3s;
  -webkit-transition-duration:.3s;
}
.product:hover {
  transform:translateY(-6px);
  -ms-transform:translateY(-6px); /* prefix for IE 9 */
  -webkit-transform:translateY(-6px); /* prefix for Safari and Chrome */
}
.cardlabel {
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
}

</style>

<script>
export default {
  name: 'FeaturedCards',
  data () {
    return {
      styles: [
        {
          title: 'Traditional',
          new: false,
          imageSrc: 'roomrug.jpg'
        },
        {
          title: 'Modern',
          new: false,
          imageSrc: 'tinyrug.jpg'
        },
        {
          title: 'Chic',
          new: true,
          imageSrc: 'chicrug.jpg'
        },
        {
          title: 'Shag',
          new: true,
          imageSrc: 'whiteroom.jpg'
        }
      ]
    }
  }
}
</script>
