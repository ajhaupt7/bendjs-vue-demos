<template>
  <div class="page flex justify-center items-center bg-grey-lighter">
    <div class="absolute m-8 pin-b pin-r flex">
      <button
        class="bg-teal-lighter shadow mr-2 rounded-full flex justify-center items-center"
        @click="addCard"
      >
        <plus-icon></plus-icon>
      </button>
      <button
        v-if="addedCards.length > 4"
        class="bg-pink shadow mr-2 rounded-full text-white flex justify-center items-center"
        @click="shuffleCards"
      >
        <zap-icon></zap-icon>
      </button>
      <button
        class="bg-red shadow rounded-full text-white flex justify-center items-center"
        @click="resetCards"
      >
        <x-icon></x-icon>
      </button>
    </div>
    <transition name="card" mode="out-in" appear>
      <div v-if="!addedCards.length" key="noCard">Click the teal button in the bottom right to start.</div>
      <div v-else class="w-full px-4">
        <transition-group name="card" tag="div" class="deck justify-center flex flex-wrap">
          <card v-for="cardId in addedCards" :key="cardId" v-bind="cards[cardId]" class="m-2" />
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import shuffle from 'lodash/shuffle'
import { PlusIcon, XIcon, ZapIcon } from 'vue-feather-icons'

export default {
  name: 'transitions-mode',
  components: {
    Card,
    PlusIcon,
    XIcon,
    ZapIcon
  },
  data() {
    return {
      names: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      addedCards: [],
    }
  },
  computed: {
    selectableCards() {
      return Object.keys(this.cards).filter(id => this.addedCards.indexOf(id) === -1)
    },
  },
  methods: {
    randomCard() {
      return this.selectableCards[Math.floor(Math.random() * this.selectableCards.length)]
    },
    addCard() {
      this.addedCards = [...this.addedCards, this.randomCard()]
    },
    resetCards(){
      this.addedCards = []
    },
    shuffleCards() {
      this.addedCards = shuffle(this.addedCards)
    }
  },
  mounted() {
    this.cards = this.suits.reduce((cards, suit) => {
      this.names.map(name => cards[`${name}${suit}`] = { name, suit })
      return cards
    }, {})
  }
}
</script>


<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
}

.card-enter-active,
.card-leave-active,
.card-move {
  transition: all 650ms ease-in-out;
  opacity: 1;
}

.card-enter,
.card-leave-to {
  opacity: 0;
  transform: translateY(-500%);
}


</style>
