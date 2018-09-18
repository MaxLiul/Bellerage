import React, { Component } from 'react';
import './styles/SubmitButton.css';

class SubmitButton extends Component {
  
  render() {
    return (
      <div className="SubmitButton">
      <button className = 'buttonNext' disabled = {this.props.disabled} onClick = {this.props.onClick}>Next</button>
      </div>
    );
  }
}

export default SubmitButton;