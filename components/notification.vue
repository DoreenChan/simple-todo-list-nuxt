<template>
  <div v-if="message.length" :class="style">
    <button class="delete" @click="clear"></button>
    {{message}}
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return this.$store.state.notification.style
    },
    message() {
      return this.$store.state.notification.message
    }
  },
  methods: {
    clear() {
      this.$store.commit('notification/clear')
    }
  }
}
</script>

