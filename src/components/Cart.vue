<template>
  <transition name="fade">
    <div v-if="$store.state.cartCount !== 0" class="w-full max-w-sm absolute flex-col flex bg-white rounded shadow-md px-6 overflow-y-auto py-10 z-30">
      <!-- <h1 class="text-xl text-gray-800 w-full text-center font-semibold tracking-tight mb-1">
      Your Cart:
      {{ $store.state.cartCount }} item(s)<br>
    </h1>
    <p v-if="$store.state.cartCount === 0">
      <i>&nbsp;Your cart is empty!</i>
    </p> -->
      <h1 class="border-b text-xl text-gray-800 w-full text-center font-semibold tracking-tight">
        Your Cart:
        {{ $store.state.cartCount }} item(s)
      </h1>
      <div v-for="(product, i) in skuList" :key="product" class="w-full flex items-center h-24 border-b">
        <div class="w-1/4">
          <img src="https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Fwhiteroom.jpg?alt=media&token=0b453813-6cde-4ea4-bdac-20dbb3c9ef70" class="w-16 h-auto rounded-full">
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
        <button class="bg-gray-700 hover:bg-gray-600 transition-bg shadow-md text-white font-bold py-2 px-4 rounded w-32" @click="removeFromCart()">
          Clear Cart
        </button>
        <button class="bg-green-500 hover:bg-green-700 transition-bg shadow-md text-white font-bold py-2 px-4 rounded w-32">
          Checkout
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    skuList () {
      return this.$store.state.cart.map(a => a.sku)
    },
    priceList () {
      return this.$store.state.cart.map(a => a.MSRP / 100)
    },
    quantityList () {
      return this.$store.state.cart.map(a => a.quantity)
    }
  },
  methods: {
    checkout () {
      alert('Pay us $' + this.total)
    },
    removeFromCart (item) {
      this.$store.commit('removeFromCart', item)
    }
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
