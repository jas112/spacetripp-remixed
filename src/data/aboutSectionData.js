import SectionData from "./sectionData";
import GalleryItemData from "./galleryItemData";
import aboutSectionHeroImage from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png'
import aboutSectionHeroImageRM from '../assets/images/siteFeatures_imgs/ST_trippfig_rm_head_crprcWB75.png'
import defaultThumbImgRef from '../assets/images/webIcons_imgs/ST_icon-N2.png'

const aboutSectionData = new SectionData(
    'about',
    'about',
    'About Me',
    'Exploring Design with Curiosity',
    'nfo',
    `People say I am soft-spoken and contemplative, but I see myself as thoughtful, inquisitive, and deeply analytical. 
    With over seven years of experience in design solutions, from architectural principles to web development, I believe 
    curiosity, adaptability, and continuous learning are key to effective problem-solving and happiness.\n\nI love 
    activities that spark my imagination, like drawing, sci-fi/fantasy, comics, animation, classic samurai films, 
    architecture, and art. I aim to be a great collaborator and connect with like-minded tech creatives.`,
    'true',
    'hero',
    'aboutGallery', 
    [],
    [],
    []   
);

const heroImage = new GalleryItemData(aboutSectionHeroImage, aboutSectionHeroImage, 'image', 'my avatar closeup.', 'closeup illustration of my face centering on my eyes.', 'myHero');
const heroImageRM = new GalleryItemData(aboutSectionHeroImageRM, aboutSectionHeroImageRM, 'image', 'my avatar closeup remixed', 'closeup illustration of my face centering on my eyes.', 'myHero');
aboutSectionData.galleryImages.push(heroImage);
aboutSectionData.galleryImages.push(heroImageRM);

export default aboutSectionData;