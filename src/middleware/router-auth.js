// This is `@middleware/router-auth.js`base'
export default function ({ store, route, redirect }) {
  if (route.name === 'admin' && process.server) {
    if (store.getters['user/isUser']) {
      return redirect('/login')
    } else {
      return redirect('/')
    }
  }
}
