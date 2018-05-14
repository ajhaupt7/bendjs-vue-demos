import * as actions from './actions'
import * as mutations from './mutations'
import { levels } from '~/constants'

const state = {
  score: null,
  timeRemaining: null,
  gameInProgress: false,
  firingGophers: []
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
