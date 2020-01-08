<template>
  <div class="w-4/5 md:w-3/5 p-3 lg:p-8 mx-auto">
    <h3 class="mb-4 text-gray-100 hidden lg:block">
      Need Assistance? <a href="https://pooltablerugs.com" class="underline hover:no-underline">Contact support</a>.
    </h3>
    <AccordionElement
      v-for="(question, j) in questions"
      :key="j"
      :questionTitle="question.title"
      :answer="question.answer"
      :class="{ 'rounded-tr': j == 0 }"
      :qKey="j"
    />
  </div>
</template>

<script>
import AccordionElement from '~/components/AccordionElement'
export default {
  name: 'Accordion',
  components: {
    AccordionElement
  },
  data () {
    return {
      questions: [{ title: 'How do you get rugs?', answer: 'We get our rugs directly from interior designers and trusted manufacturers. Our hand-picked selection will ensure you\'ll find something.' }, { title: 'How long does shipping take?', answer: 'Up to two weeks from ordering. Contact support for more details.' }, { title: 'Return Policy', answer: 'You have 14 days from receiving your rug to submit a return, for a full refund. Shipping Included.' }]
    }
  }
}
</script>
