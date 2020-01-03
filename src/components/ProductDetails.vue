<template>
  <div class="mx-auto w-full h-full max-w-2xl bg-white rounded shadow-md py-8 px-8">
    <p class="text-xl text-gray-700 font-bold w-full text-center">
      ABR-1034 - Aberdine
    </p>
    <div class="flex w-full h-full pt-4">
      <div class="w-1/2 h-auto">
        <img class="h-64 w-auto rounded shadow" src="~/static/roomrug.jpg">
      </div>
      <div class="w-1/2 h-auto">
        <h2 class="text-lg text-gray-700">
          $249.99
        </h2>
        <!-- tags / reviews -->
        <div class="flex items-end mt-2">
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">Traditional</span>
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">2' x 4'</span>
          <svg class="inline-block h-6 w-6 text-gray-600 hover:text-green-600 hover:cursor-pointer fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
          </svg>
        </div>
        <p class="text-sm text-gray-800 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat quae pariatur perferendis nulla incidunt consectetur nobis tenetur explicabo! Eveniet sed libero minus autem mollitia, nesciunt velit soluta vitae.
        </p>
        <p class="text-sm text-gray-800 mt-3">
          Eveniet sed libero minus autem mollitia.
        </p>
        <button class="mt-2 inline-block px-4 py-2 text-gray-700 text-sm rounded shadow bg-gray-100">
          Add to Cart
        </button>
        <button class="mt-2 inline-block px-4 py-2 ml-4 text-white text-sm rounded shadow bg-green-600">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails'
}
</script>
