<template>
  <div class="bg-white">
    <SplashHeader />
    <BlankSection />
    <SubscribeEmail class="hidden lg:block" />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import SplashHeader from '~/components/SplashHeader'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    SplashHeader,
    BlankSection,
    SubscribeEmail,
    RespFooter
  }
}
</script>

<style>
/* Style goes here */
</style>
