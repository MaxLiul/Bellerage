import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/Switcher.css';
import { addNewProduct, pushToFarm } from './actions.js'
// import Home from './Home'
let totalPrice = 0;
 
class Switcher extends Component{
  
  render(){
    const {
      information, 
      setNewProduct,
      pushToFarm
    } = this.props;
    const productName = information.map((item, index) => <li className='productList' key={index}>Название: {item.productName}</li>)
    const productData = information.map((item, index) => <li className='productList' key={index}>{item.date}</li>)
    const productPrice = information.map((item, index) => <li className='productList' key={index}>Цена: {item.productPrice}</li>)
    
    totalPrice+=productPrice;
    
    console.log('product', totalPrice);
    // const { information } = this.props;
    return (
      <div className='Switcher'>
        <div className='newOrders commonProps'>
          <h2>Новые заказы в магазине</h2>
          <div>
            <button type='button' onClick={setNewProduct}>Создать заказ</button>
            <button type='button' onClick={pushToFarm}>Отправить заказ на ферму</button>
          </div>
          <ul>{productName} {productPrice} </ul>
        </div>
        {/* <p> Название товара: {productName}</p>
        <p> Дата: {date} </p> */}
        <div className='productionOnFarm commonProps'>
          <h2>Производство на ферме</h2>
          <button type='button' >Отправить урожай клиенту</button>
        </div>
        <div className='budget commonProps'>
          <h2>Бюджет</h2>
          <div className='orderList'>
            <p>Всего получено денег: {}</p>
            <p>Расходы продавцов:</p>
            <p>Расходы на ферме:</p>
            <p>Расходы на доставку:</p>
            <p>Итого:</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    information : store.information,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewProduct: () => dispatch(addNewProduct()),
    pushToFarm: () => dispatch(pushToFarm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
