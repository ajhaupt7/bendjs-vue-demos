import * as actions from './actions'
import * as mutations from './mutations'
import { levels } from '~/constants'

const state = {
  gameLength: 60,
  level: levels.EASY,
  showSettings: false
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
