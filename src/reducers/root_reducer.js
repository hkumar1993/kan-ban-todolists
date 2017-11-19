import { combineReducers } from 'redux'
import boardsReducer from './boards_reducer'
import cardsReducer from './cards_reducer'

export default combineReducers({
  boards: boardsReducer,
  cards: cardsReducer
});
