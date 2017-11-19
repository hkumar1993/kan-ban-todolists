import { RECEIVE_CARDS, RECEIVE_BOARD_CARDS, RECEIVE_CARD } from '../actions/card_actions'

const initialState = {
  1: {
    1: {
      boardId: 1,
      id: 1,
      title: "Harsh's first card",
    },
    2: {
      boardId: 1,
      id: 2,
      title: "Harsh's second card",
    },
  },
  2: {
    1: {
      boardId: 2,
      id: 1,
      title: "Laune's first card",
    },
    2: {
      boardId: 2,
      id: 2,
      title: "Laune's second card",
    },
  },
  3: {
    1: {
      boardId: 3,
      id: 1,
      title: "Jesse's first card",
    },
    2: {
      boardId: 3,
      id: 2,
      title: "Jesse's second card",
    },
  },
  4: {
    1: {
      boardId: 4,
      id: 1,
      title: "Taylor's first card",
    },
    2: {
      boardId: 4,
      id: 2,
      title: "Taylor's second card",
    },
  },
}

const cardsReducer = ( state = initialState, action ) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_CARD:
      const currentCard = action.card
      newState = Object.assign({},
        state,
        { [currentCard.boardId]: Object.assign(
          {},
          state[currentCard.boardId],
          { [currentCard.id]: currentCard })
        })
      return newState

    default:
      return state;
  }
}

export default cardsReducer
