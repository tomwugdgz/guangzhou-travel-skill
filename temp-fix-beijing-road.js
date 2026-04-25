const fs = require('fs');
const path = './src/data/beijing-road-history.json';

let content = fs.readFileSync(path, 'utf8');

// 替换中文引号为英文引号
content = content.replace(/"/g, '"').replace(/"/g, '"');

fs.writeFileSync(path, content, 'utf8');

const data = JSON.parse(content);
console.log('Fixed! Total items:', data.length);
