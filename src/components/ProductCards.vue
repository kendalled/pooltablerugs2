<template>
  <div id="background" class="px-24 py-16 flex flex-wrap items-center justify-center">
    <!-- <div class="mx-auto flex-1 flex-col sm:p-24 lg:py-4 lg:px-48">
      <h1
        class="text-center text-3xl text-black font-medium -mt-2 leading-snug"
      >
        Thousands of styles to choose from.
      </h1>
      <div class="h-1 mx-auto bg-green-600 w-32 opacity-75 mt-4 mb-4 rounded" />
      <p class="text-center text-md text-gray-700 mt-2 px-6">
        From modern to chic, we're sure you'll find the perfect rug.
      </p>
    </div> -->

    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;" />
        <picture>
          <source srcset="~/static/sample2.webp" type="image/webp">
          <source srcset="img/sample2.png" type="image/png">
          <img class="relative w-56" src="~/static/sample2.png" alt="Sample rug image.">
        </picture>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 text-sm -mb-1">2,300 Designs</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-lg">Modern Rugs</span>
          <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;" />
        <picture>
          <source srcset="~/static/sample2.webp" type="image/webp">
          <source srcset="img/sample2.png" type="image/png">
          <img class="relative w-56" src="~/static/sample2.png" alt="Sample rug image.">
        </picture>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 text-sm -mb-1">1,500 Designs</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-lg">Casual Rugs</span>
          <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;" />
        <picture>
          <source srcset="~/static/sample2.webp" type="image/webp">
          <source srcset="img/sample2.png" type="image/png">
          <img class="relative w-56" src="~/static/sample2.png" alt="Sample rug image.">
        </picture>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 text-sm -mb-1">1,900 Designs</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-lg">Classy Rugs</span>
          <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCards'
}
</script>

<style scoped>

</style>
