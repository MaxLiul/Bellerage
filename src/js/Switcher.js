import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Switch } from 'react-router'
import '../styles/Switcher.css';
import Home from './Home'

const SecretPage = () => <p>Секретная страница</p>
const PublicPage = () => <p>Публичная страница</p>
const Main = () => <p>Главная</p>
 
class Switcher extends Component{
  state = {
    isAuthorized : false
  };
  
  changeAutorizationStatus = () => {
    this.setState({isAuthorized : true})
  }

  render(){
    const {
      state : {
        isAuthorized
      },
      changeAutorizationStatus
    } = this; 
    
    return (
      <div>
        <ul className='menu'>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/private'>Секретная страница</Link></li>
          <li><Link to='/public'>Публичная страница</Link></li>
          <li><Link to='/auth'>Войти</Link></li>
        </ul>
  
        <hr />
        <div className='contentBlock'> 
          <Switch>        
            <Route exact path='/' component={Main} />
            <Route exact path='/private' render={ () => {
              return isAuthorized ?  <SecretPage /> : (<Redirect to='/' />)
            }} />
            <Route exact path='/public' component={PublicPage} />
            <Route exact path='/auth' render={ () =>{ 
              return isAuthorized ? (<Redirect to='/' />) : <Home changeAutorizationStatus={changeAutorizationStatus} />
            }} />
          </Switch>  
        </div>
      </div>
    )
  
    
  }
}
  
  

export default Switcher;
