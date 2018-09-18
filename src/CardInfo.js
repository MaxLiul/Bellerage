import React, { Component } from 'react';
import './styles/CardInfo.css';

class CardInfo extends Component {
  handleChange = event => {
    const { changeFormField } = this.props;

    const value = event.target.value;
    const name = event.target.name;
    
    changeFormField(name, value);
  }
  
  render() {
    const { cardNumber } = this.props;
    const { handleChange } = this;
    return (
      <div className="contentBlock">
        <h1 className = 'subTitle'> Номер карты</h1>
        <div className = 'inputForm'>
          <form>
            <div>
              <input name='cardNumber' value={cardNumber} onChange={handleChange} type = 'text' placeholder = 'Card number' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CardInfo;