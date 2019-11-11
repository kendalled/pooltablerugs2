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
    const found = state.cart.find(product => product.id === item.id)

    if (found) {
      found.quantity++
      found.totalPrice = found.quantity * found.price
    } else {
      state.cart.push(item)

      Vue.set(item, 'quantity', 1)
      Vue.set(item, 'totalPrice', item.price)
    }

    state.cartCount++
    this.commit('saveCart')
  },
  saveCart (state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
    window.localStorage.setItem('cartCount', state.cartCount)
  }
}
