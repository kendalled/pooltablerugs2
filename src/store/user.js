
let user
if (process.client) {
  user = window.localStorage.getItem('user')
}

export const state = () => ({
  user: user || null
})

export const getters = {
  getUser (state) {
    return state.user
  },
  isUser (state) {
    return state.user !== null
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
    window.localStorage.setItem('user', state.user)
  },
  clearUser (state) {
    state.user = null
    window.localStorage.setItem('user', null)
  }
}

export const actions = {
  writeUser (context, userData) {
    context.commit('setUser', userData)
  }
}
