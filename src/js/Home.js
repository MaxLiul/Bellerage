import React, { Component } from 'react';
import '../styles/Switcher.css';

class Home  extends Component{
  state = {
    email : '',
    password : ''
  };
  
  changeFormField = event => {
    const {
      name,
      value
    } = event.target;

    this.setState({[name] : value});
  }

  authorizeUser = states => {
    
    if(states[0] === '123' && states[1] === '123'){
      this.props.changeAutorizationStatus();
    
    }
  }

  render(){
    const {
      state : {
        email,
        password
      },      
      authorizeUser,
      changeFormField
    } = this;
    
    return (
      <div>
        <input type='text' name='email' value={email} onChange={changeFormField} placeholder='email' />
        <input type='text' name='password' value={password} onChange={changeFormField} placeholder='password' />
        <button type='button' onClick={authorizeUser.bind(this, [email, password])}>Войти</button>
      </div>
    )
  }
  }
  
  

export default Home;