<template>
  <div class="loginroot pb-2 h-screen w-full">
    <div class="transition-all flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div class="flex rounded-lg shadow-lg h-auto w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="min-height:500px; max-width: 700px;">
        <div class="flex flex-col w-full md:w-2/3 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-3xl text-center tracking-tighter text-gray-800">
              Log in to complete checkout.
            </h1>
            <div v-show="!loggedIn" class="w-full mt-6 px-2">
              <FirebaseUi v-show="!loggedIn" />
              <div class="text-center mt-4">
                <a class="no-underline hover:underline text-gray-600 text-xs" href="#">
                  Forgot Your Password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="loginpic hidden md:block md:flex-1 rounded-r-lg bg-cover bg-center" />
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseUi from '~/components/FirebaseUi'
export default {
  name: 'LoginCard',
  components: {
    FirebaseUi
  },
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
    }
  }
}
</script>

<style scoped>
.loginpic {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.55)), url("https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/Images%2Fsamplerug.jpg?alt=media&token=44e0a8cd-2231-4058-baa9-a2eba8ef23d6")
}
.loginroot {
    background-color: #38a168;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a724b' fill-opacity='0.19'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
@media (min-width: 1280px) {
  .loginroot {
    height: 92vh !important;
  }
}
</style>
