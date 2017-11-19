import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions'

const initialState = {
  // board data here
  1: {
    id: 1,
    name: 'Harsh',
    color: '#8e6e95'
  },
  2: {
    id: 2,
    name: 'Laune',
    color: '#39a59c'
  },
  3: {
    id: 3,
    name: 'Jesse',
    color: '#344759'
  },
  4: {
    id: 4,
    name: 'Taylor',
    color: '#e8741e'
  }
};

const boardsReducer = ( state = initialState, action ) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_BOARDS:
      action.boards.forEach(board => {
        newState[board.id] = board
      })
      return newState

    case RECEIVE_BOARD:
      newState = Object.assign({}, state, { [action.board.id]: action.board})
      return newState

    default:
      return state
  }
}

export default boardsReducer
