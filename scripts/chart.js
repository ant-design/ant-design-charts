const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { chartNames } = require('./constants.js');
const { lowerCase } = require('./util.js');
const templateChartPath = path.join(__dirname, '../template/chart/index.ejs');

// 生成路径
const WRITE_PATH = path.join(__dirname, '../src');

try {
  Object.keys(chartNames).forEach((chartName) => {
    ejs.renderFile(
      templateChartPath,
      {
        chartName,
      },
      (err, data) => {
        if (err) {
          console.log('模版文件读取失败： ', err);
          return;
        }
        // 生成文件内容
        fs.writeFile(path.join(WRITE_PATH, lowerCase(chartName), 'index.tsx'), data, (err) => {
          if (err) {
            console.log(err);
          }
        });
      },
    );
  });
  // eslint-disable-next-line no-console
  console.log('chart文件生成完成');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
