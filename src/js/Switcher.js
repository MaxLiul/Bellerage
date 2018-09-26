import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/Switcher.css';
import { addNewProduct, pushToFarm, pushToBudget } from './actions.js'

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
    this.props.pushToFarm(this.props.shopOrder[0])
  }
  
  render(){
    const {
      shopOrder, 
      farmOrder,
      budget
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

    const farmProduct = farmOrder.map((item, index) =>{
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
    
   // totalPrice+=productPrice;
   
    return (
      <div className='Switcher'>
        <div className='newOrders commonProps'>
          <h2>Новые заказы в магазине</h2>
          <div>
            <button type='button' onClick={handleAddProduct}>Создать заказ</button>
            <button type='button' disabled={shopOrder.length==0 ?  true : false} onClick={handleAddFarm}>Отправить заказ на ферму</button>
          </div>
          <ul> {orderProduct}</ul>
        </div>
        {/* <p> Название товара: {productName}</p>
        <p> Дата: {date} </p> */}
        <div className='productionOnFarm commonProps'>
          <h2>Производство на ферме</h2>
          <button type='button' disabled={farmOrder.length==0 ?  true : false} onClick={this.props.pushToBudget}>Отправить урожай клиенту</button>
          <ul>{ farmProduct }</ul>
        </div>
        <div className='budget commonProps'>
          <h2>Бюджет</h2>
          <div className='orderList'>
            <p>Всего получено денег: {budget.totalIncomes}</p>
            <p>Расходы продавцов: {budget.sellersCosts}</p>
            <p>Расходы на ферме: {budget.farmCosts}</p>
            <p>Расходы на доставку: {budget.deliveryCosts}</p>
            <p>Итого: {budget.result}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shopOrder : state.orderReducer.shopOrder,
    farmOrder : state.farmReducer.farmOrder,
    budget : state.budgetReducer.budget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: (orderProduct) => dispatch(addNewProduct(orderProduct)),
    pushToFarm: (farmProduct) => dispatch(pushToFarm(farmProduct)),
    pushToBudget: (budget) => dispatch(pushToBudget(budget))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
