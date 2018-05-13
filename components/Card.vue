<template>
  <div :class="cardClass">
    <span class="absolute pin-l pin-t p-4">{{ suit }}</span>
    <span class="text-lg">{{ name }}</span>
    <span class="absolute pin-r pin-b p-4 text-right">{{ suit }}</span>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    suit: String,
    name: String,
    id: Number,
    value: Number
  },
  computed: {
    cardClass() {
      return [
        'card',
        'flex',
        'justify-center',
        'items-center',
        'shadow-md',
        'rounded',
        'bg-white',
        'p-2',
        { 'text-black': this.suit === '♠' || this.suit ===  '♣' },
        { 'text-red': this.suit === '♥' || this.suit ===  '♦' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 150px;
  height: 200px;
  position: relative;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--bottom {
  transform: rotate(180deg);
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
}

</style>

