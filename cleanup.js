const fs = require('fs');
const dir = 'src/assets/img';
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.includes('-opt.webp')) {
    fs.unlinkSync(`${dir}/${f}`);
  }
});

const remain = fs.readdirSync(dir);
remain.forEach(f => {
  fs.renameSync(`${dir}/${f}`, `${dir}/${f.replace('-opt.webp', '.webp')}`);
});
console.log("Cleanup done.");
