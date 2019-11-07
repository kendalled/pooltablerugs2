<template>
  <div>
    <div class="relative pb-5/6">
      <img class="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover" :src="property.imageUrl" alt="">
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
        <h4 class="mt-1 text-gray-900 font-semibold text-sm">
          {{ property.title }}
        </h4>
        <!-- price spot -->
        <div class="mt-1 flex items-center">
          <span class="text-gray-900 text-xl">{{ formattedPrice }}</span>
        </div>
        <!-- tags / reviews -->
        <div class="flex items-end mt-2">
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">Modern</span>
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">5' x 8'</span>
          <svg class="inline-block h-6 w-6 text-gray-600 hover:text-green-600 hover:cursor-pointer fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
          </svg>
        </div>
        <div class="mt-4 mb-0 inline-flex items-center text-sm text-gray-600">
          <svg
            v-for="i in 5"
            :key="i"
            class="h-4 w-4 fill-current"
            :class="property.rating >= i ? 'text-green-500' : 'text-gray-400'"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
          </svg>
          <span class="ml-2 text-xs">{{ property.reviewCount }} reviews</span>
        </div>
        <!-- commerce buttons -->
        <div class="flex pt-3 justify-between px-0">
          <button class="bg-white transition-bg hover:bg-gray-300 shadow text-gray-700 font-bold py-2 px-4 rounded">
            See Details
          </button>
          <button class="bg-green-500 hover:bg-green-700 transition-bg shadow-md text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'property': {
      type: Object,
      default () {
        return {
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          beds: 3,
          baths: 2,
          title: 'Modern home in city center',
          price: 190000,
          reviewCount: 34,
          rating: 4
        }
      }
    }
  },
  computed: {
    formattedPrice () {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return formatter.format(this.property.price / 100)
    }
  }
}
</script>
