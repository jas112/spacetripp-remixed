import React from 'react'
import './styles/FTRParallaxFrames.css'

const FTRParallaxFrames_Starships_2 = ({parallaxRemix}) => {
  return (
    <div className='ftr-plx-frames-holder ftr-plx-starships ftr-starships-frame-bg'>
        <div className='ftr-plx-slide6'>
            <div className={parallaxRemix ? 'starship-remix-v0' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide7'>
            <div className={parallaxRemix ? 'starship-remix-v1' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide8'>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide9'>
            <div className={parallaxRemix ? 'starship-remix-v1' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide10'>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide11'>
            <div className={parallaxRemix ? 'starship-remix-v0' : 'starship'}></div>
        </div>
        <div className='ftr-plx-slide12'>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starship'}></div>
        </div>
        <div className={parallaxRemix ? 'ftr-plx-slideXL2-remix' : 'ftr-plx-slideXL2'}>
            <div className={parallaxRemix ? 'starship-remix-v3' : 'starshipXL'}></div>
        </div>
    </div>
  )
}

export default FTRParallaxFrames_Starships_2