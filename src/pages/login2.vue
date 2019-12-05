<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="https://images.unsplash.com/photo-1567136445538-f885290a9961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80?sat=-20&blend=667EEA&blend-mode=multiply" alt="Pool table on a rug." class="w-full h-full object-cover">
    </div>
    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
    >
      <div class="w-full h-100">
        <nuxt-link to="/">
          <img class="h-6 w-auto mt-2" alt="Pool Table Rugs Logo" src="~/static/logo.png">
        </nuxt-link>

        <h1 class="text-xl md:text-2xl font-semibold leading-tight mt-12 text-gray-800">
          Log in to your account
        </h1>

        <form class="mt-6" action="#" method="POST">
          <div class="mb-4 relative">
            <input id="email" class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" type="text" autofocus>
            <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Email Address</label>
          </div>
          <div class="mb-4 relative">
            <input id="password" class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" type="password" autofocus>
            <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Password</label>
          </div>

          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>

          <button
            type="submit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full">

        <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
            <span class="ml-4">
              Log in
              with
              Google</span>
          </div>
        </button>

        <p class="mt-8">
          Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account</a>
        </p>

        <p class="text-sm text-gray-500 mt-12">
          &copy; 2019 Pool Table Rugs - All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
    .input {
        transition: border 0.2s ease-in-out;
        min-width: 280px
    }

    .input:focus+.label,
    .input:active+.label,
    .input.filled+.label {
        font-size: .75rem;
        transition: all 0.2s ease-out;
        top: -0.1rem;
        color: #667eea;
    }

    .label {
        transition: all 0.2s ease-out;
        top: 0.4rem;
        left: 0;
    }
</style>

<script>
const toggleInputContainer = function (input) {
  if (input.value !== '') {
    input.classList.add('filled')
  } else {
    input.classList.remove('filled')
  }
}

const labels = document.querySelectorAll('.label')
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function () {
    this.previousElementSibling.focus()
  })
}

window.addEventListener('load', function () {
  const inputs = document.getElementsByClassName('input')
  for (let i = 0; i < inputs.length; i++) {
    console.log('looped')
    inputs[i].addEventListener('keyup', function () {
      toggleInputContainer(this)
    })
    toggleInputContainer(inputs[i])
  }
})
</script>

<script>
export default {
  name: 'Login2',
  layout: 'checkout'
}
</script>
