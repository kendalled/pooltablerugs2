// This is `@middleware/router-auth.js`
export default function ({
  store,
  route,
  redirect
}) {
  // if (route.name === 'login' && process.server) {
  //   if (store.state.user !== null) {
  //     //  redirect('/admin')
  //     console.log(store.getters.['user/getUser'])
  //   } else if (store.state.user === null) {
  //     //  redirect('/login')
  //     console.log(store.state)
  //   }
  if (route.name === 'login') {
    redirect('/login')
    console.log(store.state)
  }
}

// else {
//   redirect('/')
//   console.log('works 3')
// }

// function isAdminRoute (route) {
//   if (route.matched.some(record => record.path === '/admin')) {
//     return true
//   }
// }
// && isAdminRoute(route)
