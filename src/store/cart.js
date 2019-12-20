import Vue from 'vue'

let cart, cartCount

if (process.client) {
  cart = window.localStorage.getItem('cart')
  cartCount = window.localStorage.getItem('cartCount')
}

export const state = () => ({
  cart: cart ? JSON.parse(JSON.stringify(cart)) : [],
  cartCount: cartCount ? parseInt(cartCount) : 0
})

export const mutations = {
  addToCart (state, item) {
    const found = state.cart.find(product => product.sku === item.sku)

    if (found) {
      found.quantity++
      found.totalPrice = found.quantity * found.msrp
    } else {
      state.cart.push(item)

      Vue.set(item, 'quantity', 1)
      Vue.set(item, 'totalPrice', item.msrp)
    }

    state.cartCount++
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    window.localStorage.setItem('cartCount', state.cartCount)
  },
  removeFromCart (state) {
    state.cart.splice(0)
    state.cartCount = 0
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    window.localStorage.setItem('cartCount', state.cartCount)
  },
  increaseQty (state, context) {
    state.cartCount += 1
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    window.localStorage.setItem('cartCount', state.cartCount)
  }
}
