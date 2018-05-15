export const startGame = ({ state, commit, getters, rootState }) => {
  const { gameLength } = rootState.GameSettings
  commit('resetScore')
  commit('setTimeRemaining', gameLength)
  commit('gameInProgress', true)
}

export const endGame = ({ state, commit, getters, rootState }) => {
  commit('gameInProgress', false)
}

export const countdown = ({ state, commit }) => {
  if (!state.gameInProgress) return
  const timeRemaining = state.timeRemaining - 1
  commit('setTimeRemaining', timeRemaining > 0 ? timeRemaining : 0)
}

