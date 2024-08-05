// Section Data Object Definition

function SectionData(name, marker, title, subTitle, sectionType, sectionNfo, hasGallery, galleryType, galleryName, galleryImages, sectionLinksA, sectionLinksB) {
    this.sectionName = name;
    this.sectionMarker = marker;
    this.sectionTitle = title;
    this.sectionSubTitle = subTitle;
    this.sectionType = sectionType;
    this.sectionNfo = sectionNfo;
    this.hasGallery = hasGallery;
    this.galleryType = galleryType;
    this.galleryName = galleryName;
    this.galleryImages = galleryImages;
    this.sectionLinksA = sectionLinksA;
    this.sectionLinksB = sectionLinksB;
}

SectionData.prototype.printName = function() {
    console.log(`Name: ${this.sectionName}`);
}

SectionData.prototype.printMarker = function() {
    console.log(`Marker: ${this.sectionMarker}`);
}

SectionData.prototype.printTitle = function() {
    console.log(`Title: ${this.sectionTitle}`);
}

SectionData.prototype.printSubtitle = function() {
    console.log(`Subtitle: ${this.sectionSubTitle}`);
}

SectionData.prototype.printSectionType = function() {
    console.log(`Section Type: ${this.sectionType}`);
}

SectionData.prototype.printSectionNfo = function() {
    console.log(`SectionNfo: ${this.sectionNfo}`);
}

SectionData.prototype.printHasGallery = function() {
    console.log(`HasGallery: ${this.hasGallery}`);
}

SectionData.prototype.printGalleryType = function() {
    console.log(`Gallery Type: ${this.galleryType}`);
}

SectionData.prototype.printGalleryName = function() {
    console.log(`Gallery Name: ${this.galleryName}`);
}

SectionData.prototype.printGalleryImages = function() {
    console.log(`Gallery Images: ${JSON.stringify(this.galleryImages, null, 2)}`);
}

SectionData.prototype.printSectionLinks = function() {
    console.log(`Section Links: ${JSON.stringify(this.sectionLinks, null, 2)}`);
}

export default SectionData;