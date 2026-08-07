const fs = require('fs');
const sharp = require('sharp');
const dir = 'src/assets/img';

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(png|webp)$/) && !file.match(/optimized/)) {
      const meta = await sharp(`${dir}/${file}`).metadata();
      let width = meta.width;
      
      // Resize logic based on filename (2x for retina)
      if (file.includes('intro-image')) {
        width = Math.min(width, 1920);
      } else if (file.includes('mihaela')) {
        width = Math.min(width, 1000);
      } else if (file.includes('evaluare') || file.includes('kinetoterapie') || file.includes('terapie-manuala')) {
        width = Math.min(width, 800);
      } else if (file.includes('logo')) {
        width = Math.min(width, 600);
      }
      
      const outName = file.replace(/\.(png|webp)$/, '-opt.webp');
      
      await sharp(`${dir}/${file}`)
        .resize(width)
        .webp({ quality: 95 })
        .toFile(`${dir}/${outName}`);
        
      const newMeta = await sharp(`${dir}/${outName}`).metadata();
      console.log(`${file} -> ${outName} (${newMeta.width}x${newMeta.height})`);
    }
  }
}
run();
