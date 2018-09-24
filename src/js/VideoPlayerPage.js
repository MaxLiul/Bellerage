import React from 'react';
import '../styles/VideoPlayerPage.css'

function VideoPlayer(props) {
  const videoRef = React.createRef();
  const {
    playVideo,
    pauseVideo
  } = props;

  // const playVideo = () => {videoRef.current.play();};

    return (
      <div className="VideoPlayer">
        <div>
          <video width='600' height='300' ref={videoRef} >
            <source src='./Video.mp4' type='video/mp4'/>
          </video>
        </div>
        <div>
          <button className='videoButton' type='button' onClick={playVideo.bind(this, videoRef)}>Play</button>
          <button className='videoButton' type='button' onClick={pauseVideo.bind(this, videoRef)}>Pause</button>
        </div>
      </div>
    );
  }

export default VideoPlayer;

