import React, { useState } from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'
import NavBar_NavPoint from './NavBar_NavPoint';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faMusic, faBurst, faEye, faRobot, faDiceD20, faMask } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({
    currentScroll, 
    currentDate, 
    currentTime, 
    currentPageLocation, 
    scrollToTop, 
    scrollToBottom, 
    scrollToSection, 
    sfxActive, 
    setSfxActive, 
    musicActive,
    setMusicActive,
    sectionHoverSoundEnter,
    sectionHoverSoundExit,
    navMenuClickSound, 
    navPntClickSound,
    btnHoverSound, 
    btnClickSound,
    handleItemInteractionSound,
    parallaxRemix,
    setParallaxRemix}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavMode = () => {
      setIsNavOpen(!isNavOpen);
    };

    const getClassName = (id) => {
        return `nav-link ${currentPageLocation == id ? 'active' : ''}`;
    };

  return (
    <nav className='navbar'>
        <div className='navbar-panel left-panel'>
            <img src={stLogo} 
                className='navbar-logo' 
                alt='SpaceTripp Logo'
                onMouseEnter={() => {
                    handleItemInteractionSound(sectionHoverSoundEnter);
                }}
                />
            <AudioPlayer 
                musicActive={musicActive}
                setMusicActive={setMusicActive}
            />
            <div 
                className={`st-btn ${musicActive ? '' : 'st-off'}`} 
                title={musicActive ? 'Mute BG Music' : 'Unmute BG Music'} 
                onMouseEnter={() => {
                    handleItemInteractionSound(sectionHoverSoundEnter);
                }} 
                >
                <FontAwesomeIcon 
                    icon={faMusic}
                    onClick={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter)
                        setMusicActive(!musicActive)}}  />
            </div> 
            <div 
                className={`st-btn ${sfxActive ? '' : 'st-off'}`}  
                title={sfxActive ? 'Mute Sound FX' : 'Unmute Sound FX'}
                onMouseEnter={() => {
                    handleItemInteractionSound(sectionHoverSoundEnter);
                }}
                >
                <FontAwesomeIcon 
                    icon={faWaveSquare}
                    onClick={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter)
                        setSfxActive(!sfxActive)}}  />
            </div> 
            <div 
                className={`st-btn ${parallaxRemix ? '' : 'st-off'}`}  
                title={parallaxRemix ? 'Disengage Parallax Remix' : 'Engage Parallax Remix'}
                onMouseEnter={() => {
                    handleItemInteractionSound(sectionHoverSoundEnter);
                }}
                >
                <FontAwesomeIcon 
                    icon={faMask}
                    onClick={() => {
                        handleItemInteractionSound(sectionHoverSoundEnter)
                        setParallaxRemix(!parallaxRemix)}}  />
            </div>
        </div>
        <div className={`nav-console ${isNavOpen ? 'nav-vertical' : 'nav-horizontal'}`}>
            {/* <div className='nfo-console'>
                <div className='scroll-data console-data'>SROLV-{currentScroll}</div>
                <div className='date-data console-data'>{currentDate}</div> 
                <div className='time-data console-data'>{currentTime}</div> 
            </div> */}
            <div className={`nav-links ${isNavOpen ? 'linksActive' : ''}`}>
                <div 
                    className={getClassName('start')} 
                    id='start'
                    onMouseEnter={() => {
                        handleItemInteractionSound(btnHoverSound);
                    }}  
                    onClick={() =>{ 
                        handleItemInteractionSound(btnClickSound);
                        scrollToTop();
                    }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'start'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>HDR</div>
                    </div>
                </div>
                <div 
                className={getClassName('about')} 
                id='about'
                title='About Me'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('about');
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'about'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>About</div>
                    </div>
                </div>
                <div 
                className={getClassName('webDevelopment')} 
                id='webDevelopment'
                title='Web Development'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('webDevelopment')
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'webDevelopment'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Web+Dev</div>
                    </div>
                </div>
                <div 
                className={getClassName('emailDevelopment')} 
                id='emailDevelopment'
                title='Email Development'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}   
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('emailDevelopment');
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'emailDevelopment'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Email+Dev</div>
                    </div>
                </div>
                <div 
                className={getClassName('graphicDesign')} 
                id='graphicDesign'
                title='Graphic Design'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}    
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('graphicDesign');
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'graphicDesign'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Gfx+Dsn</div>
                    </div>
                </div>
                <div 
                className={getClassName('visualDesign')} 
                id='visualDesign'
                title='Visual Design'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('visualDesign')
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'visualDesign'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Vis+Dsn</div>
                    </div>
                </div>
                <div 
                className={getClassName('terminus')} 
                id='terminus'
                title='My Contact Nfo'
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToSection('terminus');
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'terminus'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Terminus</div>
                    </div>
                </div>
                <div 
                className={getClassName('end')} 
                id='end' 
                onMouseEnter={() => {
                    handleItemInteractionSound(btnHoverSound);
                }}
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
                    scrollToBottom();
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'end'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>FTR</div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className={`nav-minimized ${isNavOpen ? 'vNavOpen' : 'vNavClosed'}`} 
            onMouseEnter={() => {
                handleItemInteractionSound(btnHoverSound);
            }}
            onClick={() => {
                handleItemInteractionSound(navMenuClickSound);
                toggleNavMode();
            }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default NavBar

