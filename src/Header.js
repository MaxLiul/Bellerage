import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {

  changePage = event => {
    const { onClick } = this.props;
    onClick(+event.target.innerText);
  };

  render() {    
    const {
      props : {
        step
      },
      changePage
    }= this;
   
    return (
      <header className="Header">
        <div className = 'header_sub_item'>
          <p className = {step === 1 ? 'step_active' : 'step_number' } onClick={changePage}>1</p>
          <p>Personal information</p>
        </div> 
        <div className = 'header_sub_item'>
          <p className = {step === 2 ? 'step_active' : 'step_number' } onClick={changePage}>2</p>
          <p>Card information</p>
        </div> 
        <div className = 'header_sub_item'>
          <p className = {step === 3 ? 'step_active' : 'step_number' } onClick={changePage}>3</p>
          <p>Finish</p>
        </div>        
      </header>
    );
  }
}

export default Header;
