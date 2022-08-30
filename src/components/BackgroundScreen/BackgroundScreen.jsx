import React from 'react'
import video from '../../assets/video.mp4'
import './BackgroundScreenStyles.css'

function Video() {
  return (
    <div>
      <div className='pantalla'></div>
        <video src={video} autoPlay muted loop></video>
    </div>
  )
}

export default Video