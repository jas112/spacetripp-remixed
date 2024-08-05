// Gallery Item Data Object Definition

function GalleryItemData(itemPath, thumbnailPath, itemType, alt, description, item_id) {
    this.galleryItemPath = itemPath;
    this.galleryItemThumbnailPath = thumbnailPath;
    this.galleryItemType = itemType;
    this.galleryItemAlt = alt;
    this.galleryItemDescription = description;
    this.galleryItemId = item_id;
    this.galleryItemThumbId = `${item_id} + '_thumb'`;
}

GalleryItemData.prototype.printGalleryItemPath = function() {
    console.log(`This GalleryItem_Path: ${this.galleryItemPath}`);
}

GalleryItemData.prototype.printGalleryItemThumbnail = function() {
    console.log(`This GalleryItem_Thumbnail: ${this.galleryItemThumbnail}`);
}

GalleryItemData.prototype.printGalleryItemType = function() {
    console.log(`This GalleryItem_Thumbnail: ${this.galleryItemType}`);
}

GalleryItemData.prototype.printGalleryItemAlt = function() {
    console.log(`This GalleryItem_Alt: ${this.galleryItemAlt}`);
}

GalleryItemData.prototype.printGalleryItemDescription = function() {
    console.log(`This GalleryItem_Description: ${this.galleryItemDescription}`);
}

GalleryItemData.prototype.printGalleryItemId = function() {
    console.log(`This GalleryItem_GalleryItemId: ${this.galleryItemId}`);
}

GalleryItemData.prototype.printGalleryItemThumbId = function() {
    console.log(`This GalleryItem_ThumbId: ${this.galleryItemThumbId}`);
}

export default GalleryItemData;