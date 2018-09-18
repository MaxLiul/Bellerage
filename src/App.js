import React, { Component } from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import SubmitButton from './SubmitButton';
import CardInfo from './CardInfo';
import FinalPage from './FinalPage';
import './styles/App.css';

class App extends Component {
  state = {
    step : 1,
    firstName : '',
    lastName : '',
    email : '',
    cardNumber : '' 
  }

  changeFormField = (name, value) => {
    this.setState({
      [name] : value
    });
  }

  goToNextPage = () => {
    this.setState(prevState => {
      return {
        step : prevState.step+=1
      };
    })
  }

  goToSelectedPage = (pageNumber) => {
    if(this.state.step > pageNumber){
      this.setState({step : pageNumber})
    }
  }

  render() {
    // const {step, isButtonDisabled, firstName, lastName, email} = this.state;
    // const changeFormField = this.changeFormField; 
    const { 
      state: { 
        step, 
        firstName, 
        lastName, 
        email,
        cardNumber
      },
      changeFormField,
      goToNextPage,
      goToSelectedPage
    } = this;
    let isButtonActive = false;
    let page = null;

    switch(step){
      case 1 : {
        const personalInfoProps = {
          firstName, 
          lastName, 
          email,
          changeFormField
          // changeFormField: this.changeFormField
        };

        isButtonActive = !!firstName && !!lastName && email.match('@');
        page = <PersonalInfo {...personalInfoProps} />;
        break;
      } 
      case 2 : {
        isButtonActive = cardNumber.length === 16;
        page =<CardInfo cardNumber={cardNumber} changeFormField={changeFormField} />;
        break;
      }
      case 3 : {
        page =<FinalPage/>
        break;
      }
      default: 
        break;
    }

    

    return (
      <div className="App">
        <Header step={step} onClick={goToSelectedPage} />
        {page}
        <SubmitButton onClick={goToNextPage} disabled={!isButtonActive} />      
      </div>
    );
  }
}

export default App;
