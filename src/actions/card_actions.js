export const RECEIVE_BOARD_CARDS = 'RECEIVE_BOARD_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const RECEIVE_CARD = 'RECEIVE_CARD'

export const receiveBoardCards = ( cards ) => {
  type: RECEIVE_BOARD_CARDS,
  cards
}

export const receiveCards = ( cards ) => {
  type: RECEIVE_CARDS,
  cards
}

export const receiveCard = ( card ) => ({
  type: RECEIVE_CARD,
  card
})
