import React from 'react'
import './styles/FTRElement.css'
import './styles/SectionElement.css'
import rotatingStar from '../../assets/images/ftrParallax_imgs/ST_closeup-star-RT-iso-rs-23p5CD-F.png'

const FtrSection = () => {
  return (
    <div id='section-FTR' className='section section-endpoint endpoint-bottom ftr-section'>

        <div className='section-hdr ftr-hdr'>
            <div className='section-position-value'>Terminus</div>
        </div>

        {/* <div className='bg-slide1'>
            <div className='starship'></div>
        </div>
        <div className='bg-slide2'>
            <div className='starship'></div>
        </div>
        <div className='bg-slide3'>
            <div className='starship'></div>
        </div>
        <div className='bg-slide4'>
            <div className='starship'></div>
        </div>
        <div className='bg-slide5'>
            <div className='starship'></div>
        </div> */}

        <div className='ftr-background'>
            <img className='ftr-star' src={rotatingStar} alt='Rotating Star'/>
        </div>

        <div id='ftr-bottom' className='ftr-frame-full ftr-bottom'></div>

    </div>
  )
}

export default FtrSection