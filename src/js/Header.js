import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  changePage = event => {
    const { onClick } = this.props;
    onClick(+event.target.dataset.value);
  };
  render() {
    const { changePage } = this;
    return (
      <nav className="Header">
        <ul className = 'headerNavigation'>
         <li data-value='1' onClick={changePage}>Video Player</li> 
         <li data-value='2' onClick={changePage}>Card Number Formating</li>
         <li data-value='3' onClick={changePage}>Modal Button</li>
        </ul>
      </nav>
    );
  }
}

export default Header;