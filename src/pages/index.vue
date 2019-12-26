<template>
  <div class="bg-white">
    <AnimatedHero />
    <FeaturedSection />
    <BlankSection />
    <TestimonialSection class="hidden md:block" />
    <SubscribeEmail class="hidden md:block" />
    <FaqSection />
    <RespFooter />
  </div>
</template>

<script>
import AnimatedHero from '~/components/AnimatedHero'
import FeaturedSection from '~/components/FeaturedSection'
import TestimonialSection from '~/components/TestimonialSection'
import BlankSection from '~/components/BlankSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import FaqSection from '~/components/FaqSection'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    AnimatedHero,
    FeaturedSection,
    TestimonialSection,
    BlankSection,
    SubscribeEmail,
    FaqSection,
    RespFooter
  }
}
</script>
