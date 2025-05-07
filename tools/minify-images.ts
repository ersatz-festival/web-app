import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = './assets/img';
const outputDir = './public/img';

const validExtensions = ['.png', '.jpg', '.jpeg', '.JPG'];

const minifyImages = async () => {
    try {
        const files = await fs.readdir(inputDir);

        for (const file of files) {
            const ext = path.extname(file);
            if (!validExtensions.includes(ext.toLowerCase())) continue;

            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file);

            console.log(`Compressing ${file} → ${outputPath}`);

            const image = sharp(inputPath);

            // Determine output format
            const lowerExt = ext.toLowerCase();
            if (lowerExt === '.png') {
                await image
                    .png({
                        quality: 70, // compression level: 0-100 (for sharp it's lossy PNG)
                        compressionLevel: 9,
                        palette: true, // reduce number of colors
                    })
                    .toFile(outputPath);
            } else {
                await image
                    .jpeg({
                        quality: 70, // reduce image quality (default is ~80)
                        mozjpeg: true, // better compression
                    })
                    .toFile(outputPath);
            }
        }

        console.log('✅ All images compressed!');
    } catch (err) {
        console.error('❌ Image compression failed:', err);
        process.exit(1);
    }
};

export default minifyImages;
