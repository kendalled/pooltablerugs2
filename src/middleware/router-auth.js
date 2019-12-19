// This is `@middleware/router-auth.js`base'
export default function ({ store, route, redirect }) {
  if (route.name === 'admin') {
    if (!isAuth()) {
      return redirect('/login')
    }
  }
  function isAuth () {
    // TODO: Check if user session exists somehow
    return false
  }
}
