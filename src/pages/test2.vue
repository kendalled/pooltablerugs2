<template>
  <div>
    <ImageGroup />
    <LoginForm />
    <NewSearch />
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup'
import LoginForm from '~/components/LoginForm'
import NewSearch from '~/components/NewSearch'
export default {
  components: {
    ImageGroup,
    LoginForm,
    NewSearch
  }
}
</script>
