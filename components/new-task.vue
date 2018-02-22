<template>
  <div class="panel-block field has-addons">
    <p class="control has-icons-left">
      <input name="task" id="task" v-model="task" v-on:keyup.enter="submit" class="input" type="text" placeholder="New Task">
      <span class="icon is-small is-left">
        <i class="fas fa-file-alt"></i>
      </span>
    </p>
    <p class="control">
      <a v-on:click="submit()" class="button is-primary">Add</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    submit: function() {
      if (this.validateInput()) {
        this.$emit('submitted', this.task)
      } else {
      }
    },
    validateInput: function() {
      this.$store.commit('notification/clear')
      if (!this.task) {
        this.$store.commit('notification/show', {
          text: 'Task is required.',
          style: 'is-danger'
        })
      }
      if (!this.$store.state.notification.message) return true
      return false
    }
  }
}
</script>






