// import Vue from 'vue'
// let items

// if (process.client) {
//   items = window.localStorage.getItem('items')
// }

// export const state = () => ({
//   items: {}
// })

// export const actions = {
//   fetchItem ({ commit }, id) {
//   // return the Promise via `store.dispatch()` so that we know
//   // when the data has been fetched
//     return fetchItem(id).then(function (item) {
//       commit('setItem', { id, item })
//     })
//   }
// }
// export const mutations = {
//   setItem (state, { id, item }) {
//     Vue.set(state.items, id, item)
//   }
// }
