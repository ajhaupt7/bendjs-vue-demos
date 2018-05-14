<template>
  <div class="absolute pin-b pin-r p-6 flex items-center">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      :class="[...buttonClasses, `bg-${button.color}`]"
      @click="button.clickHandler"
    >
      <icon :is="button.icon"></icon>
    </button>
  </div>
</template>

<script>
import { PlayIcon, SettingsIcon } from 'vue-feather-icons'
import { mapState, mapMutations, mapActions } from 'vuex'
import { TweenLite } from "gsap";

export default {
  name: 'settings',
  components: {
    PlayIcon,
    SettingsIcon
  },
  data() {
    return {
      buttons: [
        {
          color: 'blue',
          icon: SettingsIcon,
          clickHandler: this.toggleSettings
        },
        {
          color: 'green',
          icon: PlayIcon,
          clickHandler: this.startGame
        }
      ]
    }
  },
  computed: {
    ...mapState('GameSettings',[
      'showSettings'
    ]),
    ...mapState('GameEngine', [
      'gameInProgress'
    ]),
    buttonClasses() {
      return [
        'rounded-full',
        'shadow-lg',
        'flex',
        'justify-center',
        'items-center',
        'text-white',
        'mr-2',
        'relative'
      ]
    }
  },
  methods: {
    ...mapMutations('GameSettings', [
      'toggleSettings'
    ]),
    ...mapActions('GameEngine', [
      'startGame'
    ])
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
}

.button-enter-active,
.button-leave-active,
.button-move {
  transition: all 650ms ease-in-out;
  opacity: 1;
}

.button-enter,
.button-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
