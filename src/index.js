import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  window.store = store
  window.getState = store.getState
  
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));

})
registerServiceWorker();
