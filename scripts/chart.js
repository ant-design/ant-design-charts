const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { chartNames } = require('./constants');
const { lowerCase, checkDirExist } = require('./util.js');
const templateChart = path.join(__dirname, '../template/chart/index.ejs');

// 生成路径
const WRITE_PATH = path.join(__dirname, '../src/plots');
const name = process.argv.splice(2)?.[0];

const render = (chartName) => {
  try {
    ejs.renderFile(
      templateChart,
      {
        chartName,
      },
      (err, data) => {
        if (err) {
          console.log('模版文件读取失败： ', err);
          return;
        }
        const writerPath = path.join(WRITE_PATH, lowerCase(chartName));
        checkDirExist(writerPath);
        // 生成文件内容
        fs.writeFile(path.join(writerPath, 'index.tsx'), data, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${chartName} 文件生成完成`);
          }
        });
      },
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

if (name) {
  render(name);
} else {
  Object.keys(chartNames).forEach((chartName) => {
    render(chartName);
  });
}
