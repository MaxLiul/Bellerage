import React, { Component } from 'react';
import '../styles/ModalPage.css';
import ReactDOM from 'react-dom';

class ModalWindow extends Component {
   
  render() {
    const { open, onClick } = this.props;
    if(open){
      return ReactDOM.createPortal(
      <div className='modalWindowWrapper'>
        <div className='modalWindow'>
          <button type='button' className='buttonModal' onClick={onClick}>Закрыть окно</button>
        </div>
      </div>, 
      document.querySelector('#modal'));
     }
    return null;
  }
}

class ModalPage extends Component {
  state = {
    open : false
  }
  openModalWindow = () => {
    this.setState( (prevState) => ({ open : !prevState.open }))
  }
  render() {
    let {open}=this.state;
    return (
      <div className="ModalButton">
        <button type='button' className='buttonModal' onClick={this.openModalWindow}>Show modal!</button>
        <ModalWindow open = {open} onClick={this.openModalWindow}/>
      </div>
    );
  }
}

export default ModalPage;

