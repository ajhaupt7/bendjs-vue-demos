<template>
  <div class="p-8 text-center absolute pin-b w-full bg-grey shadow flex justify-around items-center">
    <div>
      <label class="block font-bold" for="gameLength">Game Length (s)</label>
      <input
        class="text-sm py-2 px-8 rounded-sm shadow text-center"
        name="gameLength"
        type="number"
        min="30"
        max="240"
        :value="gameLength"
        @input="updateGameLength($event)"
      />
    </div>
    <div>
      <div class="font-bold">Difficulty</div>
      <div class="flex">
        <div class="mr-4" v-for="(val, key) in levels" :key="key">
          <input
            name="level"
            type="radio"
            :id="key"
            :value="val"
            :checked="level === val"
            @input="updateLevel($event)"
          />
          <label class="text-sm ml-2" :for="key">{{ key.toLowerCase() | capitalize }}</label>
        </div>
      </div>
    </div>
    <div @click="toggleSettings" class="absolute cursor-pointer pin-t pin-r text-red p-4">
      <x-icon></x-icon>
    </div>
  </div>
</template>

<script>
import { levels } from '~/constants'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('GameSettings')
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'settings',
  components: {
    XIcon
  },
  data() {
    return {
      levels
    }
  },
  computed: {
    ...mapState([
      'gameLength',
      'level'
    ])
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    ...mapMutations([
      'updateGameLength',
      'updateLevel',
      'toggleSettings'
    ])
  }
}
</script>
