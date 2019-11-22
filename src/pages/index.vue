<template>
  <div class="bg-white">
    <SplashHeader />
    <BlankSection />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import SplashHeader from '~/components/SplashHeader'
import BlankSection from '~/components/BlankSection'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    SplashHeader,
    BlankSection,
    RespFooter
  }
}
</script>

<style>
/* Style goes here */
</style>
