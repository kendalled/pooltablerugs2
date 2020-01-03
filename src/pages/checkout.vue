<template>
  <!-- change padding to more when done! -->
  <div class="h-auto w-screen flex flex-col max-w-6xl mx-auto pb-8 pt-12 px-8 lg:flex-row justify-center">
    <!-- copy these classes -->
    <form @submit.prevent="continueHandler" v-if="!continued" class="w-full h-full pt-16 pb-10 px-16 bg-white rounded-l rounded-r lg: rounded-r-none shadow-md" method="POST">
      <section id="shipping-details">
        <div class="theHeader flex w-full justify-between">
          <h1 class="text-4xl -ml-1 tracking-tight font-bolder text-gray-700">
            Checkout
          </h1>
          <div class="subHeading flex w-auto h-auto justify-center items-center">
            <span class="text-base text-gray-700 tracking-normal -mb-2">Shipping & Contact Details</span>
          </div>
        </div>
        <div class="border-t border-b pt-5 mt-1 -mx-3 mb-6 flex flex-wrap">
          <!-- TODO: FIX STYLING INCONSISTENCY -->
          <div class="px-3 mb-0 w-full md:w-1/2 md:mb-6">
            <label class="text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700" for="first-name">
              First Name
            </label>
            <input
              id="first-name"
              autocomplete="fName"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jane"
              name="First Name"
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              autocomplete="lName"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
              name="Last Name"
            >
          </div>
          <!-- TODO: FIX STYLING INCONSISTENCY remove mb-8 if no border-b -->
          <div class="px-3 mb-0 w-full md:w-1/2 md:mb-8">
            <label class="text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700" for="phone-num">
              Phone Number
            </label>
            <input
              id="phone-num"
              autocomplete="phone"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="(123) 456 7890"
              name="Phone"
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="e-mail">
              Email
            </label>
            <input
              id="e-mail"
              autocomplete="email"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="you@email.com"
              name="Email"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="text-xs font-bold mb-2 inline-block uppercase tracking-wide text-gray-700" for="shipping-address">
              Address
            </label>
            <input
              id="shipping-address"
              autocomplete="new-password"
              class="py-3 px-4 mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="1234 Crystal Lake Dr."
              name="Address"
            >
            <p class="text-gray-600 text-xs italic">
              Enter your full shipping address.
            </p>
          </div>
        </div>
        <div class="-mx-3 mb-2 flex flex-wrap">
          <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
            <label class="text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700" for="city">
              City
            </label>
            <input
              id="city"
              autocomplete="newcity"
              class="py-3 px-4 leading-tight appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Albuquerque"
              name="City/Province"
            >
          </div>
          <div class="px-3 mb-6 w-full md:w-1/3 md:mb-0">
            <label class="text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700" for="state">
              State
            </label>
            <div class="relative">
              <select id="state" class="py-3 px-4 pr-8 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="State">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
                <option>Florida</option>
              </select>
              <div class="px-2 flex items-center absolute pointer-events-none inset-y-0 right-0 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div class="px-3 mb-6 w-full md:w-1/3 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zip">
              Zip
            </label>
            <input id="zip" class="py-3 px-4 mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded leading-tight focus:outline-none focus:bg-white" type="text" placeholder="90210" name="Postal Code">
            <p class="text-red-500 text-xs italic absolute">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="border-t pt-6 mt-6 flex flex-wrap flex-row justify-between">
          <Checkbox class="checky" />
          <div class="controls">
            <a class="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 transition-colors" href="#">
              Need Help?
            </a>
            <button type="submit" class="ml-4 font-bold py-2 px-4 transition-bg bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline">
              Continue
            </button>
          </div>
        </div>
        <div class="h-32 flex flex-col justify-end">
          <nuxt-link to="/">
            <img class="h-auto w-48 ml-1 mb-4 opacity-25 hover:opacity-75 transition-opacity" alt="Pool Table Rugs Logo" src="~/static/logo.png">
          </nuxt-link>
        </div>
      </section>
    </form>
    <form @submit.prevent="submitHandler" v-if="continued" class="w-full h-full pt-16 pb-10 px-16 bg-white rounded-l rounded-r lg: rounded-r-none shadow-md" method="POST">
      <section id="payment-details">
        <div class="theHeader flex w-full justify-between">
          <h1 class="text-4xl -ml-1 tracking-tight font-bolder text-gray-700">
            Checkout
          </h1>
          <div class="subHeading flex w-auto h-auto justify-center items-center">
            <span class="text-base text-gray-700 tracking-normal -mb-2">Payment Details</span>
          </div>
        </div>
        <div class="border-t pt-5 mt-1 -mx-3 mb-6 flex flex-wrap">
          <div class="px-3 mb-6 w-full md:w-1/2 md:mb-0">
            <label class="text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700" for="2first-name">
              First Name
            </label>
            <input
              id="2first-name"
              autocomplete="fName"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jane"
              name="First Name"
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="2last-name">
              Last Name
            </label>
            <input
              id="2last-name"
              autocomplete="lName"
              class="appearance-none block w-full bg-gray-200 py-3 px-4 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
              name="Last Name"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="text-xs font-bold mb-2 inline-block uppercase tracking-wide text-gray-700" for="2shipping-address">
              Address
            </label>
            <input
              id="2shipping-address"
              autocomplete="new-password"
              class="py-3 px-4 mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="1234 Crystal Lake Dr."
              name="Address"
            >
            <p class="text-gray-600 text-xs italic">
              Enter your full shipping address.
            </p>
          </div>
        </div>
        <div class="w-auto h-auto border-t pt-4 pb-4">
          <StripeElement :clicked="checkedOut" />
        </div>
        <div class="border-t pt-6 mt-6 flex flex-wrap flex-row justify-between">
          <Checkbox class="checky" />
          <div class="controls">
            <a class="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 transition-colors" href="#">
              Need Help?
            </a>
            <button type="submit" class="ml-4 font-bold py-2 px-4 transition-bg bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline">
              Checkout
            </button>
          </div>
        </div>
        <div class="h-40 flex flex-col justify-end">
          <nuxt-link to="/">
            <img class="h-auto w-48 ml-1 mb-4 opacity-25 hover:opacity-75 transition-opacity" alt="Pool Table Rugs Logo" src="~/static/logo.png">
          </nuxt-link>
        </div>
      </section>
    </form>
    <section id="content" class="w-7/12 shadow-md rounded-r px-8 py-16 flex-col justify-between hidden lg:flex">
      <div class="firstHalf w-auto h-auto">
        <h2
          class="text-center text-3xl text-white font-medium leading-snug"
        >
          Shopping Cart<span v-if="$store.state.cart.cartCount >= 1">: {{ $store.state.cart.cartCount }} item</span><span v-if="$store.state.cart.cartCount >= 2">s</span>
        </h2>
        <!-- use as footer text <p class="text-center text-lg text-gray-100 mt-2 px-6"> -->

        <div class="h-1 mt-4 w-56 mx-auto bg-gray-100 opacity-75 rounded" />
        <div v-for="(product, i) in skuList" :key="i" class="my-6 py-6 pl-6 px-6 w-full items-center justify-between flex h-auto bg-white rounded shadow-md">
          <div class="w-1/8">
            <img :src="foldList[i]" class="w-16 h-auto rounded-full">
          </div>
          <div class="w-1/3 h-full flex flex-col">
            <div class="w-full h-auto text-center">
              <h2 class="text-xs font-bold block uppercase tracking-wide text-gray-700">
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
              <Counter :val="quantityList[i]" @increment="handleChange" @decrement="handleChange" label-text="Qty" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="isHidden" class="px-4 px-4 py-3 -mb-4 bg-white rounded shadow-md">
        <h2
          class="font-medium text-right text-base text-gray-700 leading-snug"
        >
          Subtotal: ${{ subTotal }}.00
        </h2>
        <h2
          class="font-medium text-right text-base text-gray-600 leading-snug"
        >
          Tax: ${{ taxOnly }}.00
        </h2>
        <h2
          class="font-medium text-right text-lg text-gray-800 leading-snug"
        >
          Grand Total: ${{ grandTotal }}
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase'
import StripeElement from '~/components/StripeElement'
import Checkbox from '~/components/Checkbox'
import Counter from '~/components/Counter'
export default {
  layout: 'checkout',
  components: {
    Checkbox,
    Counter,
    StripeElement
  },
  data () {
    return {
      continued: false,
      checkedOut: false
    }
  },
  computed: {
    isHidden () {
      return this.$store.state.cart.cartCount > 0
    },
    skuList () {
      return this.$store.state.cart.cart.map(a => a.sku)
    },
    priceList () {
      return this.$store.state.cart.cart.map(a => a.MSRP)
    },
    quantityList () {
      return this.$store.state.cart.cart.map(a => a.quantity)
    },
    subTotal () {
      let totalPrice = 0
      const arr = this.$store.state.cart.cart.map(a => a.MSRP)
      for (let i = arr.length - 1; i >= 0; i--) {
        totalPrice += arr[i]
      }
      return totalPrice
    },
    foldList () {
      return this.$store.state.cart.cart.map(a => a.foldURL)
    },
    taxOnly () {
      return this.roundTo(this.subTotal * 0.07, 2)
    },
    grandTotal () {
      return this.roundTo(this.subTotal + this.taxOnly, 2)
    },
    userAccount () {
      return this.$store.state.user ? this.$store.state.user.id : 'none'
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
    },
    continueHandler () {
      this.continued = true
      // Get user data from form fields
      const state = document.getElementById('state').value
      const city = document.getElementById('city').value
      const zip = document.getElementById('zip').value
      const phone = document.getElementById('phone-num').value
      // const line2 = document.getElementById('line2').value
      // Concatenates name fields
      const name = document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value
      const email = document.getElementById('e-mail').value
      const line1 = document.getElementById('shipping-address').value

      fireDb.collection('rug_customers').doc(this.userAccount).collection('details').add({
        name,
        line1,
        city,
        state,
        email,
        phone,
        zipCode: zip
      }).then(() => {
        console.log('Details created in firestore.')
      })
    },
    submitHandler () {
      // TODO:
      // changes prop on stripeElement, gets emit
      // then charges customer
      this.checkedOut = true
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
