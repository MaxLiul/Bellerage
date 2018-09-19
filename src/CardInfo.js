import React from 'react';
import './styles/CardInfo.css';

const CardInfo = ({ 
  cardNumber, 
  changeFormField 
}) => (
  <div className="contentBlock">
    <h1 className = 'subTitle'> Номер карты</h1>
    <div className = 'inputForm'>
      <form>
        <div>
          <input name='cardNumber' value={cardNumber} onChange={changeFormField} type = 'text' placeholder = 'Card number' />
        </div>
      </form>
    </div>
  </div>
);

export default CardInfo;