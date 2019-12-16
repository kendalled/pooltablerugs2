<template>
  <div>
    <AnimatedHero />
    <PanContainer />
    <ImageGroup />
    <Accordion />
    <HeroTest />
    <p class="text-sm text-black my-10">
      {{ computedGetter }}
    </p>
    <p class="text-sm text-red-800 my-10">
      {{ userAccount }}
    </p>
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup'
import Accordion from '~/components/Accordion'
import HeroTest from '~/components/HeroTest'
import AnimatedHero from '~/components/AnimatedHero'
import PanContainer from '~/components/PanContainer'
export default {
  components: {
    ImageGroup,
    Accordion,
    HeroTest,
    AnimatedHero,
    PanContainer
  },
  computed: {
    computedGetter () {
      return this.$store.getters['user/getUser']
    },
    userAccount () {
      return this.$store.state.user
    }
  }
}
</script>
