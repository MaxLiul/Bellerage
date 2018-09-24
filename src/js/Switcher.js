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

  goToSelectedPage = (event) => {
    this.setState({ page : +event.target.dataset.value })
  }
  
   playVideo = (videoRef) => {
     videoRef.current.play();
    };
    pauseVideo = (videoRef) => {
      videoRef.current.pause();
    }
  
  render() {    
    const {
      state : {page}, 
      goToSelectedPage,
      playVideo,
      pauseVideo
    } = this;

    let content = null;

    const videoPropsObject = {
      playVideo,
      pauseVideo
    }
  
    switch (page) {
      case 1:
        content = <VideoPlayerPage  {...videoPropsObject} />;      
        break;
      case 2: 
        content = <CardNumberPage />;
        break
      case 3:
        content = <ModalPage />
        break
      default:
        break;
    }
    const headerPropsObject = {
      page,
      goToSelectedPage
    }
    return (      
      <div className="Switcher">
        <Header {...headerPropsObject} />
        {content}
      </div>
    );
  }
}

export default Switcher;
