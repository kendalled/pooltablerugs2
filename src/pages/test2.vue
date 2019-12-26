<template>
  <div>
    <FaqSection />
    <CartWidget ref="cart" />
    <AddToCartButton @click="$refs.cart.add()" />
    <PanContainer />
    <ImageGroup />
    <Accordion />
    <HeroTest />
    <p class="text-sm text-black my-10">
      {{ computedGetter }}
    </p>
    <p class="text-sm text-red-800 my-10">
      {{ userAccount }} {{ testVuex }}
    </p>
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup'
import AddToCartButton from '~/components/AddToCartButton'
import CartWidget from '~/components/CartWidget'
import Accordion from '~/components/Accordion'
import HeroTest from '~/components/HeroTest'
import PanContainer from '~/components/PanContainer'
import FaqSection from '~/components/FaqSection'
export default {
  components: {
    ImageGroup,
    Accordion,
    HeroTest,
    PanContainer,
    FaqSection,
    CartWidget,
    AddToCartButton
  },
  computed: {
    computedGetter () {
      return this.$store.getters.getUser
    },
    userAccount () {
      return this.$store.state.user
    },
    testVuex () {
      return this.$store.state.user !== null
    }
  }
}
</script>
