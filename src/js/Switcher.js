import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/Switcher.css';
import { addNewProduct, pushToFarm } from './actions.js'
import { initialStateFarm } from './reducers.js'
// import Home from './Home'
let totalPrice = 0;
const productList = ['Хрен','Морковка','Лук','Помидорки']
class Switcher extends Component{

  handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productList.length)
    const order = {
      productName: productList[randomIndex],
      date: new Date().toUTCString(),
      productPrice: Math.floor(Math.random() * 1000)
    }
    
    this.props.addNewProduct(order)
  };
  
  handleAddFarm = () => {
    this.props.pushToFarm( initialStateFarm)
  }
  render(){
    const {
      shopOrder, 
    } = this.props;
    const {handleAddProduct, handleAddFarm} = this;
    const orderProduct = shopOrder.map((item, index) =>{
      return (
        <div className='orderBlock' key={index} >
          <div className='productNameAndPrice'>
            <li>Название: {item.productName}</li>
            <li>Цена: {item.productPrice} </li>
          </div>
          <li>Создан: {item.date}</li>
        </div>
      )
    }) 
    // const productData = information.map((item, index) => <li  key={index}>{item.date}</li>)
    // const productPrice = information.map((item, index) => <li key={index}>Цена: {item.productPrice}</li>)
    
   // totalPrice+=productPrice;
    
    console.log('product', totalPrice);
    // const { information } = this.props;
    return (
      <div className='Switcher'>
        <div className='newOrders commonProps'>
          <h2>Новые заказы в магазине</h2>
          <div>
            <button type='button' onClick={handleAddProduct}>Создать заказ</button>
            <button type='button' onClick={handleAddFarm}>Отправить заказ на ферму</button>
          </div>
          <ul> {orderProduct}</ul>
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

const mapStateToProps = state => {
  return {
    shopOrder : state.shopOrder,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: (orderProduct) => dispatch(addNewProduct(orderProduct)),
    pushToFarm: (farmProduct) => dispatch(pushToFarm(farmProduct))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
