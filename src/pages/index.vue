<template>
  <div class="bg-white">
    <AnimatedHero />
    <FeaturedSection />
    <BlankSection />
    <TestimonialSection class="w-screen" />
    <SubscribeEmail class="hidden lg:block" />
    <!-- <PricingSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import AnimatedHero from '~/components/AnimatedHero'
import FeaturedSection from '~/components/FeaturedSection'
import TestimonialSection from '~/components/TestimonialSection'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    AnimatedHero,
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
