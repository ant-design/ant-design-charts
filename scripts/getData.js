/**
 * 扫描指定目录下的所有.json文件，形成映射关系
 */
const fs = require('fs');
const path = require('path');

const fp = path.resolve('../', `G2plot/examples/data`);

// 存储所有的meta文件
let result = [];

/**
 * 文件扫描，获取所有.js文件路径
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
      if (stats.isFile() && /.json$/.test(fileName)) {
        console.log(fileName, dir, director);
        result.push({
          filePath: '',
          fileName,
        });
        const data = fs.readFileSync(director, 'utf-8');
        fs.writeFileSync(`./data/${fileName}`, data);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const appendConstants = () => {
  fs.appendFileSync(
    path.resolve(__dirname, './constants.js'),
    `const dataUrl = ${JSON.stringify(result)}`,
  );
};

const start = async () => {
  console.info('记得更新同级目录的G2plot噢');
  console.info('文档扫描中....');
  scanFiles(fp);
  appendConstants();
  console.info('扫描完成');
};

start();
