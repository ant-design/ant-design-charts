const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { filterFileFolder } = require('./constants.js');
const { upperCase, toLine } = require('./util.js');

// 扫描路径
const SCAN_PATH = path.join(__dirname, '../src');
// 生成路径
const WRITE_PATH = path.join(__dirname, '../tests/plots');
// 测试模板
const testTemplatePath = path.join(__dirname, '../template/test/index.ejs');
    
try {
  // 生成的文件名，首字母小写
  const files = fs.readdirSync(SCAN_PATH);
  const useableFiles = [];
  files.forEach((item) => {
    const stat = fs.statSync(`${SCAN_PATH}/${item}`);
    if (stat.isDirectory() && !filterFileFolder.includes(item)) {
      useableFiles.push({
        chartName: upperCase(item),
        chartPath: item
      });
    }
  });
  useableFiles.forEach((item) => {
    ejs.renderFile(
      testTemplatePath,
      {
       ...item
      }, // 渲染的数据key: 对应到了ejs中的index
      (err, data) => {
        if (err) {
          console.log('模版文件读取失败： ', err);
          return;
        }
        // 生成文件内容
        fs.writeFile(`${WRITE_PATH}/${toLine(item.chartPath)}.test.js` , data, (err) => {
          if (err) {
            console.log(err);
            reject(err);
          }
        });
      },
    );
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
