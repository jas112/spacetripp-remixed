// Image Data Object Definition

function ImageData(image, thumbnail, alt, description, img_id) {
    this.image = image;
    this.thumbnail = thumbnail;
    this.imageAlt = alt;
    this.imageDescription = description;
    this.imageId = img_id;
    this.thumbId = `${img_id} + '_thumb'`;
}

ImageData.prototype.printImageImg = function() {
    console.log(`This ImageData_Image: ${this.image}`);
}

ImageData.prototype.printImageThumbnail = function() {
    console.log(`This ImageData_Thumbnail: ${this.thumbnail}`);
}

ImageData.prototype.printImageAlt = function() {
    console.log(`This ImageData_Alt: ${this.imageAlt}`);
}

ImageData.prototype.printImageDescription = function() {
    console.log(`This ImageData_Description: ${this.imageDescription}`);
}

ImageData.prototype.printImageId = function() {
    console.log(`This ImageData_ImageId: ${this.imageId}`);
}

ImageData.prototype.printThumbId = function() {
    console.log(`This ImageData_ThumbId: ${this.thumbId}`);
}

export default ImageData;