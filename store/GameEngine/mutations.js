export const setTimeRemaining = (state, time) => {
  state.timeRemaining = time
}

export const gameInProgress = (state, status) => {
  state.gameInProgress = status
}

export const addFiringGopher = (state, id) => {
  state.firingGophers = [...state.firingGophers, id]
}

export const removeFiringGopher = (state, id) => {
  state.firingGophers = state.firingGophers.filter(gopherId => gopherId !== id)
}

export const resetScore = (state) => {
  state.score = 0
}

export const setScore = (state, points) => {
  state.score = state.score + points
}

