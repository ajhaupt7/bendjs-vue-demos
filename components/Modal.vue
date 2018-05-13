<template>
  <div class="p-8 flex flex-col justify-between items-center rounded shadow-md">
    <a class="close text-red cursor-pointer shadow-md" @click="handleCloseClick">
      <x-icon></x-icon>
    </a>
  	<h2>Hello plz subscribe to newzletter.</h2>
		<slot></slot>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'modal',
  components: {
    XIcon
  },
  methods: {
    handleCloseClick() {
      this.$emit('close-click')
    }
  }
}
</script>


<style lang="scss" scoped>
.close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(black, 0.2);
}
</style>
