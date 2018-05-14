<template>
  <section class="page flex justify-center items-center bg-grey-lighter">
    <div>
      <button class="bg-teal-lighter rounded-sm py-4 px-8 shadow-md" @click="toggleShow">
        <span>Click Me.</span>
      </button>
    </div>
    <transition name="modal">
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
    </transition>
  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  name: 'transitions-animations',
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

<style lang="scss">
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

@keyframes spin {
  0% { transform: translate3d(-50%, -250%, 0) rotate(0); }
  20% { transform: translate3d(-50%, -50%, 0) rotate(0); }
  100% { transform: translate3d(-50%, -50%, 0) rotate(1800deg); }
}

.modal-enter-active {
  animation: spin 2s ease-in-out forwards;
}

.modal-leave-active {
  animation: spin 2s ease-in-out reverse;
}
</style>
