<template>
  <section @click.stop="missedThatGopher" class="game relative z-0 min-w-screen min-h-screen">
    <div class="fixed pin-r pint-t p-6">
      <scoreboard class="flex items-center" message="Score" messageClasses="text-xs mr-3" />
      <timer class="flex items-center" message="Time" messageClasses="text-xs mr-3" :time="timeRemaining" />
    </div>
    <button
      class="absolute z-50 flex items-center justify-center pin-r pin-b m-4 bg-red text-white shadow-lg rounded-full"
      @click.stop="endGame"
    >
      <x-icon></x-icon>
    </button>
    <div class="gopher-holes flex justify-between z-40 px-8 absolute pin-b w-full">
      <gopher-hole
        v-for="n in gopherHoleCount"
        :key="n"
        :id="n"
      />
    </div>
  </section>
</template>

<script>
import Timer from './Timer'
import Scoreboard from './Scoreboard'
import GopherHole from './GopherHole'
import { BASE_GOPHER_HOLE_COUNT, GOPHER_AIR_TIME } from '~/constants'
import { mapActions, mapState, mapMutations } from 'vuex'
import { XIcon } from 'vue-feather-icons'
import random from 'lodash/random'

export default {
  name: 'game',
  components: {
    Scoreboard,
    Timer,
    GopherHole,
    XIcon
  },
  data() {
    return {
      countdownInterval: null,
      eventInterval: null,
    }
  },
  computed: {
    ...mapState('GameSettings', [
      'level'
    ]),
    ...mapState('GameEngine', [
      'gameInProgress',
      'timeRemaining',
      'firingGophers'
    ]),
    gopherHoleCount() {
      return BASE_GOPHER_HOLE_COUNT * this.level
    },
  },
  methods: {
    fireAGopher() {
      const randomInt = random(1, (this.gopherHoleCount * 10))
      if (randomInt < this.gopherHoleCount && this.firingGophers.indexOf(randomInt) === -1) {
        this.addFiringGopher(randomInt);
        setTimeout(() => {
          this.removeFiringGopher(randomInt);
        }, GOPHER_AIR_TIME * 1000)
      }
    },
    handleGameEnd() {
      clearInterval(this.TIMER)
      this.endGame()
    },
    handleCountdown() {
      this.timeRemaining >= 1 ? this.countdown() : this.handleGameEnd()
    },
    missedThatGopher() {
      this.setScore(-5)
    },
    ...mapMutations('GameEngine', [
      'setScore',
    ]),
    ...mapMutations('GameEngine', [
      'addFiringGopher',
      'removeFiringGopher'
    ]),
    ...mapActions('GameEngine', [
      'countdown',
      'endGame',
      'hammerThatGopher'
    ]),
  },
  mounted() {
    this.countdownInterval = setInterval(() => {
      this.handleCountdown()
    }, 1000)
    this.eventInterval = setInterval(() => {
      this.fireAGopher()
    }, 100)
  },
  destroyed() {
    clearInterval(this.countdownInterval)
    clearInterval(this.eventInterval)
  }
}
</script>

<style lang="scss" scoped>
.game {
  cursor: url('/hammer.png'), default;
}
button {
  width: 50px;
  height: 50px;
}
</style>



