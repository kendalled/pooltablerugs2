<template>
  <div class="w-full bg-green-600 h-screen">
    <Modal />
  </div>
</template>

<script>
import Modal from '~/components/Modal'
export default {
  name: 'ProductModal',
  components: {
    Modal
  }
}
</script>

<style scoped>
.root {
  display: none;
}
</style>

<!-- TODO: make functional -->
