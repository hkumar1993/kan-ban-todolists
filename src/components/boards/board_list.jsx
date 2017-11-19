import React, { Component } from 'react'
import BoardListItem from './board_list_item'
import './styles/Boards.css'

class BoardList extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      boards: props.boards,
      cards: props.cards
    }
  }

  render(){
    const boards = this.state.boards
    const cards = this.state.cards
    return(
      <div>
        <ul className="board-list">
          { boards.map(board => (<BoardListItem
            key={board.id}
            board={board}
            cards={cards[board.id]}
            receiveCard={this.props.receiveCard}
            />))}

        </ul>
      </div>
    )
  }
}

export default BoardList
