import Vue from 'vue'
// let user

// if (process.client) {
//   user = window.localStorage.getItem('user')
// }

export const state = () => ({
  user: null
})

export const getters = {
  getUser (state) {
    return state.user
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
    Vue.set(state, 'user', user)
    // this.commit('saveUser')
  },
  saveUser (state) {
    window.localStorage.setItem('user', state.user)
  }
}

export const actions = {
  writeUser (context, userData) {
    context.commit('setUser', userData)
  }
}
