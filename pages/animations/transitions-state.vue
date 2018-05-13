<template>
  <div class="page flex justify-center items-center bg-grey-lighter">
    <div class="absolute m-8 pin-b pin-r flex">
      <button
        class="bg-teal-lighter shadow mr-2 rounded-full flex justify-center items-center"
        @click="changeCard"
      >
        <repeat-icon></repeat-icon>
      </button>
      <button
        class="bg-red shadow rounded-full text-white flex justify-center items-center"
        @click="resetCards"
      >
        <x-icon></x-icon>
      </button>
    </div>
    <transition name="card" mode="out-in" appear>
      <div v-if="!selectedCard" key="noCard">Click the teal button in the bottom right to start.</div>
      <card v-else :key="selectedCard.id" v-bind="selectedCard" />
    </transition>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import random from 'lodash/random'
import { RepeatIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'transitions-state',
  components: {
    Card,
    RepeatIcon,
    XIcon
  },
  data() {
    return {
      names: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      selectedCard: null,
    }
  },
  methods: {
    randomCard() {
      return this.cards[random(this.cards.length - 1)]
    },
    changeCard() {
      this.selectedCard = this.randomCard()
    },
    resetCards() {
      this.selectedCard = null;
    }
  },
  mounted() {
    this.cards = this.suits.reduce((cards, suit, suitIndex) => {
      return [...cards,  ...this.names.map((name, nameIndex) => {
        return  {
          id: nameIndex + cards.length,
          value: nameIndex + 1,
          name,
          suit
        }
      })]
    }, [])
  }
}
</script>


<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
}

.card-enter-active,
.card-leave-active {
  transition: all 650ms ease-in-out;
  opacity: 1;
}

.card-enter,
.card-leave-to {
  opacity: 0;
  transform: translateY(-500%);
}


</style>
