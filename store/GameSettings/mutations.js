export const updateGameLength = (state, event) => {
  state.gameLength = event.target.value
}

export const updateLevel = (state, event) => {
  state.updateLevel = event.target.value
}

export const toggleSettings = (state) => {
  state.showSettings = !state.showSettings
}
