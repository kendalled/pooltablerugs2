<template>
  <div class="max-w-sm w-full py-4 px-3 mx-auto">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- <div class="bg-cover bg-center h-56 p-4" :style="{ backgroundImage: 'url(' + require('@/static/'+bg) + ')' }" />-->
      <client-only>
        <!-- <vueper-slides fixed-height="14rem" :bullets="false">
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
        </vueper-slides> -->
      </client-only>
      <div class="p-4">
        <p class="uppercase tracking-wide text-sm font-semibold text-gray-700">
          {{ collection }} • {{ sku }}
        </p>
        <p class="text-3xl pb-2 text-gray-900">
          ${{ parseFloat(price) }}.00
        </p>
        <div class="flex">
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ styling }}</span>
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ shaping }}</span>
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ group }}</span>
          <svg class="inline-block h-8 w-6 text-gray-600 hover:text-green-600 hover:cursor-pointer fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
          </svg>
        </div>
      </div>
      <div class="px-4 pt-4 pb-8 border-t border-gray-300 bg-gray-100">
        <p class="text-sm text-gray-700 text-center">
          {{ romance }} (<a class="underline hover:no-underline" href="#">see more</a>)
        </p>
        <div class="flex pt-6 justify-between px-2">
          <button class="bg-white hover:bg-gray-300 shadow text-gray-700 font-bold py-2 px-4 rounded">
            See Details
          </button>
          <button class="bg-green-500 hover:bg-green-700 shadow text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  name: 'Card',
  props: {
    'sku': {
      type: String,
      default: 'AGR-2304'
    },
    'collection': {
      type: String,
      default: 'Agra'
    },
    'group': {
      type: String,
      default: '2\' x 3\''
    },
    'shaping': {
      type: String,
      default: 'Rectangle'
    },
    'styling': {
      type: String,
      default: 'Modern'
    },
    'price': {
      type: Number,
      default: 174.99
    },
    'romance': {
      type: String,
      default: 'Agra\'s Collection features hundreds of timeless styles, from modern to chic. This rug is a classic style that will surely create'
    }
  },
  data: () => ({
    slides: [
      {
        title: 'Picture #1',
        content: 'Slide content.',
        image: 'https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Froomrug.jpg?alt=media&token=b43d86ba-d8b7-49d7-8595-80515b581ded'
      },
      {
        title: 'Picture #2',
        content: 'Slide content.',
        image: 'https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Fwhiteroom.jpg?alt=media&token=0b453813-6cde-4ea4-bdac-20dbb3c9ef70'
      }
    ]
  })
}
</script>

<style scoped>
  /* @tailwind base;
  @tailwind components;
  .pill {
    @apply inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2;
  } */
  /* .pill:hover {
    @apply bg-gray-400 cursor-pointer;
  }
  @tailwind utilities; */
</style>
