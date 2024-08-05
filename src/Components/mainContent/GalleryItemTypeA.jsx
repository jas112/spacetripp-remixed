import React from 'react'
import './styles/Animations.css'
import './styles/GalleryItemTypes.css'

const GalleryItemTypeA = ({
  galleryItem, 
  btnHoverSound, 
  btnClickSound, 
  handleItemInteractionSound}) => {
  return (
    <div 
      className={`gallery-item-frame`}
      onMouseEnter={() => {
        handleItemInteractionSound(btnHoverSound);
      }}
      onClick={() => {
        handleItemInteractionSound(btnClickSound);
      }}>
        <div className={`gallery-item-indicator`}></div>
            <div className='gallery-item-tile' style={{backgroundImage: `url(${galleryItem.galleryItemThumbnailPath})`}}></div>
        <div className={`gallery-item-indicator`}></div>
    </div>
  )
}

export default GalleryItemTypeA