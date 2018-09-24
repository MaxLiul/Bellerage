import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Switcher from './js/Switcher';


ReactDOM.render(
  <BrowserRouter>
    <Switcher />
  </BrowserRouter>, 
  document.getElementById('root'));

