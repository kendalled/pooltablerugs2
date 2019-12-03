<template>
  <div>
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from '~/components/LoginCard'

export default {
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' }
      ]
    }
  },
  components: { LoginCard }
}
</script>

<style scoped>

</style>
