<template>
  <div class="bg-white">
    <SplashHeader />
    <BlankSection />
    <FeaturedSection />
    <SubscribeEmail class="hidden lg:block" />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import SplashHeader from '~/components/SplashHeader'
import FeaturedSection from '~/components/FeaturedSection'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    SplashHeader,
    FeaturedSection,
    BlankSection,
    SubscribeEmail,
    RespFooter
  }
}
</script>

<style>
/* Style goes here */
</style>
