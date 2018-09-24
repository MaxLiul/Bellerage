import React from 'react';
import '../styles/VideoPlayerPage.css'

function VideoPlayer({
  playVideo,
  pauseVideo,
  videoRef
}) {
  return (
    <div className="VideoPlayer">
      <div>
        <video width='600' height='300' ref={videoRef} >
          <source src='./Video.mp4' type='video/mp4'/>
        </video>
      </div>
      <div>
        <button className='videoButton' type='button' onClick={playVideo}>Play</button>
        <button className='videoButton' type='button' onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}

export default VideoPlayer;

