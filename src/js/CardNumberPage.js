import React, { Component } from 'react';
import '../styles/CardNumberPage.css'

class CardNumber extends Component {
  state = {
    value : '' 
  }

  formatCardCode = event => {
    let newValue = event.target.value;
    if (newValue) {
      newValue = newValue
        .replace(/\s+/g, '')
        .match(/.{1,4}/g)
        .join(' ');
    }

    this.setState({value : newValue});
  }

  render() {
    let {value} = this.state;
    
    return (
      <div className="CardNumber">
        <form name='bankCardForm'>
          <input type = 'text' id='cardInput' value={value}  placeholder='Введите номер карты' onChange={this.formatCardCode}/>
        </form>
      </div>
    );
  }
}

export default CardNumber;

