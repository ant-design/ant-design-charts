/**
 * 一键同步 G2Plot v2 API 文档
 * eg: 
 * -全量同步：`node scripts/api.js`
 * -单一同步：`node scripts/api.js Bar`
 */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { mdprima } = require('./mdprima.js');
const api_path = '../docs/.g2plot-plot-api';
const excludeFiles = ['gallery']; // 不处理的路径
const arg = process.argv.splice(2);
const fp = arg.length ? path.resolve('../', `G2Plot/examples/${arg[0]}`)
  : path.resolve('../', `G2Plot/examples`);
const apiGenerator = (filePath, chartName) => {
  // 文件路径，上层自动扫描
  const res = remark().use(mdprima).processSync(fs.readFileSync(filePath));
  // replace 去掉 title
  fs.writeFileSync(path.resolve(__dirname, api_path, `${chartName}.md`), res.contents.replace(/##\W*\S*\W*xA;\S*\W*\S*/, ''));
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
          console.log(apiPath, fileName);
          apiGenerator(apiPath, chartName);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp, arg[0]);
