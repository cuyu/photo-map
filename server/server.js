var express = require('express');
const extractMetadata = require('./readimage');
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/image', function (req, res) {
    const metadata = extractMetadata('/Users/CYu/Code/Javascript/photo-map/test2.jpeg');
    res.send({...metadata.getThumbnailSize(), buffer: metadata.getThumbnailBuffer()});
});

app.listen(3001, '0.0.0.0', function () {
    console.log('Example app listening on port 3001!');
});