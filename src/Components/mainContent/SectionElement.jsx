import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import TopSectionPanel from './TopSectionPanel.jsx'
import BottomSectionPanel from './BottomSectionPanel.jsx'
import GalleryElement from './GalleryElement.jsx'
import './styles/SectionElement.css'
import {generateText} from '../../utils/contentTools.jsx'

const SectionElement = ({
    sectionDataValue,
    currentPageLocation, 
    parallaxRemix, 
    sectionHoverSoundEnter,
    sectionHoverSoundExit,
    btnHoverSound,
    btnClickSound,
    handleItemInteractionSound}) => {

    // console.log(JSON.stringify(GalleryImages, null, 2));
    // console.log(GalleryImages[0].image);

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);

    const hasGalleryBool = sectionDataValue.hasGallery === 'true';
    // console.log(`${sectionMarker} has a gallery: ${hasGalleryBool} ||| ${hasGallery}`);

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.2, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        setCurrentStatusBool(sectionDataValue.sectionMarker == currentPageLocation);

    }, [currentPageLocation])

    useEffect(() => {

        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivateSectionMinor(true);
            }, 100);

        }else{
            setActivateSectionMinor(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);
    

    // const currentStatusBool = sectionMarker == currentPageLocation;

    const generateGallery = () => {
        // console.log(`from generateGaller in ${sectionMarker} SectionElement - currentStatusBool: ${currentStatusBool}`);
        const currentBoolStr = currentStatusBool.toString();
        // console.log(`currentBoolStr: ${currentBoolStr}`);
        if(hasGalleryBool){
            return(
                <GalleryElement 
                parallaxRemix={parallaxRemix}
                sectionMarker={sectionDataValue.sectionMarker} 
                galleryType={sectionDataValue.galleryType} 
                galleryImages={sectionDataValue.galleryImages} 
                currentStatusBool={currentStatusBool} 
                btnHoverSound={btnHoverSound}
                btnClickSound={btnClickSound}
                handleItemInteractionSound={handleItemInteractionSound} />
                // <div style={{width: '100%', height: '100px', color: '#fff', border: 'solid 1px white'}}>This section has a gallery</div>
            )
        }
    }

    const galleryValue = generateGallery;

  return (
    <>
        <div id={sectionDataValue.sectionMarker} ref={ref} className={`full-section-config floating ${inView ? 'fade-in' : 'fade-out'}`}>
            <TopSectionPanel currentStatusBool={currentStatusBool}/>
            <div 
                id={`${sectionDataValue.sectionMarker} + _Mkr`} 
                ref={ref} 
                className={`section-minor ${activateSectionMinor ? 'active-section-minor' : ''}`}
                onMouseEnter={() => {
                    handleItemInteractionSound(sectionHoverSoundEnter);
                }}
                onMouseLeave={() => {
                    handleItemInteractionSound(sectionHoverSoundExit);
                }}
            >
                <div className="section-hdr">
                    <div className="section-title">{sectionDataValue.sectionTitle}</div>
                    <div className="section-position-value">{sectionDataValue.sectionTitle}</div>
                    <div className="section-subtitle">{sectionDataValue.sectionSubtitle}</div>
                </div>
                <div className="section-nfo  nfo-scroll">
                    {generateText(sectionDataValue.sectionNfo,'sectionNfo', sectionDataValue.sectionMarker)}
                </div>
                {/* {galleryValue} */}
                {/* <div className='gallery-type-hero'>
                    <img className='hero-image' src={GalleryImages[0].image} alt={GalleryImages[0].alt} />
                </div> */}
                {generateGallery()}
            </div>
            <BottomSectionPanel currentStatusBool={currentStatusBool}/>
        </div>
    </>

  )
}

export default SectionElement