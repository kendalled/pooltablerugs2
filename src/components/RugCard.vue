<template>
  <div class="z-10 mb-8">
    <div
      @mouseover="isHovering = true"
      @mouseout="isHovering = false"
      class="relative pb-5/6"
    >
      <hooper :wheel-control="false" class="focus:outline-none">
        <!-- old slide markup <slide v-for="(slide, i) in slides" :key="i" :style="{ backgroundImage: 'url(' + (slide.image) + ')' }" class="bg-cover" /> -->
        <slide v-for="(slide, i) in slides" :key="i" :style="{ backgroundImage: 'url(' + (slide.image) + ')' }" class="bg-cover" />
        <!-- <hooper-pagination slot="hooper-addons" /> -->
        <hooper-navigation slot="hooper-addons">
          <svg
            slot="hooper-next"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="w-8 h-auto focus:outline-none"
            viewBox="0 0 138.3 138.3"
            style="enable-background:new 0 0 138.3 138.3;"
            xml:space="preserve"
          >
            <g id="Cup" />
            <g id="Liquid">
              <g>
                <circle style="fill:#FFFFFF;" cx="69.15" cy="69.15" r="68.65" />
                <polyline style="fill:none;stroke:#35A169;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="58.65,91.15 87.65,69.15 58.65,47.15" />
              </g>
            </g>
          </svg>

          <svg
            slot="hooper-prev"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="w-8 h-auto focus:outline-none"
            viewBox="0 0 138.3 138.3"
            style="enable-background:new 0 0 138.3 138.3;"
            xml:space="preserve"
          >
            <g id="Cup" />
            <g id="Liquid">
              <g>
                <circle style="fill:#FFFFFF;" cx="69.15" cy="69.15" r="68.65" />
                <polyline style="fill:none;stroke:#35A169;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="79.65,91.15 50.65,69.15 79.65,47.15" />
              </g>
            </g>
          </svg>
        </hooper-navigation>
      </hooper>
      <!-- <img class="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover" :src="info.imageUrl" alt=""> -->
    </div>
    <!-- start card -->
    <section class="container relative -mt-8 px-4 h-auto w-auto">
      <div :class="{ flipped: isFlipped }" class="card rounded-lg shadow-lg h-full absolute">
        <div class="front rounded-lg px-4 py-4 h-full w-full">
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
              :class="info.rating >= i ? 'text-green-500' : 'text-gray-400'"
              class="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
            <span class="ml-2 text-xs text-gray-700">{{ info.reviewCount }} reviews</span>
          </div>
          <!-- commerce buttons -->
          <div class="flex pt-3 justify-between px-0">
            <button @click="flip()" class="bg-white transition-bg hover:bg-gray-300 shadow text-gray-700 font-bold py-2 px-4 rounded focus:outline-none">
              See Details
            </button>
            <button @click="addToCart(info)" class="bg-green-600 hover:bg-green-700 transition-bg shadow text-white font-bold py-2 px-4 rounded focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
        <div @click="flip()" class="back px-4 py-4 h-full w-full rounded-lg">
          <span class="uppercase font-bold text-xs text-left text-gray-800">Summary:</span>
          <br>
          <span class="text-sm text-left text-gray-800">
            {{ truncateString(info.romance, 170) }} <a class="text-gray-600 underline" href="#" title="See more details">see more</a>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
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
          MSRP: 190000,
          reviewCount: 34,
          rating: 4,
          romance: 'Agra\'s Collection features hundreds of timeless styles, from modern to chic. This rug is a classic style that will surely create'
        }
      }
    }
  },
  data () {
    return {
      isFlipped: false,
      isHovering: false
    }
  },
  computed: {
    formattedPrice () {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return formatter.format(this.info.MSRP)
    },
    slides () {
      const fold = {
        image: this.info.foldURL
      }
      const front = {
        image: this.info.frontURL
      }
      return ([fold, front])
    }
  },
  methods: {
    truncateString (str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + '...'
    },
    addToCart (item) {
      this.$store.commit('addToCart', item)
    },
    flip () {
      this.isFlipped = !this.isFlipped
    }
  }
}
</script>

<style scoped>
.hooper {
  position: absolute;
  overflow: hidden;
  border-radius:6px;
  width:100% !important;
  height:100% !important;
}
.hooper-slide {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    border-radius: 6px;
    width:100%;
    height:100%;
  }
.container {
    min-width: 320px;
    min-height: 212px;
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -o-perspective: 800px;
    perspective: 800px;
}
.card {
    width: 90%;
    /*will-change: transform;*/
    -webkit-transition: -webkit-transform 1s;
    -moz-transition: -moz-transform 1s;
    -o-transition: -o-transform 1s;
    transition: transform 1s;
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
  background: white;
}
.card .back {
    /*will-change: transform;*/
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
