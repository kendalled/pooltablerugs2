let user
if (process.client) {
  user = window.localStorage.getItem('user')
}

export const state = () => ({
  user: user ? JSON.parse(JSON.stringify(user)) : null
})

export const mutations = {
  setUser (state, payload) {
    state.user = JSON.parse(JSON.stringify(payload))
    window.localStorage.setItem('user', JSON.stringify(payload))
  }
}

export const actions = {
  userChange (context, payload) {
    context.commit('setUser', payload)
  },
  userReset (context) {
    context.commit('setUser', null)
  }
}
