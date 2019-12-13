<template>
  <div>
    <ImageGroup />
    <Accordion />
    <ModalWrapper />
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup'
import Accordion from '~/components/Accordion'
import ModalWrapper from '~/components/ModalWrapper'
export default {
  head () {
    return {
      link: [
        { rel: 'preconnect', href: 'https://firebasestorage.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700'
        }
      ]
    }
  },
  components: {
    ImageGroup,
    Accordion,
    ModalWrapper
  }
}
</script>
