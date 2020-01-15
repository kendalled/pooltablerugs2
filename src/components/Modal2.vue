<template>
  <div v-show="showModal" class="fixed inset-0 flex items-center justify-center">
    <transition
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
      enter-active-class="transition-all transition-fast ease-out-quad"
      leave-active-class="transition-all transition-medium ease-in-quad"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      appear
    >
      <div v-if="showBackdrop">
        <div @click="close" class="absolute inset-0 bg-black opacity-25" />
      </div>
    </transition>

    <transition
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
      enter-active-class="transition-all transition-fast ease-out-quad"
      leave-active-class="transition-all transition-medium ease-in-quad"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
      appear
    >
      <div v-show="showContent" class="relative">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.transition-fastest {
  transition-duration: 50ms;
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
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
.scale-70 {
  transform: scale(.7);
}
.scale-100 {
  transform: scale(1);
}
</style>

<script>
export default {
  props: {
    'open': {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    }
  },
  computed: {
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  // created () {
  //   const onEscape = (e) => {
  //     if (this.open && e.keyCode === 27) {
  //       this.close()
  //     }
  //   }

  //   document.addEventListener('keydown', onEscape)

  //   this.$once('hook:destroyed', () => {
  //     document.removeEventListener('keydown', onEscape)
  //   })
  // },
  methods: {
    show () {
      this.showModal = true
      this.showBackdrop = false
      this.showContent = true
    },
    close () {
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
