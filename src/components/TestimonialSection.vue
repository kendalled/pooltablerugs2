<template>
  <section class="sm:pt-32 sm:pb-40 py-12 styled">
    <h2
      class="text-center text-2xl lg:text-3xl text-gray-800 font-semibold -mt-2 leading-snug"
    >
      Don't just take our word for it.
    </h2>
    <p class="text-center text-base lg:text-lg text-gray-700 mt-2 px-6">
      Take a look at what our satisfied customers have to say.
    </p>

    <div class="h-1 mx-auto bg-blue-600 w-40 opacity-75 mb-8 md:mb-12 lg:mb-16 mt-4 rounded" />
    <div class="container mx-auto sm:flex-row flex-col flex justify-center">
      <div @click="selected = [q.id]" v-for="q in reviews" :key="q.id" :class="[selected.includes(q.id) ? 'scaled bg-white shadow' : 'desat bg-gray-300 shadow-none']" class="sm:w-1/3 max-w-sm sm:mb-0 mb-16 md:mx-2 lg:mx-6 rounded pt-4 pb-10 px-12 transition-ease-in-out transition-transform transition-bg transition-250">
        <div class="flex w-full h-auto ml-8 pb-6 pr-4 items-end justify-end mb-2">
          <p class="text-gray-700 text-sm text-left px-8 lg:px-0 inline-block ml-6 mt-3 w-auto w-2/3">
            <span class="italic">"</span> I received my rug and was amazed with the support, speed, and quality. Bravo!<span class="italic">"</span>
          </p>
        </div>
        <div class="flex w-full h-auto justify-between pl-24 -mt-4">
          <img :src="require('@/static/' + q.image)" class="ml-2 shadow-md border-2 border-gray-600 rounded-full w-12 h-12 inline-block z-20">
          <div class="flex flex-col w-auto items-end -mr-1">
            <p class="font-semibold text-gray-700 text-right text-sm block w-full">
              {{ q.name }}
            </p>
            <p class="font-semibold text-green-600 text-right block leading-tight w-full">
              {{ q.job }}
            </p>
            <Stars class="absolute pt-10 mt-1 pl-16" />
          </div>
        </div>
        <span class="text-xs text-gray-700 hover:text-green-600 transition-colors text-left w-auto pl-2 underline absolute">see more</span>
        <picture>
          <source srcset="@/static/sample2.webp" type="image/webp">
          <source srcset="@/static/sample2.png" type="image/png">
          <img src="@/static/sample2.png" class="h-32 -ml-8 -mt-32 z-0 w-auto absolute" alt="sample rug bought by customer.">
        </picture>
        <!-- <p class="text-xs text-left text-gray-700 w-auto -ml-1 -mt-4 absolute">
          $<span class="text-xs underline">249.99</span>
        </p> -->
      </div>
    </div>
    <!-- <div class="inline-flex w-full justify-center mt-12">
      <button  class="mx-4 bg-gray-100 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none transition-bg">
        Prev
      </button>
      <button class="mx-4 bg-gray-100 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none transition-bg">
        Next
      </button>
    </div> -->
    <div class="flex mt-12 justify-center">
      <div class="m-3">
        <button
          @click="moveTest(-1)"
          class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center transition-bg focus:outline-none"
        >
          <span class="mx-auto">Prev</span>
        </button>
      </div>
      <div class="m-3">
        <button
          @click="moveTest(1)"
          class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center transition-bg focus:outline-none"
        >
          <span class="mx-auto">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.desat {
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    -moz-filter: grayscale(1);
    -ms-filter: grayscale(1);
    -o-filter: grayscale(1);
    cursor: pointer;
    transition: .2s filter;
    transform: scale(0.99);
}
.scaled {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
}
</style>
<script>
import Stars from '~/components/Stars'
export default {
  name: 'TestimonialSection',
  components: {
    Stars
  },
  data () {
    return {
      selected: [1],
      reviews: [
        {
          id: 0,
          name: 'Sandy Grain',
          image: 'rev1.jpg',
          job: 'Interior Designer'
        },
        {
          id: 1,
          name: 'Bruce Cash',
          image: 'rev2.jpg',
          job: 'Billiards Player'
        },
        {
          id: 2,
          name: 'Amanda Savage',
          image: 'rev3.jpg',
          job: 'Interior Designer'
        }
      ]
    }
  },
  methods: {
    moveTest (val) {
      if (val === 1) {
        if (this.selected[0] !== 2) {
          const newVal = [this.selected[0] + 1]
          this.selected = newVal
        } else {
          this.selected = [0]
        }
      }
      if (val === -1) {
        if (this.selected[0] !== 0) {
          const newVal = [this.selected[0] - 1]
          this.selected = newVal
        } else {
          this.selected = [2]
        }
      }
    }
  }
}
</script>

<style scoped>
.styled {
  background-color: #fbfbfb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23111111' fill-opacity='0.075' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
