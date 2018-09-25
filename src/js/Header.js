import React from 'react';
import '../styles/Header.css';

const menuItems = ['Video Player', 'Card Number Formating', 'Modal Button'];

function Header({ goToSelectedPage }) {
  return (
    <nav className="Header">
      <ul className = 'headerNavigation'>
        {menuItems.map((menuItem, index) => <li data-value={index+1} onClick={goToSelectedPage}>{menuItem}</li>)} 
      </ul>
    </nav>
  );
}

export default Header;