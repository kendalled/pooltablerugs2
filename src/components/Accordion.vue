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
      questions: [{ title: 'What sets your rugs apart?', answer: 'We work closely with interior designers and trusted manufacturers for our rugs. Our hand-picked selection guarantees you\'ll find something you love. From timeless classic styles to modern favorites, our indoor and outdoor rug selection has a design for your game room.' }, { title: 'When will I get my rug?', answer: 'Shipping takes up to two weeks from the time you order. Contact support for an estimate.' }, { title: 'Return Policy', answer: 'Not satisfied with your purchase? 14 days from receiving your rug you can submit a return form for a full refund. Shipping Included.' }]
    }
  }
}
</script>
