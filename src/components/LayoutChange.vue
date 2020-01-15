<template>
  <div id="thing" class="m-10">
    <h2>Simple Layout Change Prototype</h2>
    <button @click="changed = !changed" class="text-green-700 bg-green-300 px-2 py-1 rounded shadow mb-2 focus:outline-none transition-colors hover:text-white hover:bg-green-400">
      Change
    </button>
    <br>
    <div :class="{ active: changed }" width="447" height="442">
      <transition-group name="layout" tag="g">
        <div key="rect" class="flex w-auto h-auto bg-transparent items-end ">
          <img
            id="rect"
            ref="rect"
            key="rect"
            :src="require('~/static/roomrug.jpg')"
            class="items rect w-1/5 h-auto"
          >
          <button class="items btn mt-20 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-12 rounded">
            Buy Now
          </button>
        </div>

        <p id="text" key="text" class="items text font-bold">
          Agora - AGR1304
        </p>
        <!-- <circle
          id="profile"
          key="circ"
          class="items circ"
          cx="382"
          cy="203"
          r="65"
        />
        <g id="text" key="text" class="items text">
          <rect x="56" y="225" width="226" height="16" />
          <rect x="56" y="252" width="226" height="16" />
          <rect x="56" y="280" width="226" height="16" />
        </g>
        <rect
          id="footer"
          key="footer"
          class="items footer"
          y="423"
          width="155"
          height="19"
          rx="9.5"
          ry="9.5"
        /> -->
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutChange',
  data () {
    return {
      changed: false
    }
  }
}
</script>

<style scoped>
body {
  background: #1D3557;
  color: white;
}

.items {
  transition: all 0.4s ease;
}
#rect {
  -webkit-transform-origin: top left;
  transform-origin: top left;
}

#text {
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}

svg {
  fill: #A8DADC;
}

.active {
  fill: #E63946;
}
.active div .rect {
  -webkit-transform: translate3d(500px, 100px, 0) scale(1.2);
          transform: translate3d(500px, 100px, 0) scale(1.2);
}
.active div .btn {
  -webkit-transform: translate3d(1000px, 90px, 0) scale(1.2);
          transform: translate3d(1000px, 90px, 0) scale(1.2);
}
.active .text {
  -webkit-transform: scale(1.8) translate3d(690px, -180px, 0);
          transform: scale(1.8) translate3d(690px, -180px, 0);
}
.active .footer {
  -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
}
</style>
