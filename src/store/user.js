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
