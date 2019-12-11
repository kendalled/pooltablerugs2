<template>
  <div class="flex justify-center max-w-lg mx-auto">
    <nav id="nav" class="w-auto relative">
      <span
        :style="{ transform: `translateX(calc(100% * ${selected}))` }"
        class="absolute h-10 w-24 bg-white rounded-lg shadow ease-out transition-transform transition-medium"
      />
      <ul class="relative">
        <li>
          <nuxt-link
            :aria-selected="selected === 0"
            tag="button"
            class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
            to="/"
          >
            <svg
              :class="selected === 0 ? 'text-green-400' : 'text-gray-500'"
              class="h-5 w-5 transition-all ease-out transition-medium"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
              />
            </svg>
            <span
              :class="selected === 0 ? 'text-green-600' : 'text-gray-700'"
              class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
            >
              Home
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :aria-selected="selected === 1"
            tag="button"
            class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
            to="rugs"
          >
            <svg
              :class="selected === 1 ? 'text-green-400' : 'text-gray-500'"
              class="h-5 w-5 transition-all ease-out transition-medium"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
              />
            </svg>
            <span
              :class="selected === 1 ? 'text-green-600' : 'text-gray-700'"
              class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
            >
              Rugs
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :aria-selected="selected === 2"
            tag="button"
            class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
            to="test2"
          >
            <svg
              :class="selected === 2 ? 'text-green-400' : 'text-gray-500'"
              class="h-5 w-5 transition-all ease-out transition-medium"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 11-2 0V8h-7a1 1 0 01-1-1z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.707 7.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0L9 12.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0L13 13.586l6.293-6.293a1 1 0 011.414 0z"
              />
            </svg>
            <span
              :class="selected === 2 ? 'text-green-600' : 'text-gray-700'"
              class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
            >
              Deals
            </span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- end wrapper -->
</template>

<style scoped>
ul li, ul li * {
  display: inline-block;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fastest {
  transition-duration: 75ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.transition-slow {
  transition-duration: 300ms;
}
.transition-slower {
  transition-duration: 500ms;
}
.transition-slowest {
  transition-duration: 700ms;
}

.transition-all {
  transition-property: all;
}
.transition-opacity {
  transition-property: opacity;
}
.transition-transform {
  transition-property: transform;
}

.focus-visible.focus-visible\:underline {
  text-decoration: underline;
}

</style>

<script>
// @click.native="select(0)" select(i) { this.selected = i }
export default {
  name: 'VerticalNav',
  computed: {
    selected () {
      const path = this.$route.path
      return path === '/' ? 0 : path === '/rugs' ? 1 : path === '/test2' ? 2 : undefined
    }
  }
}
</script>
