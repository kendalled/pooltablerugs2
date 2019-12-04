<template>
  <transition name="fade">
    <div v-if="$store.state.cartCount !== 0 && shown" class="w-full max-w-sm absolute flex-col flex bg-white rounded shadow-md px-4 overflow-y-auto pt-6 pb-10 z-30">
      <!-- <h1 class="text-xl text-gray-800 w-full text-center font-semibold tracking-tight mb-1">
      Your Cart:
      {{ $store.state.cartCount }} item(s)<br>
    </h1>
    <p v-if="$store.state.cartCount === 0">
      <i>&nbsp;Your cart is empty!</i>
    </p> -->
      <div class="flex w-full h-8 justify-end items-start">
        <div class="w-11/12 bg-transparent" />
        <svg
          @click="removeFromCart()"
          class="w-1/12 hover:cursor-pointer shadow rounded-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 138.3 138.3"
          style="enable-background:new 0 0 138.3 138.3;"
          xml:space="preserve"
        >
          <g id="Cup" />
          <g id="Liquid">
            <g>
              <circle style="fill:#FFFFFF;" cx="69.2" cy="69.2" r="68.7" />
              <g>
                <line style="fill:none;stroke:#35A169;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="89.9" y1="91.2" x2="48.4" y2="47.2" />
                <line style="fill:none;stroke:#35A169;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="48.4" y1="91.2" x2="89.9" y2="47.2" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <h1 class="border-b text-xl text-gray-800 w-full text-center font-semibold tracking-tight">
        Your Cart:
        {{ $store.state.cartCount }} item(s)
      </h1>
      <div v-for="(product, i) in skuList" :key="i" class="w-full flex items-center h-24 border-b">
        <div class="w-1/4">
          <img :src="foldList[i]" class="w-16 h-auto rounded-full">
        </div>
        <div class="w-1/2 text-center">
          <h3 class="text-sm text-gray-900">
            {{ product }}
          </h3>
          <h3 class="text-base text-gray-900">
            ${{ priceList[i] }}.00
          </h3>
        </div>
        <div class="flex w-1/4 justify-around flex-col">
          <div class="rounded text-sm hover:bg-gray-300 text-center text-gray-800 px-2 py-1">
            Qty: {{ quantityList [i] }}
          </div>

          <div class="rounded hover:bg-green-600 hover:text-white text-sm font-semibold text-center text-gray-900 px-2 py-1">
            Buy Now
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full h-auto pt-8">
        <button class="bg-gray-700 hover:bg-gray-600 transition-bg shadow text-white font-bold py-2 px-4 rounded w-1/2">
          View Cart
        </button>
        <nuxt-link to="checkout" class="ml-8 bg-green-500 hover:bg-green-700 transition-bg shadow text-white text-center font-bold py-2 px-4 rounded w-1/2">
          Checkout
        </nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      shown: true
    }
  },
  computed: {
    skuList () {
      return this.$store.state.cart.map(a => a.sku)
    },
    priceList () {
      return this.$store.state.cart.map(a => a.MSRP)
    },
    quantityList () {
      return this.$store.state.cart.map(a => a.quantity)
    },
    foldList () {
      return this.$store.state.cart.map(a => a.foldURL)
    }
  },
  methods: {
    checkout () {
      alert('Pay us $' + this.total)
    },
    removeFromCart (item) {
      this.$store.commit('removeFromCart', item)
    }
    // fadeMe: function() {
    //   this.show = !this.show
    // },

    // enter: function(el, done) {

    //   var that = this;

    //   setTimeout(function() {
    //     that.show = false;
    //   }, 3000); // hide the message after 3 seconds
    // }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
