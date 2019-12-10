<template>
  <div class="bg-white">
    <Hero />
    <FeaturedSection />
    <BlankSection />
    <TestimonialSection />
    <SubscribeEmail class="hidden lg:block" />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import FeaturedSection from '~/components/FeaturedSection'
import TestimonialSection from '~/components/TestimonialSection'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    Hero,
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
