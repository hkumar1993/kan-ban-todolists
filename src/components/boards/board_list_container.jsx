import { connect } from 'react-redux'
import BoardList from './board_list'
import { receiveBoard } from '../../actions/board_actions'
import { receiveCard } from '../../actions/card_actions'

const mapStateToProps = state => {
  return {
    boards: Object.values(state.boards),
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveCard: card => dispatch(receiveCard(card))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(BoardList)
