// 一键同步 G2Plot v2 API 文档
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { mdprima } = require('./mdprima.js');
const fp = path.resolve('../', `G2Plot/examples`);
const api_path = '../docs/.g2plot-plot-api';
const excludeFiles = ['gallery']; // 不处理的路径

const apiGenerator = (filePath, chartName) => {
  // 文件路径，上层自动扫描
  const res = remark().use(mdprima).processSync(fs.readFileSync(filePath));
  fs.writeFileSync(path.resolve(__dirname, api_path, `${chartName}.md`), res.contents);
};

/**
 * 文件扫描，获取所有 API.zh.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      const director = path.join(foldPath + '/', fileName);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${fileName}` : fileName);
      }
      if (stats.isFile() && fileName === 'API.zh.md') {
        const chartName = dir.split('.')[0];
        if (!excludeFiles.includes(chartName)) {
          const apiPath = path.resolve(
            __dirname,
            '../../G2Plot/examples',
            dir.split('.').join('/'),
            fileName,
          );
          apiGenerator(apiPath, chartName);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
