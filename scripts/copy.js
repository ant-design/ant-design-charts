/**
 * 一键重命名
 */
const fs = require('fs');
const path = require('path');
const fp = path.resolve('./', `docs/demos`);

const scanFiles = (foldPath) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      if (fileName.indexOf('zh-CN') === -1) { 
        fs.writeFileSync(`${foldPath}/${fileName.split('.')[0]}.zh-CN.md`, fs.readFileSync(`${foldPath}/${fileName}`))
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
