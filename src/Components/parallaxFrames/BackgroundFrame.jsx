import React from 'react'
import './styles/Parallax.css'

const BackgroundFrame = ({currentScroll}) => {

  const hasScrollFromTop = currentScroll > 0;

  return (
    <div className="parallax-frame-holder-background">
        <div className="parallaxFrame ">
            <div className={`top-overlay ${hasScrollFromTop ? 'hide' : ''}`}></div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
    </div>
  )
}

export default BackgroundFrame