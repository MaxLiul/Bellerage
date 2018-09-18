import React, {Component} from 'react';
import './App.css';
import NewsPost from './NewsPost';

class App extends Component {

  state = {
    newsValue: '',
    listOfNews: [],
    checkCondition: false
  }

  handleChange = event => {
   // const value = event.target.value;
    this.setState({
      newsValue: event.target.value
    });
  };
  
  isChecked = () => {
    this.setState(prevState => ({checkCondition: !prevState.checkCondition}));
  }

  addNews = () => {
    const {
      checkCondition,
      newsValue,
      listOfNews
    } = this.state;

    if (checkCondition === true) {
      this.setState({
        listOfNews : [newsValue, ...listOfNews],
        newsValue : '',
      })
    }
    else{
      alert('Подтвердите публикацию');
    }

  }

  render() {
    const {newsValue, listOfNews} = this.state;
    const posts = listOfNews.map((item, index) => {
      return <NewsPost key = {index} newsText = {item}/>
    })
    return ( 
      <div className = 'inputBlock' >
        <input onChange = {this.handleChange} value = {newsValue}/>
        <button onClick = {this.addNews}> Создать новость </button>
        <span>Подтвердить публикацию
         <input type = "checkbox" className = "check_box" onChange = {this.isChecked}/></span>
        {posts} 
      </div>
    );
  }
}

export default App;