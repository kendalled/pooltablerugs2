import firebase from 'firebase/app'
import 'firebase/auth'

// export default function ({
//   store
// }) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     store.commit('user/updateUser', {
//       user
//     })
//     console.log(store)
//   })
//   if (this.$store.state.user.user) {
//     console.log('the thing is' + store.state.user)
//   } else {
//     console.log('well,,,' + store.state.user)
//   }
// }

export default function ({
  store
}) {
  firebase.auth().onAuthStateChanged(function (user) {
    store.commit('user/updateUser', {
      user
    })
    console.log(store.state.user.user)
  })
}
