const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const targetFolder = process.argv[2] || 'around-the-westwood';
const rootDir = path.resolve(__dirname, targetFolder);
const maxWidth = 1920;
const jpegQuality = 72;

async function getImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (/\.(jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function compressImage(filePath) {
  const originalStat = await fs.stat(filePath);
  const originalSizeKB = (originalStat.size / 1024).toFixed(1);

  const image = sharp(filePath, { failOnError: false });
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width && metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  pipeline = pipeline.jpeg({ quality: jpegQuality, mozjpeg: true, progressive: true });

  const tempPath = `${filePath}.tmp.jpg`;
  await pipeline.toFile(tempPath);
  const compressedStat = await fs.stat(tempPath);
  await fs.rename(tempPath, filePath);

  const finalSizeKB = (compressedStat.size / 1024).toFixed(1);
  console.log(`${path.relative(rootDir, filePath)}: ${originalSizeKB} KB -> ${finalSizeKB} KB`);
}

(async () => {
  try {
    const files = await getImageFiles(rootDir);
    if (!files.length) {
      console.log('No JPG/JPEG files found in around-the-westwood.');
      return;
    }

    console.log(`Compressing ${files.length} JPG/JPEG file(s) in ${targetFolder}...`);
    for (const file of files) {
      await compressImage(file);
    }
    console.log('Compression finished.');
  } catch (error) {
    console.error('Error during compression:', error);
    process.exit(1);
  }
})();
