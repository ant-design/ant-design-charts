const fs = require('fs');
const path = require('path');
const { filterFileFolder } = require('./constant.js');
const { lowerCase, upperCase } = require('./util.js');

// 扫描路径
const SCAN_PATH = path.join(__dirname, '../src');
// 生成路径
const WRITE_PATH = path.join(__dirname, '../src/index.ts');

try {
  // 生成的文件名，首字母小写
  const files = fs.readdirSync(SCAN_PATH);
  const useableFiles = [];
  files.forEach((item) => {
    const stat = fs.statSync(`${SCAN_PATH}/${item}`);
    if (stat.isDirectory() && !filterFileFolder.includes(item)) {
      useableFiles.push(upperCase(item));
    }
  });
  let fileString =
    '// 此文件在构建时会自动更新，请勿手动修改，详见 package.json 中的 entry script\n';
  useableFiles.forEach((item) => {
    fileString += `import ${upperCase(item)} from './${lowerCase(item)}';\n`;
  });
  fileString += `\nexport {\n  ${useableFiles.join(',\n  ')}\n};`;
  fileString += `\n\nexport default {\n  ${useableFiles.join(',\n  ')}\n};`;

  fs.writeFileSync(WRITE_PATH, fileString);
  // eslint-disable-next-line no-console
  console.log('入口文件生成完成');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
