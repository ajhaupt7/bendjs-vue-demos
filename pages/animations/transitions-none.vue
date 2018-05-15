<template>
  <section class="page flex justify-center items-center">
    <button
      class="bg-teal-lighter rounded-sm py-4 px-8 shadow-md"
      @click="toggleShow"
    >
      <span>Click Me.</span>
    </button>
    <modal
      v-show="isShowing"
      class="modal"
      @close-click="toggleShow"
    >
      <input
        class="py-4 px-8 rounded-sm shadow-lg text-sm text-center w-full"
        v-model="inputText"
        placeholder="need credit card info here"
      />
    </modal>
  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  name: 'transitions-none',
  components: {
    Modal,
  },
  data() {
    return {
      isShowing: false,
      inputText: ''
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
.modal {
  background-image: url('https://media.giphy.com/media/jkSvCVEXWlOla/giphy.gif');
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  height: 500px;
  max-height: 80%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
