import { fireDb } from '../plugins/firebase'

export const plugins = [ fireDb ]
export const state = () => ({
  traditional: [],
  shag: [],
  modern: []
})

export const mutations = {
  saveProducts (state) {
    window.localStorage.setItem('traditional', state.traditional)
    window.localStorage.setItem('traditional', state.shag)
    window.localStorage.setItem('traditional', state.modern)
  },
  getRugs (state, info, style) {
    if (style === 1) {
      // const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').limit(4)
      state.traditional = info
    }
    if (style === 2) {
      // const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').limit(4)
      state.shag = info
    }
    if (style === 3) {
      // const rugRef = fireDb.collection('Rugs').where('Style', '==', 'Traditional').limit(4)
      state.modern = info
    }
  }
}

export const actions = {
  fetchAsync ({ commit }) {
    this.commit('productList/getRugs')
  }
}

export const getters = {
  traditionalLength: state => state.traditional.length
}
