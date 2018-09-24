import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalPage.css';

function ModalWindow(props){
  const { open, modalWindowAction } = props;
  if (open) {
    return ReactDOM.createPortal(
      <div className='modalWindowWrapper'>
        <div className='modalWindow'>
          <button type='button' className='buttonModal' onClick={modalWindowAction}>Закрыть окно</button>
        </div>
      </div>, 
      document.querySelector('#modal')
    );
  }
  return null;
};


class ModalPage extends Component {

  state = {
    open : false
  }
  openModalWindow = () => {
    this.setState( (prevState) => ({ open : !prevState.open }))
  }

  render() {
    const {
      state : {
        open
      },
      openModalWindow
    } = this;

    return (
      <div className="ModalButton">
        <button type='button' className='buttonModal' onClick={openModalWindow}>Show modal!</button>
        <ModalWindow open = {open} modalWindowAction={openModalWindow}/>
      </div>
    );
  }
}

export default ModalPage;

