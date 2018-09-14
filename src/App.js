import React, {
  Component
} from 'react';
import './App.css';
import NewsPost from './NewsPost';

class App extends Component {

  state = {
    value: '',
    array: [],
    check: false
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({
      value: text
    });
  };
  isChecked = () => {
    this.setState(state => ({check: !state.check}));
  }

  addNews = () => {
    if (this.state.check === true) {
      this.setState({
        array : [this.state.value, ...this.state.array],
        value : '',
      })
    }
    else{
      alert('Подтвердите публикацию');
    }

  }
  render() {
    const {value, array} = this.state;
    const posts = array.map((item, index) => {
      return <NewsPost key = {index} text = {item}/>
    })
    return ( 
      <div className = 'inputBlock' >
        <input onChange = {this.handleChange} value = {value}/>
        <button onClick = {this.addNews} > Создать новость </button>
        <span>Подтвердить публикацию
         <input type = "checkbox" className = "check_box" onChange = {this.isChecked}/></span>
        {posts} 
      </div>
    );
  }
}

export default App;