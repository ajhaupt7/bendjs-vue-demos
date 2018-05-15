<template>
  <div :class="$style.component">
    <h3 v-text="title" />

    <img :src="image" />
  </div>
</template>

<script>


  export default {
    data() {
      return {
        title: '🎉🎉 You\'re all done! 🎉🎉',
        image: 'https://media.giphy.com/media/LZElUsjl1Bu6c/giphy.gif',
      };
    },
  }
</script>

<style lang="scss" module>
  .component {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    h3 {
      min-width: 100%;
      margin: 20px 0;
    }
  }
</style>
