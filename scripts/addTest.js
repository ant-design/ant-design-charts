/**
 * 自动拷贝g2plot测试用例
 * eg: node node ./scripts/addTest.js bar 柱状图测试用例
 */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const arg = process.argv.splice(2);
const { filterFileFolder } = require('./constant.js');
const { lowerCase } = require('./util.js');

// 扫描路径
const SCAN_PATH = path.join(__dirname, '../src');
// g2plot文件路径
const G2_PATH = path.join(__dirname, '../../G2Plot/__tests__/unit/plots');

try {
  // 生成的文件名，首字母小写
  const files = fs.readdirSync(SCAN_PATH);
  const useableFiles = [];
  if (arg[0]) {
    useableFiles.push(lowerCase(arg[0]));
  } else {
    files.forEach((item) => {
      const stat = fs.statSync(`${SCAN_PATH}/${item}`);
      if (stat.isDirectory() && !filterFileFolder.includes(item)) {
        useableFiles.push(item);
      }
    });
  }

  // 暂不考虑读完写不完的问题。
  useableFiles.forEach((name) => {
    const currentPath = `${SCAN_PATH}/${name}/__tests__`;
    shell.exec(`mkdir -p ${currentPath} && cd ${currentPath}`);
    fs.readFile(`${G2_PATH}/${name}/${name}-spec.ts`, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
      }
      fs.writeFile(`${currentPath}/${name}.test.js`, data, (err) => {
        if (!err) {
          console.log(`${currentPath}/${name}.test.js 文件生成完毕`);
        }
      });
    });
  });
  console.log('测试用例拷贝完成');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
