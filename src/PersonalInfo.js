import React, { Component } from 'react';
import './styles/PersonalInfo.css';
import './styles/App.css';

class PersonalInfo extends Component {
  handleChange = event => {
    const { changeFormField } = this.props;

    const value = event.target.value;
    const name = event.target.name;
    // const {
    //   name,
    //   value
    // } = event.target;

    changeFormField(name, value);
  }
  render() {
    const { firstName, lastName, email } = this.props;
    const { handleChange } = this;

    return (
      <div className="contentBlock">
        <h1 className='subTitle'>Персональная информация</h1>
        <div className='inputForm'>
          <form>
            <div>
              <input name="firstName" type='text' value={firstName}  placeholder='First name' onChange={handleChange} />
            </div>
            <div>
              <input name="lastName" type='text' value={lastName} placeholder='Last name' onChange={handleChange} />
            </div>
            <div>
              <input name="email" type='email' value={email} placeholder='Email' onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
