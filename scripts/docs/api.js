/**
 * 一键同步 G2Plot API 文档
 * eg:
 * -全量同步：`node scripts/docs/api.js G2Plot`
 */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { checkDirExist } = require('../util');
const { mdprima } = require('../ast/mdprima.js');
const apiWriteBasePath = '../../packages/site/docs';
const arg = process.argv.splice(2);
const docsPath = arg[1] || 'docs';
const plot = arg[0] || 'G2Plot';
const fp = path.resolve('../', `${plot}/${docsPath}`);

const apiGenerator = (apiPath, filename) => {
  // 文件路径，上层自动扫描
  const res = remark()
    .use(mdprima)
    .processSync(
      fs.readFileSync(apiPath, {
        encoding: 'utf-8',
      }),
    );
  const writePath = path.join(__dirname, apiWriteBasePath, apiPath.split(docsPath)[1]);
  checkDirExist(writePath.split(filename)[0]);
  fs.writeFileSync(writePath, res.contents);
};

/**
 * 文件扫描，获取所有 *.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((filename) => {
      const director = path.join(foldPath + '/', filename);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${filename}` : filename);
      }
      if (stats.isFile() && filename.endsWith('.md')) {
        const apiPath = path.resolve(__dirname, `../../../${plot}/${docsPath}`, dir.split('.').join('/'), filename);
        apiGenerator(apiPath, filename);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
