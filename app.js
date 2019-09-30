var mammoth = require('mammoth');
var fs = require('fs');
var wmf2png = require('./wmf2png')



var options = {
    convertImage: mammoth.images.imgElement(function (image) {

        return image.read().then(function (imageBuffer) {

            if (image.contentType == "image/x-wmf") {

                return convert(imageBuffer).then(function (output) {
                    return {
                        src: "data:image/png" + ";base64," + output.toString('base64')
                    };
                });

            } 
            else {

                return {
                    src: "data:" + image.contentType + ";base64," + imageBuffer.toString('base64')
                };

            }
            
        });

    })
};


function convert(imageBuffer) {

    return new Promise(function (resolve, reject) {

        wmf2png(imageBuffer, function (error, output) {

            if (error) { console.log(error); reject(error); }
            else { resolve(output); }

        });

    });


}


mammoth.convertToHtml({ path: '1.docx' }, options).then((result) => {
       
    fs.writeFileSync('test.html', result.value);
    console.log('ok')

}).done();

