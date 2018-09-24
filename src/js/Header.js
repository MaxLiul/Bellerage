import React from 'react';
import '../styles/Header.css';

function Header({ goToSelectedPage }) {
  
  return (
    <nav className="Header">
      <ul className = 'headerNavigation'>
        <li data-value={1} onClick={goToSelectedPage}>Video Player</li> 
        <li data-value={2} onClick={goToSelectedPage}>Card Number Formating</li>
        <li data-value={3} onClick={goToSelectedPage}>Modal Button</li>
      </ul>
    </nav>
  );
}

export default Header;