<template>
  <section class="styleMe sm:pt-32 sm:pb-40 py-12">
    <h2
      class="text-center text-2xl lg:text-3xl text-white font-semibold -mt-2 leading-snug"
    >
      Don't just take our word for it.
    </h2>
    <p class="text-center text-base lg:text-lg text-gray-100 mt-2 px-6">
      Take a look at what our satisfied customers have to say.
    </p>

    <div class="h-1 mx-auto bg-gray-100 w-40 opacity-75 mb-8 md:mb-12 lg:mb-16 mt-4 rounded" />
    <div class="container mx-auto sm:flex-row flex-col flex justify-center">
      <div v-for="q in reviews" :key="q.id" :class="[selected.includes(q.id) ? '' : 'desat']" class="sm:w-1/3 max-w-sm sm:mb-0 mb-16 md:mx-2 lg:mx-4 bg-white shadow rounded pt-4 pb-10 px-12">
        <div class="flex w-full h-auto ml-8 pb-6 pr-4 items-end justify-end mb-2">
          <p class="text-gray-700 text-sm text-center px-8 lg:px-0 inline-block ml-6 mt-3 w-auto w-2/3">
            <span class="italic">"</span> I received my rug and was amazed with the support, speed, and quality. Bravo!<span class="italic">"</span>
          </p>
        </div>
        <div class="flex w-full h-auto justify-between pl-24 -mt-4">
          <img :src="q.image" class="ml-2 shadow-md border-2 border-gray-600 rounded-full w-12 h-12 inline-block z-20">
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
      <!-- <div class="sm:w-1/3 w-full sm:mb-0 mb-16 md:mx-2 lg:mx-4">
        <img src="https://demos.onepagelove.com/html/leno/images/testimonial-2.jpg" class="desat rounded-full w-24 h-24 mx-auto mb-2">
        <p class="italic text-gray-400 text-center my-3 px-8 lg:px-0">
          Searching for a sturdy, spill-proof rug was difficult. The huge selection from Pool Table Rugs was delightful.
        </p>
        <p class="font-semibold text-gray-300 text-center text-xl">
          Bruce Cash - Billiards Player
        </p>
      </div>
      <div class="sm:w-1/3 w-full sm:mb-0 mb-16 md:mx-2 lg:mx-4">
        <img src="https://demos.onepagelove.com/html/leno/images/testimonial-3.jpg" class="desat rounded-full w-24 h-24 mx-auto mb-2">
        <p class="italic text-gray-400 text-center my-3 px-8 lg:px-0">
          My client wanted an outdoor shag rug. With hundreds of choices, it was easy to find the perfect design.
        </p>
        <p class="font-semibold text-gray-300 text-center text-xl">
          Amanda Savage - Interior Designer
        </p>
      </div> -->
    </div>
    <div class="inline-flex w-full justify-center mt-12">
      <button @click="moveTest(-1)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-l">
        Prev
      </button>
      <button @click="moveTest(1)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-r">
        Next
      </button>
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
}
.desat:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0f);
    -moz-filter: grayscale(0f);
    -ms-filter: grayscale(0f);
    -o-filter: grayscale(0f);
    cursor: pointer;
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
          image: 'https://demos.onepagelove.com/html/leno/images/testimonial-1.jpg',
          job: 'Interior Designer'
        },
        {
          id: 1,
          name: 'Bruce Cash',
          image: 'https://demos.onepagelove.com/html/leno/images/testimonial-2.jpg',
          job: 'Billiards Player'
        },
        {
          id: 2,
          name: 'Amanda Savage',
          image: 'https://demos.onepagelove.com/html/leno/images/testimonial-3.jpg',
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
.styleMe {
  background-color: #2d3748;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2392aaac' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
