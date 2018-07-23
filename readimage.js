fs = require('fs');
exifPaser = require('exif-parser');


let BUFFER = '';
// TODO: only need to read the first 65535 bytes of the image for metadata parsing
fs.readFile('test2.jpeg', (err, data) => {
    const parser = exifPaser.create(data);
    const result = parser.parse();
})
