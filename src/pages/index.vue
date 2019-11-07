<template>
  <div class="bg-white">
    <SplashHeader />
    <PricingSection />
    <ProductCards />
    <BlankSection />
    <RespFooter />
  </div>
</template>

<script>
import ProductCards from '../components/ProductCards'
import SplashHeader from '~/components/SplashHeader'
import BlankSection from '~/components/BlankSection'
import RespFooter from '~/components/RespFooter'
import PricingSection from '~/components/PricingSection'

export default {
  components: {
    SplashHeader,
    PricingSection,
    BlankSection,
    ProductCards,
    RespFooter
  }
}
</script>

<style>
/* Style goes here */
</style>
