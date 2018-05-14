<template>
  <div class="timer">
    <div :class="messageClasses" v-if="message">{{ message }}</div>
    <div>{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    time: Number,
    message: String,
    messageClasses: String
  }
}
</script>
