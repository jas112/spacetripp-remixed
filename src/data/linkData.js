// Link Object Definition

function LinkData(url, icon, title, linkText, linkDescription, linkTileType) {
    this.url = url;
    this.icon = icon;
    this.title = title;
    this.linkText = linkText;
    this.linkDescription = linkDescription;
    this.linkTileType = linkTileType;
}

LinkData.prototype.printUrl = function(){
    console.log(`Link Url: ${this.url}`);
}

LinkData.prototype.printTitle = function(){
    console.log(`Link Title: ${this.title}`);
}

LinkData.prototype.printLinkText = function(){
    console.log(`Link Text: ${this.linkText}`);
}

LinkData.prototype.printLinkDescription = function(){
    console.log(`Link Description: ${this.linkDescription}`);
}

LinkData.prototype.printLinkTileType = function(){
    console.log(`Link Tile Type: ${this.linkTileType}`);
}

export default LinkData