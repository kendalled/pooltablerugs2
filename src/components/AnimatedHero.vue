<template>
  <header>
    <section class="header-content w-full">
      <div class="mx-auto w-3/4 px-4 mb-16">
        <h1 class="mb-2 text-white leading-tight roboto font-black header-title animate-pop-in">
          Protect your pool table<br class="hidden md:block"> in style with a durable rug.
        </h1>
        <h2 class="text-2xl tracking-tight mb-6 text-gray-200 header-subtitle animate-pop-in">
          Thousands of designs, free shipping, 24/7 support.
        </h2>
        <div class="mt-0">
          <button aria-label="About Our Rugs" class="header-button sCta animate-pop-in bg-gray-100 transition-bg hover:bg-white text-gray-800 font-semibold py-3 px-6 border border-gray-400 rounded shadow">
            Learn More
          </button>
          <nuxt-link to="/rugs">
            <button aria-label="Shop Rugs" class="header-button pCta animate-pop-in px-6 py-3 inline-block ml-4 bg-green-700 hover:bg-green-500 rounded text-white font-semibold transition-bg tracking-wide shadow-md focus:outline-none">
              Shop Rugs
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'AnimatedHero'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:900&display=swap');
header {
  align-items: center;
  display: flex;
  min-height: 85vh;
  height: auto;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100px;
}

h1 {
  text-shadow: 0px 4px 3px rgba(0,0,0,0.2), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
  font-size: 2.8rem;
}

header:before {
  animation: fade-slide-down 1.5s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
  background: linear-gradient(105deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 75%),
              url('https://firebasestorage.googleapis.com/v0/b/pooltablerugs.appspot.com/o/original1920.jpg?alt=media&token=1db49c2c-603a-487a-9e49-f2b2527e858c') no-repeat bottom;
  background-size: cover;
  background-position: center;
  content: "";
  opacity: 0;
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: -1;
}

header:after {
  animation: rotate-up .5s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
  background: #f7fafc;
  content: "";
  height: 12rem;
  left: -5%;
  position: absolute;
    right: -5%;
    top: 90%;
  transform-origin: 0 0;
  z-index: 0;
}

.header-button {
  transform: translateZ(.1px);
  position: relative;
  z-index: 10;
}

.animate-pop-in {
  animation: pop-in .8s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
}

.header-title {
  animation-delay: .8s;
}

.header-subtitle {
  animation-delay: .9s;
}

.pCta{
  animation-delay: 1.3s;
}

.sCta {
  animation-delay: 1.2s;
}

/* Animations */

@keyframes fade-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: translateY(-4rem) scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* @keyframes rotate-up {
  100% {
    transform: rotateZ(-4deg);
  }
} */
</style>
