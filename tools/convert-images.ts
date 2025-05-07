import sharp from 'sharp';

const convertImages = async () => {
    const inputPath = 'public/img/ersatz-cover.png';
    const outputPath = 'public/img/ersatz-cover-processed.png';

    sharp(inputPath)
        .removeAlpha() // Reset alpha if it exists
        .flatten({ background: '#ffffff' }) // Make sure the background is white
        .toColorspace('b-w') // Convert to black and white
        .threshold(240) // Make pure white
        .toBuffer()
        .then((buffer) => {
            return sharp(buffer).ensureAlpha().removeAlpha().extractChannel('red').toColorspace('b-w').toBuffer();
        })
        .then((buffer) => {
            sharp(buffer).toColourspace('b-w').threshold(240).toColourspace('rgba').toFile(outputPath);
        });
};

export default convertImages;
