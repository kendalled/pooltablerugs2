<template>
  <section @click="opened = !opened" :class="{'rounded-br' : qKey == 2 }" class="shadow bg-white">
    <article :class="qKey == 2 ? 'border-b-0' : 'border-b'">
      <div :class="{'border-blue-600' : opened}" class="border-l-4 border-gray-500 transition-border">
        <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
          <span :class="{'text-gray-800': opened}" class="text-gray-700 text-lg lg:text-xl tracking-tight">{{ questionTitle }}</span>
          <div :class="{'border-blue-600' : opened}" class="rounded-full border-2 border-gray-400 w-7 h-7 flex items-center justify-center hover:border-blue-600 transition-border">
            <!-- icon by feathericons.com -->
            <svg
              :class="{'unopened': !opened}"
              aria-label="Opens FAQ Dropdown"
              class="transition-transform"
              fill="none"
              height="24"
              stroke="#606F7B"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewbox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </header>
        <div v-if="opened">
          <div class="pl-8 pr-8 pb-5 text-gray-700">
            <ul class="pl-4">
              <li class="pb-2">
                {{ answer }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    'questionTitle': {
      type: String,
      default: 'Sample Question Title'
    },
    'answer': {
      type: String,
      default: 'Sample question answer goes here.'
    },
    'qKey': {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style scoped>
.unopened {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
</style>
