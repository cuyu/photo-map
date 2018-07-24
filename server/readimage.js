fs = require('fs');
exifPaser = require('exif-parser');


let BUFFER = '';
// TODO: only need to read the first 65535 bytes of the image for metadata parsing
function extractMetadata(imagePath) {
    const data = fs.readFileSync(imagePath);
    const parser = exifPaser.create(data);
    const result = parser.parse();

    return result;
}

module.exports = extractMetadata;