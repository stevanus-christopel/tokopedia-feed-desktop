var img_path = "/img/ ";

/* build image from root img path */
var getImage = function(img) {
    return img_path.replace(/\s+/g, img);
};

export default getImage