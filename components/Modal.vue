<template>
  <div class="modal">
  	<h2>Hello plz subscribe to newzletter.</h2>
		<slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  background-image: url('https://media.giphy.com/media/jkSvCVEXWlOla/giphy.gif');
  background-size: cover;
  background-repeat: no-repeat;
  color: black;
  padding: 20px;
  width: 80%;
  height: 500px;
  max-height: 80%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 4px;
  box-shadow: 2px 6px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  background: white;
  color: rgb(228, 15, 15);
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 6px 12px rgba(0,0,0,0.1);
  border: 2px solid rgba(black, 0.2);
}
</style>
