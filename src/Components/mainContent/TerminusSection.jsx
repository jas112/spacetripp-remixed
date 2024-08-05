import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import TopTerminusSectionPanel from './TopTerminusSectionPanel'
import BottomSectionPanel from './BottomSectionPanel'
import BottomTerminusSectionPanel from './BottomTerminusSectionPanel'
import LinkButtonTile from './LinkButtonTile.jsx'
import {generateText} from '../../utils/contentTools.jsx'
import './styles/SectionPanel.css'
import './styles/TerminusSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const TerminusSection = ({
    sectionDataValue, 
    currentPageLocation,
    sectionHoverSoundEnter,
    sectionHoverSoundExit, 
    btnHoverSound, 
    btnClickSound,
    handleItemInteractionSound }) => {

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);

    const hasGalleryBool = sectionDataValue.hasGallery === 'true';
    // console.log(`${sectionMarker} has a gallery: ${hasGalleryBool} ||| ${hasGallery}`);

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.2, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        const isTheEnd = (sectionDataValue.sectionMarker == currentPageLocation) || (currentPageLocation == 'end');

        // setCurrentStatusBool(sectionMarker == currentPageLocation);

        setCurrentStatusBool(isTheEnd);

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

  return (
    <div 
        id={sectionDataValue.sectionMarker} 
        ref={ref} 
        className={`full-section-config floating ${currentStatusBool ? 'fade-in' : 'fade-out'}`}
    >
        <div className='terminus-console-frame-outer'>
            <TopTerminusSectionPanel currentStatusBool={currentStatusBool} />
            <div className='terminus-hdr-frame'>
                <div className="ftr-txt-title ftr-main-title">{sectionDataValue.sectionTitle}</div>
            </div>
            <div className='terminus-console-frame-inner'>
                <div 
                    className='terminus-console-panel terminus-console-panel-A'
                    onMouseEnter={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter);
                    }} 
                    onMouseLeave={() =>{
                        handleItemInteractionSound(sectionHoverSoundExit)
                    }} 
                >
                    <div className='terminus-avatar-frame'>
                        <div 
                            className='terminus-avatar' style={{backgroundImage: `url(${sectionDataValue.galleryImages[0].image})`}}
                            onMouseEnter={() => {
                                handleItemInteractionSound(sectionHoverSoundEnter);
                            }} 
                        ></div>
                    </div>
                    <div className='terminus-end-msg-frame'>
                        <div className='terminus-end-msg'>
                            {generateText(sectionDataValue.sectionNfo,'sectionNfo', sectionDataValue.sectionMarker)}
                        </div>
                    </div>
                </div>
                <div 
                    className='terminus-console-panel terminus-console-panel-B'
                    onMouseEnter={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter);
                    }} 
                    onMouseLeave={() =>{
                        handleItemInteractionSound(sectionHoverSoundExit)
                    }} 
                >
                    {/* <div className='terminus-console-panel-indicator'></div>
                    <div className='terminus-console-panel-button-A'>
                        <a className='terminus-console-panel-button-text' href='www.cartoonbrew.com' target='_blank' rel='noopener noreferrer'>Email Me</a>
                    </div>
                    <div className='terminus-console-panel-button-A'>
                        <a className='terminus-console-panel-button-text' href='www.cartoonbrew.com' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </div> */}
                    {
                        sectionDataValue.sectionLinksA.map((link, idx) => (
                            <LinkButtonTile 
                            key={`${sectionDataValue.sectionMarker}LinkA` + '-' + idx} 
                            linkData={link} 
                            linkBtnTileType={'A'} 
                            btnHoverSound={btnHoverSound} 
                            btnClickSound={btnClickSound} 
                            handleItemInteractionSound={handleItemInteractionSound} 
                        />
                        )) 
                    }
                    <div className='terminus-console-panel-button-B-frame'>
                    {
                        sectionDataValue.sectionLinksB.map((link, idx) => (
                            <LinkButtonTile 
                                key={`${sectionDataValue.sectionMarker}LinkB` + '-' + idx} 
                                linkData={link} 
                                linkBtnTileType={'B'} 
                                btnHoverSound={btnHoverSound} 
                                btnClickSound={btnClickSound} 
                                handleItemInteractionSound={handleItemInteractionSound} 
                            />
                        )) 
                    }
                    </div>
                    <div className='terminus-console-panel-indicator'></div>
                </div>
            </div>
            <BottomTerminusSectionPanel currentStatusBool={currentStatusBool} /> 
        </div>
    </div>

  )
}

export default TerminusSection