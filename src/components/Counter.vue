<template>
  <div class="flex custom-number-input justify-start items-end flex-col h-full w-full mx-0">
    <div class="inline-flex flex-row shadow-md h-10 w-24 rounded relative">
      <button class="functionbtn bg-gray-200 transition-bg text-gray-700 hover:text-gray-700 hover:bg-gray-400 h-10 w-20 rounded-l cursor-pointer outline-none pb-2" @click="$emit('decrement'), changeVal(0)">
        <span class="m-auto text-2xl">−</span>
      </button>
      <input
        type="number"
        disabled
        class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold transition-colors text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-600  outline-none"
        name="custom-input-number"
        :value="val"
        @change="onChange()"
      >
      <button class="functionbtn bg-gray-200 transition-bg text-gray-700 hover:text-gray-700 hover:bg-gray-400 h-10 w-20 rounded-r cursor-pointer pb-2" @click="$emit('increment'), changeVal(1)">
        <span class="m-auto text-2xl">+</span>
      </button>
    </div>
  </div>
</template>

<style>
  .functionbtn:focus {
    outline: none;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    labelText: {
      type: String,
      default: 'Label Goes Here'
    },
    val: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', this.count)
    },
    changeVal (way) {
      if (way === 0 && this.count !== 1) {
        this.count -= 1
      }
      if (way === 1) {
        this.count += 1
      }
    }
  }
}
</script>
