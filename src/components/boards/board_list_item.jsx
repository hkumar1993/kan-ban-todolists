import React, { Component } from 'react'
import './styles/Boards.css'

class BoardListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: props.board,
      cards: props.cards
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    let newCardTitle = prompt("Enter card title")
    this.props.receiveCard({
      boardId: this.state.board.id,
      id: Object.keys(this.state.cards).length + 1,
      title: newCardTitle
    })

    console.log(newCardTitle);
  }


  render(){
    const board = this.state.board
    const cards = Object.values(this.state.cards)
    return (
      <li className="board" >
        <h2 className="board-header" style={{backgroundColor: board.color}}>{board.name}</h2>
        <ul className="cards-list">
          { cards.map( card => <li className="card" key={card.id}>{card.title}</li>) }
        </ul>
        <button onClick={this.handleClick}>+ Add a card</button>
      </li>
    )
  }

}

export default BoardListItem
