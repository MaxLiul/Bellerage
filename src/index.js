import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Switcher from './js/Switcher';
import { rootReducer } from './js/reducers'

let store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switcher />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));

