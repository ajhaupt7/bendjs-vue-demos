<template>
  <div class="hole relative z-40">
    <transition
      name="gopher"
      :css="false"
      @enter="enter"
      @leave="leave"
    >
      <img
        v-show="isFiring"
        class="gopher z-50 w-full relative p-2"
        src="/gopher.svg"
        @click.stop="hammerThatGopher($event)"
      />
    </transition>
  </div>
</template>

<script>
import { GOPHER_AIR_TIME } from '~/constants'
import { mapState, mapMutations } from 'vuex'
import random from 'lodash/random'

export default {
  name: 'gopher-hole',
  props: {
    id: Number
  },
  computed: {
    ...mapState('GameEngine', [
      'firingGophers'
    ]),
    isFiring() {
      return this.firingGophers.indexOf(this.id) !== -1
    }
  },
  methods: {
    ...mapMutations('GameEngine', [
      'setScore'
    ]),
    hammerThatGopher(event) {
      this.setScore(10)
      TweenLite.to(event.target, 0.15, {
        opacity: 0,
        transform: 'scale(4)',
        ease: Power1.easeInOut
      });
    },
    handleCompleteAnimation(done) {
      this.firing = false
      done();
    },
    enter(el, done) {
      TweenLite.to(el, GOPHER_AIR_TIME, {
        top: random(-1100, -2000),
        ease: Power1.easeInOut,
        onComplete: () => this.handleCompleteAnimation(done)
      });
    },
    leave(el, done) {
      TweenLite.to(el, GOPHER_AIR_TIME, {
        top: 1000,
        opacity: 1,
        transform: 'scale(1)',
        ease: Power1.easeInOut,
        onComplete: done
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.hole {
  width: 100px;
  top: 1000px;
}
.gopher {
  top: 0;
  transform: scale(1);
  opacity: 1;
}
</style>

