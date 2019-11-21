// let userid

// if (process.client) {
//   userid = window.localStorage.getItem('userid')
// }

// export const state = () => ({
//   userid: userid ? firebase.auth().currentUser.uid : null
// })

// export const mutations = {
//   // addToCart (state, item) {
//   //   const found = state.cart.find(product => product.sku === item.sku)

//   //   if (found) {
//   //     found.quantity++
//   //     found.totalPrice = found.quantity * found.msrp
//   //   } else {
//   //     state.cart.push(item)

//   //     Vue.set(item, 'quantity', 1)
//   //     Vue.set(item, 'totalPrice', item.msrp)
//   //   }

//   //   state.cartCount++
//   //   this.commit('saveCart')
//   // },
//   saveUserDetails (state) {
//     const user = firebase.auth().currentUser

//     if (user) {
//       // User is signed in.
//       state.userid = user.uid
//     } else {
//       // No user is signed in.
//       state.userid = null
//     }
//     this.commit('saveID')
//   },
//   saveID (state) {
//     window.localStorage.setItem('userid', state.userid)
//   }
// }
// import { firebase, auth } from '~/plugins/firebase'

// export const plugins = [ firebase, auth ]
export const state = () => ({
  user: {
    authenticated: false,
    id: null
  }
})

export const mutations = {
  authUser (state, uid) {
    state.user.id = uid
    state.user.authenticated = true
  }
}
