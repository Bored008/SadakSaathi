import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = './public';

async function processDirectory(dirPath) {
  try {
    const items = await fs.readdir(dirPath, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);

      if (item.isDirectory()) {
        await processDirectory(fullPath);
      } else if (
        item.isFile() &&
        (item.name.toLowerCase().endsWith('.png') ||
          item.name.toLowerCase().endsWith('.jpg') ||
          item.name.toLowerCase().endsWith('.jpeg'))
      ) {
        const ext = path.extname(item.name);
        const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

        console.log(`Converting: ${fullPath} -> ${webpPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 }) // High quality compression
            .toFile(webpPath);
            
          // Delete original
          await fs.unlink(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`Failed to convert ${fullPath}:`, err);
        }
      }
    }
  } catch (err) {
    // If public dir doesn't exist or is inaccessible, catch it here
    console.error(`Error reading directory ${dirPath}:`, err.message);
  }
}

console.log('Starting conversion...');
processDirectory(PUBLIC_DIR).then(() => {
  console.log('Finished image processing.');
});
