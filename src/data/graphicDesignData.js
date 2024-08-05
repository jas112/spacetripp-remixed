import SectionData from "./sectionData";
import GalleryItemData from "./galleryItemData";
import imageThumb_01ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/IICFF_Poster_Contest_Entry_thumb.jpg';
import imageFull_01ref from '../assets/images/grfxDsnProjects_imgs/IICFF_Poster_Contest_Entry.jpg';
import imageThumb_02ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/RMS_BCard_Layout_rs_thumb.jpg'
import imageFull_02ref from '../assets/images/grfxDsnProjects_imgs/RMS_BCard_Layout_rs.jpg'
import imageThumb_03ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/AmaniKateeb_logo_thumb.jpg'
import imageFull_03ref from '../assets/images/grfxDsnProjects_imgs/AmaniKateeb_logo_t2.gif'
import imageThumb_04ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/LA_USA_TOURS_logo_thumb.jpg'
import imageFull_04ref from '../assets/images/grfxDsnProjects_imgs/LA_USA_TOURS_project_anim_v2.gif'
import imageThumb_05ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/HCL_FundraiserFlyer_option1_thumb.jpg'
import imageFull_05ref from '../assets/images/grfxDsnProjects_imgs/HCL_FundraiserFlyer_options_fullwb.jpg'
import imageThumb_06ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/HCL_poster_innovation_conf_thumb.jpg'
import imageFull_06ref from '../assets/images/grfxDsnProjects_imgs/HCL_poster_innovation_conf.jpg'
import imageThumb_07ref from '../assets/images/grfxDsnProjects_imgs/grfxDsn_thumbs/HCL_Compton_Ready_Promo_rs_thumb.jpg'
import imageFull_07ref from '../assets/images/grfxDsnProjects_imgs/HCL_Compton_Ready_Promo_rs.jpg'

const graphicDesignSectionData = new SectionData(
    'graphicDesign',
    'graphicDesign',
    'Graphic Design',
    'Designing Effective Visual Communication',
    'designWork',
    `I have crafted compelling visual identities across various projects. 
    From premium packaging and captivating book covers to innovative NFTs 
    and cryptocurrency symbols, my work blends creativity with technical 
    precision. I excel in logo design, poster artwork, and developing unique 
    brand elements, always aiming to bring a distinct visual voice to every 
    project. Passionate about collaborating with like-minded creatives, I 
    strive to create impactful and memorable design solutions.`,
    'true',
    'designWork',
    'grfxDsnGallery',
    [],
    [],
    []     
);

const imageFull_01 = new GalleryItemData(
    imageFull_01ref, 
    imageThumb_01ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_02 = new GalleryItemData(
    imageFull_02ref, 
    imageThumb_02ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_03 = new GalleryItemData(
    imageFull_03ref, 
    imageThumb_03ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_04 = new GalleryItemData(
    imageFull_04ref, 
    imageThumb_04ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_05 = new GalleryItemData(
    imageFull_05ref, 
    imageThumb_05ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_06 = new GalleryItemData(
    imageFull_06ref, 
    imageThumb_06ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_07 = new GalleryItemData(
    imageFull_07ref, 
    imageThumb_07ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

const imageFull_08 = new GalleryItemData(
    imageFull_06ref, 
    imageThumb_06ref,
    'image', 
    'grfxDsn image-1 fullsize', 
    'grfxDsn-full-01', 
    'grfxDsn-full-01'
);

graphicDesignSectionData.galleryImages.push(imageFull_01);
graphicDesignSectionData.galleryImages.push(imageFull_02);
graphicDesignSectionData.galleryImages.push(imageFull_03);
graphicDesignSectionData.galleryImages.push(imageFull_04);
graphicDesignSectionData.galleryImages.push(imageFull_05);
graphicDesignSectionData.galleryImages.push(imageFull_06);
graphicDesignSectionData.galleryImages.push(imageFull_07);

export default graphicDesignSectionData;