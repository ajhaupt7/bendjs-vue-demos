<template>
  <section class="page flex justify-center items-center">
    <button class="bg-teal-lighter rounded-sm py-4 px-8 shadow-md" @click="toggleShow">
      <span v-if="!isShowing">Click Me.</span>
    </button>
    <transition name="modal">
      <modal v-show="isShowing" class="modal">
        <a class="close" @click="toggleShow">
          <x-icon></x-icon>
        </a>
      </modal>
    </transition>
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
.modal-enter-active,
.modal-leave-active {
  transition: all 650ms ease-in-out;
  opacity: 1;
  transform: translate3d(-50%, -50%, 0);
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -150%, 0);
}
</style>
