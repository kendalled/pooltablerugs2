<template>
  <div id="thing" class="m-10">
    <h2>Simple Layout Change Prototype</h2>
    <button @click="changed = !changed" class="text-green-700 bg-green-300 px-2 py-1 rounded shadow mb-2 focus:outline-none transition-colors hover:text-white hover:bg-green-400">
      Change
    </button>
    <br>
    <svg :class="{ active: changed }" xmlns="http://www.w3.org/2000/svg" width="447" height="442" viewBox="0 0 447 442">
      <transition-group name="layout" tag="g">
        <rect ref="rect" key="rect" class="items rect" width="171" height="171" />
        <circle
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
        />
      </transition-group>
    </svg>
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
.active .rect {
  -webkit-transform: translate3d(0, 30px, 0);
          transform: translate3d(0, 30px, 0);
}
.active .circ {
  -webkit-transform: translate3d(30px, 0, 0) scale(0.5);
          transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  -webkit-transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
          transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
}
.active .footer {
  -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
}
</style>
