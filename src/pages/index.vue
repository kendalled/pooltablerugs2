<template>
  <div class="bg-white">
    <AnimatedHero />
    <SplashHeader class="md:hidden" />
    <FeaturedSection />
    <BlankSection />
    <ContentSection />
    <TestimonialSection class="hidden md:block" />
    <FaqSection />
    <SubscribeEmail class="hidden md:block" />
    <RespFooter />
  </div>
</template>

<script>
import AnimatedHero from '~/components/AnimatedHero'
import SplashHeader from '~/components/SplashHeader'
import FeaturedSection from '~/components/FeaturedSection'
import TestimonialSection from '~/components/TestimonialSection'
import BlankSection from '~/components/BlankSection'
import ContentSection from '~/components/ContentSection'
import SubscribeEmail from '~/components/SubscribeEmail'
import FaqSection from '~/components/FaqSection'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    AnimatedHero,
    SplashHeader,
    FeaturedSection,
    TestimonialSection,
    BlankSection,
    ContentSection,
    SubscribeEmail,
    FaqSection,
    RespFooter
  }
}
</script>
