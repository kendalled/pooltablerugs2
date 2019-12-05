<template>
  <div class="bg-white">
    <SplashHeader />
    <BlankSection />
    <FeaturedSection />
    <TestimonialSection />
    <SubscribeEmail class="hidden lg:block" />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import SplashHeader from '~/components/SplashHeader'
import FeaturedSection from '~/components/FeaturedSection'
import TestimonialSection from '~/components/TestimonialSection'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    SplashHeader,
    FeaturedSection,
    TestimonialSection,
    BlankSection,
    SubscribeEmail,
    RespFooter
  }
}
</script>

<style>
/* Style goes here */
</style>
