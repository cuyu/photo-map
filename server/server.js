var express = require('express');
const extractMetadata = require('./readimage');
const path = require('path');

var app = express();


// Render the built front-end resources, only be useful in production env
// In develop env, this endpoint (root) should not be used as there's a dev server to host the front-end resources
app.use(express.static(path.join(path.dirname(__dirname), 'build')));

app.get('/image', function (req, res) {
    const metadata = extractMetadata('/Users/CYu/Code/Javascript/photo-map/test2.jpeg');
    res.send({...metadata.getThumbnailSize(), buffer: metadata.getThumbnailBuffer(), tags: metadata.tags});
});

app.listen(3001, '127.0.0.1', function () {
    console.log('Example app listening on port 3001!');
});