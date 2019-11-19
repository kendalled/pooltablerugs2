<template>
  <!-- change padding to more when done! -->
  <div class="flex flex-col max-w-6xl mx-auto py-12 lg:flex-row h-screen w-screen">
    <!-- copy these classes -->
    <form class="w-full h-full pt-16 pb-10 px-16 bg-white rounded-l shadow-md">
      <h1 class="text-4xl -ml-1 tracking-tight font-bolder text-gray-700">
        Checkout
      </h1>
      <div class="flex flex-wrap border-t pt-5 mt-1 -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input id="grid-first-name" autocomplete="fName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Jane">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input id="grid-last-name" autocomplete="lName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Address
          </label>
          <input id="grid-password" autocomplete="new-password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="1234 Crystal Lake Dr.">
          <p class="text-gray-600 text-xs italic">
            Enter your full shipping address.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input id="grid-city" autocomplete="newcity" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            State
          </label>
          <div class="relative">
            <select id="grid-state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
              <option>Florida</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input id="grid-zip" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="90210">
          <p class="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap flex-row justify-between border-t pt-6 mt-6">
        <Checkbox class="checky" />
        <div class="controls">
          <a class="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 transition-colors" href="#">
            Need Help?
          </a>
          <button class="ml-4 transition-bg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Continue
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-end h-56">
        <nuxt-link to="/">
          <img class="h-auto w-48 ml-1 mb-4 opacity-25 hover:opacity-75 transition-opacity" alt="Pool Table Rugs Logo" src="~/static/logo.png">
        </nuxt-link>
      </div>
    </form>
    <section id="content" class="w-7/12 shadow-md rounded-r px-8 py-16">
      <h1
        class="text-center text-3xl text-white font-medium leading-snug"
      >
        Shopping Cart: {{ $store.state.cartCount }} item(s)
      </h1>
      <!-- use as footer text <p class="text-center text-lg text-gray-100 mt-2 px-6">
      Our rugs are both stylish and functional.
    </p> -->

      <div class="h-1 mx-auto bg-gray-100 w-56 opacity-75 mt-4 rounded" />
      <div v-for="(product, i) in skuList" :key="i" class="w-full my-6 items-center justify-between flex h-auto bg-white rounded shadow-md py-6 pl-6 px-6">
        <div class="w-1/8">
          <img :src="foldList[i]" class="w-16 h-auto rounded-full">
        </div>
        <div class="w-1/3 h-full flex flex-col">
          <div class="w-full h-auto text-center">
            <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-first-name">
              {{ product }}
            </h2>
          </div>
          <div class="w-full h-auto text-center">
            <h3 class="text-base text-gray-900">
              ${{ priceList[i] }}.00
            </h3>
          </div>
        </div>
        <div class="w-1/4 h-full flex flex-col">
          <div class="w-full h-full text-center">
            <Counter label-text="Qty" :val="quantityList[i]" @increment="handleChange" @decrement="handleChange" />
          </div>
        </div>
      </div>
      <div v-if="isHidden" style="height: 22rem;" class="flex h-full flex-col justify-end px-4">
        <h2
          class="text-right text-xl text-white font-medium leading-snug"
        >
          Subtotal: ${{ subTotal }}.00
        </h2>
        <h2
          class="text-right text-xl text-white font-medium leading-snug"
        >
          Tax: ${{ taxOnly }}
        </h2>
        <h2
          class="text-right text-2xl text-white font-medium leading-snug"
        >
          Grand Total: ${{ grandTotal }}
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import Checkbox from '~/components/Checkbox'
import Counter from '~/components/Counter'
export default {
  layout: 'checkout',
  components: {
    Checkbox,
    Counter
  },
  computed: {
    isHidden () {
      return this.$store.state.cartCount > 0
    },
    skuList () {
      return this.$store.state.cart.map(a => a.sku)
    },
    priceList () {
      return this.$store.state.cart.map(a => a.MSRP)
    },
    quantityList () {
      return this.$store.state.cart.map(a => a.quantity)
    },
    subTotal () {
      let totalPrice = 0
      const arr = this.$store.state.cart.map(a => a.MSRP)
      for (let i = arr.length - 1; i >= 0; i--) {
        totalPrice += arr[i]
      }
      return totalPrice
    },
    foldList () {
      return this.$store.state.cart.map(a => a.foldURL)
    },
    taxOnly () {
      return this.roundTo(this.subTotal * 0.07, 2)
    },
    grandTotal () {
      return this.roundTo(this.subTotal + this.taxOnly, 2)
    }
  },
  methods: {
    handleChange () {
      console.log('yah')
      console.log(this.priceList)
    },
    roundTo (n, digits) {
      if (digits === undefined) {
        digits = 0
      }

      const multiplicator = 10 ** digits
      n = parseFloat((n * multiplicator).toFixed(11))
      const test = (Math.round(n) / multiplicator)
      return +(test.toFixed(digits))
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600|Source+Sans+Pro:400,500, 600&display=swap");
body {
  background: #ddeefc;
  font-family: "Source Sans Pro", sans-serif;
  max-width: 100vw;
  max-height: 100vh;
}
.checky {
  margin-top: .3rem;
}
#content {
    background-color: #38a168;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a724b' fill-opacity='0.12'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
