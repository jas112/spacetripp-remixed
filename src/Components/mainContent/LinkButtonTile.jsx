import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './styles/LinkButtonTile.css'
import btnHoverSoundRef from '../../assets/audio/space_signal-213481.mp3'
import btnClickSoundRef from '../../assets/audio/space_signal-213481.mp3'

const LinkButtonTile = ({ linkData, linkBtnTileType, btnHoverSound, btnClickSound, handleItemInteractionSound }) => {

    // LinkData
    // url
    // icon
    // title
    // linkText
    // linkDescription
    // linkTileType

    // console.log(`Link Text - ${linkData.linkText}`);
    // console.log(`Link Tile Type - ${linkData.linkTileType}`);

    const generateLinkBtnTile = () => {
        if(linkData.linkTileType == 'A'){
            return(
                <div 
                    className='link-button-tile-A'
                    onMouseEnter={() => {
                        handleItemInteractionSound(btnHoverSound);
                    }} 
                    onClick={() =>{
                        handleItemInteractionSound(btnClickSound)
                    }}
                >
                    <a className='link-button-tile-text' href={linkData.url} title={linkData.title}>
                        {linkData.linkText}
                    </a>
                </div>
            );
        }else if(linkData.linkTileType == 'A-FancyBox-1'){
            return (
                <div 
                    className='link-button-tile-A'
                    onMouseEnter={() => {
                        handleItemInteractionSound(btnHoverSound);
                    }} 
                    onClick={() =>{
                        handleItemInteractionSound(btnClickSound)
                    }}
                >
                    <a 
                        className='link-button-tile-text'
                        data-fancybox={linkData.linkText}
                        data-type={'pdf'}  
                        href={linkData.url} 
                        title={linkData.title}>
                        {linkData.linkText}
                    </a>
                </div>
            );
        }else if(linkData.linkTileType == 'B'){
            return(
                <div className='link-button-tile-shell'>
                    <div className='link-button-tile-B' title={linkData.title}>
                        <div 
                            className='icon-frame'
                            onMouseEnter={() => {
                                handleItemInteractionSound(btnHoverSound);
                            }} 
                            onClick={() =>{
                                handleItemInteractionSound(btnClickSound)
                            }}
                        >
                            <a href={linkData.url} className='link-button-tile-link'>
                                <FontAwesomeIcon icon={linkData.icon} className="icon" size='2x' />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    }

  return (
    <React.Fragment>
        {generateLinkBtnTile()}
    </React.Fragment>
  )
}

export default LinkButtonTile