var express = require('express');
const extractMetadata = require('./readimage');
const path = require('path');
const fs = require('fs');

var app = express();


// Render the built front-end resources, only be useful in production env
// In develop env, this endpoint (root) should not be used as there's a dev server to host the front-end resources
app.use(express.static(path.join(path.dirname(__dirname), 'build')));


const PHOTO_DIR = '/Users/CYu/Code/Javascript/photo-map/test_photos';

app.get('/image', function (req, res) {
    let metadata = [];
    fs.readdirSync(PHOTO_DIR).forEach(file => {
        console.log(file);
        metadata.push(extractMetadata(path.join(PHOTO_DIR, file)));
    });
    respones = [];
    for (let i = 0; i < metadata.length; ++i) {
        respones.push({
            ...metadata[i].getThumbnailSize(),
            buffer: metadata[i].getThumbnailBuffer(),
            tags: metadata[i].tags
        });
    }
    res.send(respones);
});

app.get('/mov', function (req, res) {
    const data = fs.readFileSync('/Users/CYu/Code/Javascript/photo-map/test_photos/test.MOV');
    res.send(data);
});

app.listen(3001, '127.0.0.1', function () {
    console.log('Example app listening on port 3001!');
});