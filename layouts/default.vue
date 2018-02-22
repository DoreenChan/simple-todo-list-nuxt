<template>
  <div>
    <navbar></navbar>
    <notification />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Notification from '../components/notification'

export default {
  components: {
    Navbar,
    Notification
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
</style>