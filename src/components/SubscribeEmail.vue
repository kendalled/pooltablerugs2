<!-- <template>
  <div
    :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6 )), url(' + require('@/static/'+bg) + ')' }"
    class="w-full bg-cover bg-gray-500 bg-center bg-no-repeat"
  >
    <div class="p-10  py-20 flex flex-col flex-wrap justify-center content-center">
      <div class="m-0 p-0 text-3xl font-bold tracking-tight text-white antialiased text-center">
        Subscribe for 10% off.
      </div>
      <div class="tracking-tight m-0 p-0 text-xl text-gray-100 antialiased text-center">
        Find out about events and other news.
      </div>
      <form class="m-4 flex">
        <input class="rounded-l-lg px-6 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none" aria-label="Email" placeholder="you@email.com">
        <button class="focus:outline-none transition-bg hover:bg-blue-300 px-4 rounded-r-lg bg-blue-200 text-blue-900 font-semibold py-2 text-sm border-blue-200 border-t border-b border-r" aria-label="Subscribe Button">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template> -->

<template>
  <div class="flex w-full h-auto py-4 px-10 items-center bg-blue-600">
    <div class="w-1/2 flex justify-center flex-col h-32">
      <div class="m-0 py-0 pr-0 pl-2 text-3xl font-bold tracking-tight text-white antialiased">
        Subscribe for 10% off.
      </div>
      <div class="tracking-tight m-0 py-0 pr-0 pl-2 text-xl text-gray-100 antialiased">
        Find out about flash sales and other news by signing up for our newsletter.
      </div>
    </div>
    <div class="w-1/2 flex justify-center items-center flex-col bg-gray-700 h-auto py-2 rounded shadow">
      <form class="m-4 flex shadow rounded-lg">
        <input class="border-b border-r rounded-l-lg py-4 pr-32 pl-4 mr-0 text-gray-800 border-gray-200 bg-white" placeholder="you@mail.com">
        <button class="px-8 rounded-r-lg bg-blue-600 text-white font-bold py-4 uppercase text-sm border-blue-600 border-t border-b border-r">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscribeEmail',
  props: {
    'bg': {
      type: String,
      default: 'samplerug.jpg'
    }
  }
}
</script>
