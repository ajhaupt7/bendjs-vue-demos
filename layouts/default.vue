<template>
  <div>
    <nuxt-link
      v-if="$route.name !== 'index'"
      class="absolute pin-t pin-l p-4 text-xs flex items-center"
      to="/"
    >
      <arrow-left-circle-icon></arrow-left-circle-icon>
      <span class="ml-2">Back</span>
    </nuxt-link>
    <nuxt/>
  </div>
</template>

<script>
import { ArrowLeftCircleIcon } from 'vue-feather-icons'
export default {
  name: 'layout-default',
  components: {
    ArrowLeftCircleIcon
  }
}
</script>

