/**
 * demo 不再维护中英文，成本太高， 直接复制中文 demo。
 */
const fs = require('fs');
const path = require('path');
const fp = path.resolve('./', `docs/demos`);
const { chartNames } = require('./constants');
const { toHump, upperCase } = require('./util');

const scanFiles = (foldPath) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      if (
        fileName.indexOf('zh-CN') !== -1 &&
        chartNames[upperCase(toHump(fileName.split('.')[0]))]
      ) {
        fs.access(`${foldPath}/${fileName}`, fs.constants.F_OK, function (err) {
          if (!err) {
            fs.writeFileSync(
              `${foldPath}/${fileName.split('.')[0]}.md`,
              fs.readFileSync(`${foldPath}/${fileName}`),
            );
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
