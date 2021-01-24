/**
 * 一键重命名
 */
const fs = require('fs');
const path = require('path');
const fp = path.resolve('./', `docs/.g2plot-plot-api`);

const scanFiles = (foldPath) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      if (fileName.indexOf('zh-CN') === -1) { 
        fs.rename(`${foldPath}/${fileName}`, `${foldPath}/${fileName.split('.')[0]}.zh-CN.md`, function(err) {
          if (err) {
            throw err
          } else {
            console.log(`${fileName} 重命名成功`)
          }
        })
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
