const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.njk')) {
      let content = fs.readFileSync(p, 'utf8');
      content = content.replace(/width="1200" height="878"/g, 'width="1920" height="1405"');
      content = content.replace(/width="500" height="333"/g, 'width="740" height="493"');
      content = content.replace(/width="400" height="400"/g, 'width="800" height="800"');
      content = content.replace(/width="300" height="48"/g, 'width="600" height="95"');
      content = content.replace(/width="300" height="205"/g, 'width="600" height="410"');
      fs.writeFileSync(p, content);
    }
  }
}
walk('src');
