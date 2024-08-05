import React from 'react'
import './styles/FTRParallaxFrames.css'
import rotatingStar from '../../assets/images/ftrParallax_imgs/ST_closeup-star-RT-iso-rs-23p5CD-F.png'

const FTRParallaxFrames_Star = () => {
  return (
    <div className='ftr-plx-frames-holder ftr-plx-star-frame'>
      <div className='ftr-plx-background'>
          <img className='ftr-plx-star' src={rotatingStar} alt='Rotating Star'/>
      </div>
  </div>
  )
}

export default FTRParallaxFrames_Star