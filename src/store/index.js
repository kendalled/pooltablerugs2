import Vue from 'vue'

let cart, cartCount

if (process.client) {
  cart = window.localStorage.getItem('cart')
  cartCount = window.localStorage.getItem('cartCount')
}

export const state = () => ({
  cart: cart ? JSON.parse(cart) : [],
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
    this.commit('saveCart')
  },
  removeFromCart (state) {
    state.cart.splice(0)
    state.cartCount = 0
    this.commit('saveCart')
  },
  saveCart (state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    window.localStorage.setItem('cartCount', state.cartCount)
  }
}
