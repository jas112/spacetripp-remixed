import React from 'react'
import './styles/FTR_Element.css'
import TerminusSection from './TerminusSection'
import sectionsData from '../../data/sections'
import FTRParallaxFrames_Star from '../parallaxFrames/FTRParallaxFrames_Star.jsx'
import FTRParallaxFrames_Starships from '../parallaxFrames/FTRParallaxFrames_Starships.jsx'
import FTRParallaxFrames_Starships_B from '../parallaxFrames/FTRParallaxFrames_Starships_B.jsx'
import FTRParallaxFrames_Starships_XL from '../parallaxFrames/FTRParallaxFrames_Starships_XL.jsx'
import FTRParallaxFrames_Starships_2 from '../parallaxFrames/FTRParallaxFrames_Starships_2.jsx'

const FTR_Element = ({parallaxRemix, currentPageLocation}) => {

    // const generateTerminus = () => {
    //     return(
    //         <TerminusSection 
    //         sectionTitle={sectionsData.terminus.sectionTitle}
    //         sectionSubtitle={sectionsData.terminus.sectionSubTitle}
    //         sectionNfo={sectionsData.terminus.sectionNfo}
    //         sectionMarker={sectionsData.terminus.sectionMarker}
    //         currentPageLocation={currentPageLocation}
    //         hasGallery={sectionsData.terminus.hasGallery} 
    //         galleryType={sectionsData.terminus.galleryType} 
    //         galleryImages={sectionsData.terminus.galleryImages}
    //         sectionLinksA={sectionsData.terminus.sectionLinksA}
    //         sectionLinksB={sectionsData.terminus.sectionLinksB}
    //       />
    //     )
    // }

  return (
    <div className='ftr-element-block ftr-element-block-bg'>
        {/* <div className='ftr-element-section ftr-block1'>
            {generateTerminus()}
        </div> */}
        <div className='ftr-element-bg ftr-block2'>
        <div className='ftr-element-bg-frm ftr-bg-frm0'>
                <FTRParallaxFrames_Starships_2 parallaxRemix={parallaxRemix} />
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm1'>
                {/* <FTRParallaxFrames_Starships_XL /> */}
                <FTRParallaxFrames_Starships parallaxRemix={parallaxRemix} />
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm2'>
                <FTRParallaxFrames_Star />
            </div>
        </div>
    </div>
  )
}

export default FTR_Element