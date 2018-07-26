# photo-map


## The hard part

### I. Loading image/video metadata

Reading metadata from images/video is more difficult than expected.
I have tried below libraries and successfully loaded image's exif info:

- [exif-parser](https://github.com/bwindels/exif-parser) - can be both used in Node.js and browser, support to parser the exif data by only first part of the image (a maximum size of 65535 bytes is enough);
- [FileAPI](https://github.com/mailru/FileAPI) - this lib is only for client side (browser), need to import its `fileapi/plugins/FileAPI.exif.js` to read exif data;

**However**, none of them support to parse video files.

I only find one lib [exiftool](https://github.com/nathanpeck/exiftool) which support various of file types, including videos. But the problem is this lib is just a wrapper of [exiftool](http://owl.phy.queensu.ca/~phil/exiftool/), which is another lib wrote in Perl. If we want to packge the app into Electron, that could be a problem.

So far, we can choose:

- Use [exiftool](https://github.com/nathanpeck/exiftool), but need to handle the dependency problem;
- Use [exif-parser](https://github.com/bwindels/exif-parser) or [FileAPI](https://github.com/mailru/FileAPI), but find/write another lib to handle videos;