<template>
  <div>
    <SplashHeader />
    <FaqSection />
    <CartWidget ref="cart" />
    <AddToCartButton @click="$refs.cart.add()" />
    <PanContainer />
    <ImageGroup />
    <HeroTest />
    <ProductModal />
    <p class="text-sm text-black my-10">
      {{ computedGetter }}
    </p>
    <p class="text-sm text-red-800 my-10">
      {{ userAccount }} {{ testVuex }}
    </p>
  </div>
</template>

<script>
import ProductModal from '~/components/ProductModal'
import SplashHeader from '~/components/SplashHeader'
import ImageGroup from '~/components/ImageGroup'
import AddToCartButton from '~/components/AddToCartButton'
import CartWidget from '~/components/CartWidget'
import HeroTest from '~/components/HeroTest'
import PanContainer from '~/components/PanContainer'
import FaqSection from '~/components/FaqSection'
export default {
  components: {
    SplashHeader,
    ImageGroup,
    HeroTest,
    PanContainer,
    FaqSection,
    CartWidget,
    AddToCartButton,
    ProductModal
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
