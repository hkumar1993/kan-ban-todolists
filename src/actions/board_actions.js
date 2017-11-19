export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
})

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
})
