// This is `@middleware/router-auth.js`base'
// mine
// export default function ({ store, route, redirect }) {
//   if (route.name === 'admin') {
//     if (!isAuth()) {
//       return redirect('/login')
//     }
//     return redirect('/rugs')
//   }
//   function isAuth () {
//     // TODO: Check if user session exists somehows
//     return store.getters['user/isUser']
//   }
// }
// modified david royer
// export default function ({
//   store,
//   redirect,
//   route
// }) {
//   if (store.getters['user/isUser'] && isAdminRoute(route)) {
//     return redirect('/admin')
//   } else if (!store.getters['user/isUser'] && isAdminRoute(route)) {
//     return redirect('/login')
//   } else {
//     return redirect('/')
//   }
// }

// function isAdminRoute (route) {
//   if (route.matched.some(record => record.path === '/admin')) {
//     return true
//   }
// }
// hackernoon
export default function ({ store, redirect, route }) {
  const isLogin = (store) => {
    return (store && store.state && store.state.user.user)
  }

  const isAdminRoute = (route) => {
    if (route.matched.some(record => record.path === '/admin')) {
      return true
    }
  }

  if (isLogin(store) && route.name === 'login') {
    return redirect('/admin')
  }
  if (!isLogin(store) && isAdminRoute(route)) {
    return redirect('/admin')
  }
}
