const fs = require('fs');
const sharp = require('sharp');
const dir = 'src/assets/img';

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(png|webp)$/) && !file.match(/optimized/)) {
      const meta = await sharp(`${dir}/${file}`).metadata();
      let width = meta.width;
      
      // Resize logic based on filename
      if (file.includes('intro-image')) {
        width = Math.min(width, 1200);
      } else if (file.includes('mihaela')) {
        width = Math.min(width, 500);
      } else if (file.includes('evaluare') || file.includes('kinetoterapie') || file.includes('terapie-manuala')) {
        width = Math.min(width, 400);
      } else if (file.includes('logo')) {
        width = Math.min(width, 300);
      }
      
      const outName = file.replace(/\.(png|webp)$/, '-opt.webp');
      
      await sharp(`${dir}/${file}`)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(`${dir}/${outName}`);
        
      const newMeta = await sharp(`${dir}/${outName}`).metadata();
      console.log(`${file} -> ${outName} (${newMeta.width}x${newMeta.height})`);
      
      // Replace original with opt (optional, let's keep original for backup and overwrite original)
      // We will overwrite the original in place or use the new names
    }
  }
}
run();
