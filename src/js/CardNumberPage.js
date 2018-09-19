import React, { Component } from 'react';

class CardNumber extends Component {
  state = {
    value : '' 
  }

  formatCardCode = event => {
    const {value} = event.target;

    let newValue = '';
    if (value) {
      const strippedValue = value.replace(/\s+/g, '');

      if (strippedValue.length > 16)
        return;
      
      newValue = strippedValue.match(/.{1,4}/g).join(' ');
    }

    this.setState({ value : newValue });
  }

  render() {
    const {
      state : {
        value
      },
      formatCardCode
    } = this;
    
    return (
      <div>
        <form name='bankCardForm'>
          <input type = 'text' id='cardInput' value={value}  placeholder='Введите номер карты' onChange={formatCardCode}/>
        </form>
      </div>
    );
  }
}

export default CardNumber;

