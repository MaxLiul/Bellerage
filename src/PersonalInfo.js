import React from 'react';
import './styles/PersonalInfo.css';
import './styles/App.css';

const PersonalInfo = ({ 
  firstName, 
  lastName, 
  email, 
  changeFormField 
}) => (
  <div className="contentBlock">
    <h1 className='subTitle'>Персональная информация</h1>
    <div className='inputForm'>
      <form>
        <div>
          <input name="firstName" type='text' value={firstName}  placeholder='First name' onChange={changeFormField} />
        </div>
        <div>
          <input name="lastName" type='text' value={lastName} placeholder='Last name' onChange={changeFormField} />
        </div>
        <div>
          <input name="email" type='email' value={email} placeholder='Email' onChange={changeFormField} />
        </div>
      </form>
    </div>
  </div>
);

export default PersonalInfo;
