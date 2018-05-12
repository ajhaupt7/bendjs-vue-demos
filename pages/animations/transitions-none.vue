<template>
  <section class="page">
    <button class="bg-teal-lighter rounded-sm py-4 px-8 shadow-md" @click="toggleShow">
      <span v-if="!isShowing">Click Me.</span>
    </button>
    <modal v-show="isShowing" class="modal">
        <a class="close" @click="toggleShow">
          <x-icon></x-icon>
        </a>
    </modal>
  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'no-transitions',
  components: {
    Modal,
    XIcon
  },
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
}
</script>

<style>

</style>
