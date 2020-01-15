<template>
  <section class="bg-gray-100">
    <div class="container mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>
      <div class="flex flex-wrap">
        <div class="w-full  md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-indigo-800 text-base px-6 mb-5">
              "Došli su niotkuda, krenuli nikamo i konačno su postali nitko i ništa"
            </p>
            <p class="text-indigo-500 text-xs md:text-sm px-6">
              -&-
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-green-500 text-base px-6 mb-5">
              Kittenhood
            </p>
            <p class="text-indigo-700 text-xs md:text-sm px-6">
              {{ text }}
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class="text-indigo-800 text-base px-6 mb-5">
              {{ above }}
            </p>
            <p class="text-indigo-500 text-xs md:text-sm px-6">
              {{ beyond }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BadTestimonials'
}
</script>
