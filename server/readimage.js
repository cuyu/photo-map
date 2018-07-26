const fs = require('fs');


let BUFFER = '';
// TODO: only need to read the first 65535 bytes of the image for metadata parsing
function extractMetadata(imagePath) {
    const data = fs.readFileSync(imagePath);
    FileAPI.getInfo(file, function (err/**String*/, info/**Object*/){
        if( !err ){
            console.log(info); // { width: 800, height: 600, exif: {..} }
        }
    });
    const parser = exifPaser.create(data.slice(0, 65535));
    const result = parser.parse();

    return result;
}

module.exports = extractMetadata;