import React from 'react'
import './styles/FTRParallaxFrames.css'

const FTRParallaxFrames_Starships = ({parallaxRemix}) => {
  return (
    <div className='ftr-plx-frames-holder ftr-plx-starships'>
        <div className='ftr-plx-slide1'>
            <div className={parallaxRemix ? 'starship-remix-v0' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide2'>
            <div className={parallaxRemix ? 'starship-remix-v1' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide3'>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slideXL3'>
            <div className={parallaxRemix ? 'starshipXL-remix' : 'starshipXL'}></div>
        </div>
        <div className='ftr-plx-slide4'>
            <div className={parallaxRemix ? 'starship-remix-v1' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide5'>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starshipXL'}></div>
        </div>
    </div>
  )
}

export default FTRParallaxFrames_Starships