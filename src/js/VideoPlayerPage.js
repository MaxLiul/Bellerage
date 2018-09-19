import React, { Component } from 'react';
import '../styles/VideoPlayerPage.css'

class Switcher extends Component {
  videoRef = React.createRef();
 
  playVideo = () => {
    this.videoRef.current.play();
  };
  pauseVideo = () => {
    this.videoRef.current.pause();
  }

  render() {
    const {videoRef} = this;
    // videoRef.current.play()
    return (
      <div className="VideoPlayer">
        <div>
          <video width='600' height='300' ref={videoRef} >
            <source src='./Video.mp4' type='video/mp4'/>
          </video>
        </div>
        <div>
          <button className='videoButton' type='button' onClick={this.playVideo}>Play</button>
          <button className='videoButton' type='button' onClick={this.pauseVideo}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Switcher;

