import React, {useState, useEffect} from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({
    parallaxRemix,
    sectionMarker, 
    galleryType, 
    galleryImages, 
    currentStatusBool,
    btnHoverSound,
    btnClickSound,
    handleItemInteractionSound}) => {

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});
    }, [])
    

    const determineGalleryClass = () => {
        if(galleryType == 'hero'){
            return ('gallery-type-hero');
        }else{
            return ('gallery-type-dev-dsn-work');
        }
    }

    const galleryClass = determineGalleryClass();

    // console.log(`${sectionMarker} has galleryType: ${galleryType} and galleryClass: ${galleryClass}`);

    const generateGalleryItems = () => {
        var gallerySet = [];
        if(galleryType == 'hero'){
            if(parallaxRemix){
                gallerySet.push(galleryImages[1]);
            }else{
                gallerySet.push(galleryImages[0])
            }
        }else{
            gallerySet = galleryImages
        }

        return(
            gallerySet.map((gItem, gItem_idx) => (
                <a 
                    key={`${sectionMarker}` + '-' + gItem_idx} 
                    data-fancybox={sectionMarker} 
                    data-caption={gItem.galleryItemDescription}
                    data-type={gItem.galleryItemType}
                    // data-src={gItem.galleryItemType == 'iframe' ? gItem.galleryItemPath : gItem.galleryItemPath}
                    // href={gItem.galleryItemType == 'iframe' ? '' : gItem.galleryItemPath}
                    href={gItem.galleryItemPath}
                >
                    <GalleryItemTypeA 
                        galleryItem={gItem} 
                        btnHoverSound={btnHoverSound}
                        btnClickSound={btnClickSound}
                        handleItemInteractionSound={handleItemInteractionSound}
                    />
                </a>
            )) 
        )
    }

  return (
    <div className={galleryClass}>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-spacer-segment'></div>
            <div className='gallery-element-border-pulse-segment'></div>
        </div>
        <div className={`gallery-element-console ${currentStatusBool ? 'active-gallery-element-console' : ''}`}>

            {generateGalleryItems()}

            {/* {
                galleryImages.map((gItem, gItem_idx) => (
                    <a 
                        key={`${sectionMarker}` + '-' + idx} 
                        data-fancybox={sectionMarker} 
                        data-caption={image.imageDescription} 
                        href={image.image}
                    >
                        <GalleryItemTypeA 
                            galleryItemImage={image}
                            btnHoverSound={btnHoverSound}
                            btnClickSound={btnClickSound}
                            handleItemInteractionSound={handleItemInteractionSound} 
                        />
                    </a>
                    generateGalleryItem(gItem, gItem_idx)
                )) 
            } */}

        </div>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-pulse-segment'></div>
            <div className='gallery-element-border-spacer-segment'></div>
        </div>
    </div>
  )
}

export default GalleryElement