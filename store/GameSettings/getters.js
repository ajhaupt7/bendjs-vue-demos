export const cardsRemainingInDeck = (state) => {
  return Object.keys(state.cards).filter(id => state.addedCards.indexOf(id) === -1)
}

