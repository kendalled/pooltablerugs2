<template>
  <section class="bg-gray-800 sm:py-24 py-12">
    <h2
      class="text-center text-2xl lg:text-3xl text-white font-medium -mt-2 leading-snug"
    >
      Don't just take our word for it.
    </h2>
    <p class="text-center text-base lg:text-lg text-gray-100 mt-2 px-6">
      Take a look at what our satisfied customers have to say.
    </p>

    <div class="h-1 mx-auto bg-gray-100 w-40 opacity-75 mb-8 md:mb-12 lg:mb-16 mt-4 rounded" />
    <div class="container mx-auto sm:flex-row flex-col flex justify-center">
      <div class="sm:w-1/3 max-w-sm sm:mb-0 mb-16 md:mx-2 lg:mx-4 bg-white shadow rounded pt-4 pb-10 px-12">
        <div class="flex w-full h-auto ml-8 pb-6 pr-4 items-end justify-end mb-2">
          <p class="italic text-gray-700 text-sm text-center px-8 lg:px-0 inline-block ml-6 mt-3 w-auto w-2/3">
            "I received my rug and was amazed with the support, speed, and quality. Bravo!"
          </p>
        </div>
        <div class="flex w-full h-auto justify-between pl-24 -mt-4">
          <img src="https://demos.onepagelove.com/html/leno/images/testimonial-1.jpg" class="ml-2 shadow-md border-2 border-gray-600 rounded-full w-12 h-12 inline-block z-20">
          <div class="flex flex-col w-auto">
            <p class="font-semibold text-gray-700 text-right text-sm block w-full">
              Sandy Grain
            </p>
            <p class="font-semibold text-green-600 text-right block leading-tight w-full">
              Interior Designer
            </p>
            <Stars class="absolute pt-10 mt-1 pl-16" />
          </div>
        </div>
        <span class="text-xs text-gray-700 hover:text-green-600 transition-colors text-left w-full pl-2 underline absolute">see more</span>
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
  }
}
</script>
