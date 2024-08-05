import SectionData from "./sectionData";
import GalleryItemData from "./galleryItemData";
import afaraEm_01ThumbRef from '../assets/images/emailDev_imgs/thumbs/afara_build01_thumb.png';
import afaraEm_02ThumbRef from '../assets/images/emailDev_imgs/thumbs/afara_build02_thumb.png';
import afaraEm_03ThumbRef from '../assets/images/emailDev_imgs/thumbs/afara_evbuild01_thumb.png';
import afaraEm_04ThumbRef from '../assets/images/emailDev_imgs/thumbs/afara_evbuild02_thumb.png';
import afaraEm_05ThumbRef from '../assets/images/emailDev_imgs/thumbs/afara_evbuild03_thumb.png';
import nflxEm_01ThumbRef from '../assets/images/emailDev_imgs/thumbs/nflx_custTudum01_thumb.png';
import nflxEm_02ThumbRef from '../assets/images/emailDev_imgs/thumbs/nflx_custTudum02_thumb.png';
import nflxEm_03ThumbRef from '../assets/images/emailDev_imgs/thumbs/nflx_custBridgerton01_thumb.png';
import nflxEm_04ThumbRef from '../assets/images/emailDev_imgs/thumbs/nflx_custBridgerton02_thumb.png';
import nflxEm_05ThumbRef from '../assets/images/emailDev_imgs/thumbs/nflx_custBridgerton03_thumb.png';
import stNgEm_01ThumbRef from '../assets/images/emailDev_imgs/thumbs/stNg_nl_build01_thumb.png';

// '../assets/email_templates/afara_emTemplates/afara_build_01.html';

const emailDevelopmentSectionData = new SectionData(
    'emailDevelopment',
    'emailDevelopment',
    'Email Development',
    'Developing Engaging Email Layouts',
    'devWork',
    `I specialize in designing and constructing responsive, interactive HTML emails 
    that enhance digital marketing efforts. My expertise includes creating reusable 
    email templates, optimizing assets for efficient delivery, and ensuring functionality 
    across various browsers and clients. I am skilled in building engaging HTML newsletters 
    and landing pages, adhering to best practices for quality control. Passionate about 
    precision and collaboration, I strive to deliver impactful email solutions that drive 
    customer engagement and satisfaction.`,
    'true',
    'devWork',
    'emailDevGallery',
    [],
    [],
    []     
);

// GalleryItemData fields:
// item path
// item thumbnail path
// item type
// item Alt
// item Description
// item Id
// item thumbId (generated from itemId)

const afaraEm_01 = new GalleryItemData(
    '/assets/email_templates/afara_emTemplates/afara_build_01.html', 
    afaraEm_01ThumbRef,
    'iframe', 
    'Afara Email 1 - org intro', 
    'Afara is a nonprofit geared towards meaningful social change. This email is an introduction of the organization and a pointer to its online information.', 
    'emailDev-afara-01'
);

const afaraEm_02 = new GalleryItemData(
    '/assets/email_templates/afara_emTemplates/afara_build_02.html', 
    afaraEm_02ThumbRef,
    'iframe', 
    'Afara Email 2 - Origins to Action Foundational Course Offering', 
    'This email details a general outline of Afaras foundational course "Origins to Action". This is email gives a brief description of each module of the course.', 
    'emailDev-afara-02'
);

const afaraEm_03 = new GalleryItemData(
    '/assets/email_templates/afara_emTemplates/afara_events_build_01.html', 
    afaraEm_03ThumbRef,
    'iframe', 
    'Afara Email 3 - Origin to Action Module 1 - Detail', 
    'This email details Module 1 of Afaras foundational course "Origins to Action". Give general information and prompts the recipient to explore more of Afaras offerings.', 
    'emailDev-afara-03'
);

const afaraEm_04 = new GalleryItemData(
    '/assets/email_templates/afara_emTemplates/afara_events_build_02.html', 
    afaraEm_04ThumbRef,
    'iframe', 
    'Afara Email 4 - Origin to Action Module 2 - Detail', 
    'This email details Module 2 of Afaras foundational course "Origins to Action". Give general information and prompts the recipient to explore more of Afaras offerings.', 
    'emailDev-afara-04'
);

const afaraEm_05 = new GalleryItemData(
    '/assets/email_templates/afara_emTemplates/afara_events_build_03.html', 
    afaraEm_05ThumbRef,
    'iframe', 
    'Afara Email 5 - Origin to Action Module 3 - Detail', 
    'This email details Module 3 of Afaras foundational course "Origins to Action". Give general information and prompts the recipient to explore more of Afaras offerings.', 
    'emailDev-afara-05'
);

const nflxEm_01 = new GalleryItemData(
    '/assets/email_templates/nflx_emTemplates/ntflx_build_custom_tudum_1.html', 
    nflxEm_01ThumbRef,
    'iframe', 
    'NtFlx Email 1 - Custom rebuild - Tudum Announcement', 
    'Rebuilt NtFlx Tudum Announcement - code rebuild, copy rewrite, and image assect updates/modifications.', 
    'emailDev-nflx-01'
);

const nflxEm_02 = new GalleryItemData(
    '/assets/email_templates/nflx_emTemplates/ntflx_build_custom_tudum_2.html', 
    nflxEm_02ThumbRef,
    'iframe', 
    'NtFlx Email 2 - Custom rebuild - Tudum Announcement', 
    'Rebuilt NtFlx Tudum Announcement - code rebuild, copy rewrite, and image assect updates/modifications.', 
    'emailDev-nflx-02'
);

const nflxEm_03 = new GalleryItemData(
    '/assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_1.html', 
    nflxEm_03ThumbRef,
    'iframe', 
    'NtFlx Email 3 - Custom rebuild - Bridgerton Season 3 Announcement', 
    'Rebuilt NtFlx Bridgerton Season 3 Announcement - code rebuild, copy rewrite, and image assect updates/modifications.', 
    'emailDev-nflx-03'
);

const nflxEm_04 = new GalleryItemData(
    '/assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_2.html', 
    nflxEm_04ThumbRef,
    'iframe', 
    'NtFlx Email 4 - Custom rebuild - Bridgerton Season 3 Announcement', 
    'Rebuilt NtFlx Bridgerton Season 3 Announcement - code rebuild, copy rewrite, and image assect updates/modifications.', 
    'emailDev-nflx-04'
);

const nflxEm_05 = new GalleryItemData(
    '/assets/email_templates/nflx_emTemplates/ntflx_build_custom_bridgerton_3.html', 
    nflxEm_05ThumbRef,
    'iframe', 
    'NtFlx Email 5 - Custom rebuild - Bridgerton Season 3 Announcement', 
    'Rebuilt NtFlx Bridgerton Season 3 Announcement - code rebuild, copy rewrite, and image assect updates/modifications.', 
    'emailDev-nflx-05'
);

const stNgEm_01 = new GalleryItemData(
    '/assets/email_templates/stNg_emTemplates/stNg_nl_build_1.html', 
    stNgEm_01ThumbRef,
    'iframe', 
    'StNg Email 1 - Product Announcement / Offering', 
    'Created Product Announcement Email Mockup for Rare Artbook Offering - layout design, code build, copy rewrite, and image assect updates/modifications.', 
    'emailDev-stNg-01'
);

emailDevelopmentSectionData.galleryImages.push(afaraEm_01);
emailDevelopmentSectionData.galleryImages.push(afaraEm_02);
emailDevelopmentSectionData.galleryImages.push(afaraEm_03);
emailDevelopmentSectionData.galleryImages.push(afaraEm_04);
emailDevelopmentSectionData.galleryImages.push(afaraEm_05);
emailDevelopmentSectionData.galleryImages.push(nflxEm_01);
emailDevelopmentSectionData.galleryImages.push(nflxEm_02);
emailDevelopmentSectionData.galleryImages.push(nflxEm_03);
emailDevelopmentSectionData.galleryImages.push(nflxEm_04);
emailDevelopmentSectionData.galleryImages.push(nflxEm_05);
emailDevelopmentSectionData.galleryImages.push(stNgEm_01);

export default emailDevelopmentSectionData;