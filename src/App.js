import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';

import BoardListContainer from './components/boards/board_list_container'


class App extends Component {
  constructor({store}){
    super()
    this.state = { store }
  }

  render() {
    return (
      <Provider store = { this.state.store }>
        <BoardListContainer />
      </Provider>
    );
  }
}

export default App;
