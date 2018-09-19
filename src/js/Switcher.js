import React, { Component } from 'react';
import '../styles/Switcher.css';
import VideoPlayerPage from './VideoPlayerPage';
import Header from './Header'
import CardNumberPage from './CardNumberPage';
import ModalPage from './ModalPage';
class Switcher extends Component {
  state = {
    page: 1,
  };

  goToSelectedPage = (newPageNumber) => {
    this.setState({
      page : newPageNumber
    })
  }

  render() {
    const {page} = this.state;
    const {goToSelectedPage} = this;
    let content = null;
    switch (page) {
      case 1:
        content = <VideoPlayerPage/>;      
        break;
      case 2: 
        content = <CardNumberPage/>;
        break
      case 3:
        content = <ModalPage />
        break
      default:
        break;
    }
    return (
      <div className="Switcher">
        <Header page={page} onClick={goToSelectedPage}/>
        {content}
      </div>
    );
  }
}

export default Switcher;
