const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '../public/raw');
const outputDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            const inputPath = path.join(inputDir, file);
            const name = path.parse(file).name;
            const outputPath = path.join(outputDir, `${name}.webp`);

            console.log(`Processing: ${file}...`);

            try {
                const metadata = await sharp(inputPath).metadata();
                console.log(`  Original size: ${metadata.width}x${metadata.height}`);

                await sharp(inputPath)
                    .resize({ width: 1920, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`  Saved to: ${name}.webp`);
            } catch (err) {
                console.error(`  Error processing ${file}:`, err);
            }
        }
    }
}

optimizeImages();
