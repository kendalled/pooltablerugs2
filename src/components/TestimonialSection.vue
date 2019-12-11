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
    <div class="container mx-auto sm:flex-row flex-col flex">
      <div class="sm:w-1/3 w-full sm:mb-0 mb-16 md:mx-2 lg:mx-4">
        <img src="https://demos.onepagelove.com/html/leno/images/testimonial-1.jpg" class="desat rounded-full w-24 h-24 mx-auto mb-2">
        <p class="italic text-gray-400 text-center my-3 px-8 lg:px-0">
          I received my rug and was amazed with the support, speed, and quality. My client's game room is complete.
        </p>
        <p class="font-semibold text-gray-300 text-center text-xl">
          Sandy Grain - Interior Designer
        </p>
      </div>
      <div class="sm:w-1/3 w-full sm:mb-0 mb-16 md:mx-2 lg:mx-4">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.desat {
    filter: none;
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    cursor: pointer;
}
</style>
<script>
export default {
  name: 'TestimonialSection'
}
</script>
