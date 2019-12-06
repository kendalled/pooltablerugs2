<template>
  <div>
    <ImageGroup />
    <Accordion />
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup'
import Accordion from '~/components/Accordion'
export default {
  components: {
    ImageGroup,
    Accordion
  },
  layout: 'checkout'
}
</script>
