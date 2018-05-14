<template>
  <div v-if="this.score || this.score === 0" class="scoreboard">
    <div :class="messageClasses" v-if="message">{{ message }}</div>
    <div>{{ score }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'scoreboard',
  props: {
    message: String,
    messageClasses: String
  },
  computed: {
    ...mapState('GameEngine', [
      'score'
    ])
  }
}
</script>
