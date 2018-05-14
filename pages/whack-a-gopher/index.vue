<template>
  <div class="page leading-loose bg-grey-lighter">
    <game v-if="gameInProgress" />
    <div v-else class="min-w-screen min-h-screen flex flex-col justify-center items-center">
      <h1>Whack a Golang Gopher</h1>
      <div>
        <img class="gopher-logo mt-4" src="gopher-side.svg" />
      </div>
      <scoreboard
        class="mt-4 font-bold text-lg text-center"
        message="Your Last Score"
        messageClasses="mr-4 font-thin text-sm"
      />
      <transition name="controls" mode="out-in">
        <settings v-if="showSettings" />
        <buttons v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import Scoreboard from '~/components/WhackAGopher/Scoreboard.vue'
import Game from '~/components/WhackAGopher/Game.vue'
import Settings from '~/components/WhackAGopher/Settings.vue'
import Buttons from '~/components/WhackAGopher/Buttons.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Scoreboard,
    Settings,
    Buttons,
    Game
  },
  computed: {
    ...mapState('GameSettings', [
      'showSettings',
    ]),
    ...mapState('GameEngine', [
      'gameInProgress'
    ])
  },
  methods: {
    ...mapMutations('GameSettings', [
      'toggleSettings'
    ])
  }
}
</script>

<style lang="scss" scoped>
.gopher-logo {
  width: 200px;
}

.controls-enter-active,
.controls-leave-active {
  transition: all 450ms ease-in-out;
  opacity: 1;
}

.controls-enter,
.controls-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>

