<template>
  <div>
    <!-- start card -->
    <section class="container relative px-4 ">
      <div class="card contentBox bg-white rounded-lg shadow-lg" :class="{ flipped: isFlipped }">
        <div class="front px-4 py-4 h-full w-full">
          <p class="tracking-tight text-sm font-semibold text-gray-700">
            {{ info.collection }} • {{ info.sku }}
          </p>
          <!-- price spot -->
          <div class="mt-1 flex items-center">
            <span class="text-gray-900 text-xl">{{ formattedPrice }}</span>
          </div>
          <!-- tags / reviews -->
          <div class="flex items-end mt-2">
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ info.styling }}</span>
            <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ info.group }}</span>
            <svg class="inline-block h-6 w-6 text-gray-600 hover:text-green-600 hover:cursor-pointer fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
            </svg>
          </div>
          <div class="mt-4 mb-0 inline-flex items-center text-sm text-gray-600">
            <svg
              v-for="i in 5"
              :key="i"
              class="h-4 w-4 fill-current"
              :class="info.rating >= i ? 'text-green-500' : 'text-gray-400'"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
            <span class="ml-2 text-xs text-gray-700">{{ info.reviewCount }} reviews</span>
          </div>
          <!-- commerce buttons -->
          <div class="flex pt-3 justify-between px-0">
            <button class="bg-white transition-bg hover:bg-gray-300 shadow text-gray-700 font-bold py-2 px-4 rounded" @click="flip()">
              See Details
            </button>
            <button class="bg-green-600 hover:bg-green-700 transition-bg shadow text-white font-bold py-2 px-4 rounded" @click="addToCart(info)">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="back px-4 py-4 h-full w-full rounded" @click="flip()">
          <span class="text-sm text-left text-gray-800">
            {{ info.romance }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/*
<div class="relative px-4 -mt-8">
      <div class="contentBox bg-white rounded-lg px-4 py-4 shadow-lg" :class="{ 'slideDown': isHovering }">
        <!--        <h4 class="mt-1 text-gray-900 font-semibold text-sm">-->
        <!--          {{ info.sku }}-->
        <!--        </h4>-->
        <p class="tracking-tight text-sm font-semibold text-gray-700">
          {{ info.collection }} • {{ info.sku }}
        </p>
        <!-- price spot -->
        <div class="mt-1 flex items-center">
          <span class="text-gray-900 text-xl">{{ formattedPrice }}</span>
        </div>
        <!-- tags / reviews -->
        <div class="flex items-end mt-2">
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ info.styling }}</span>
          <span class="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 transition-bg mr-2 hover:bg-gray-400 hover:cursor-pointer">{{ info.group }}</span>
          <svg class="inline-block h-6 w-6 text-gray-600 hover:text-green-600 hover:cursor-pointer fill-current ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
          </svg>
        </div>
        <div class="mt-4 mb-0 inline-flex items-center text-sm text-gray-600">
          <svg
            v-for="i in 5"
            :key="i"
            class="h-4 w-4 fill-current"
            :class="info.rating >= i ? 'text-green-500' : 'text-gray-400'"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
          </svg>
          <span class="ml-2 text-xs text-gray-700">{{ info.reviewCount }} reviews</span>
        </div>
        <!-- commerce buttons -->
        <div class="flex pt-3 justify-between px-0">
          <button class="bg-white transition-bg hover:bg-gray-300 shadow text-gray-700 font-bold py-2 px-4 rounded" @click="seeDetails = !seeDetails">
            See Details
          </button>
          <button class="bg-green-600 hover:bg-green-700 transition-bg shadow text-white font-bold py-2 px-4 rounded" @click="addToCart(info)">
            Add to Cart
          </button>
        </div>
        <span v-if="seeDetails" class="ml-2 text-xs">
          {{ info.romance }}
        </span>
      </div>
    </div>
*/
export default {
  name: 'FlipCard',
  props: {
    'info': {
      type: Object,
      default () {
        return {
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Froomrug.jpg?alt=media&token=b43d86ba-d8b7-49d7-8595-80515b581ded',
          sku: 'AGR-2304',
          group: '2\' x 3\'',
          collection: 'Agra',
          styling: 'Modern',
          MSRP: 1900.00,
          reviewCount: 34,
          rating: 4,
          romance: 'Agra\'s Collection features hundreds of timeless styles, from modern to chic. This classic style will surely create a good impression on your guests.'
        }
      }
    }
  },
  data () {
    return {
      isFlipped: false
    }
  },
  computed: {
    formattedPrice () {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return formatter.format(this.info.MSRP)
    }
  },
  methods: {
    flip () {
      this.isFlipped = !this.isFlipped
    }
  }
}
</script>

<style scoped>
.container {
    width: 320px;
    height: 212px;
    position: relative;
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -o-perspective: 800px;
    perspective: 800px;
}
.card {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transition: -webkit-transform .9s;
    -moz-transition: -moz-transform .9s;
    -o-transition: -o-transform .9s;
    transition: transform .9s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
}
.card div {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
}
.card .front {
  background: transparent;
}
.card .back {
    margin-top: -13.2rem;
    background: white;
    -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
}
.card.flipped {
    -webkit-transform: rotateY( 180deg );
    -moz-transform: rotateY( 180deg );
    -o-transform: rotateY( 180deg );
    transform: rotateY( 180deg );
}

</style>
