/**
 * 复制
 */
const fs = require('fs');
const path = require('path');
const fp = path.resolve('./', `docs/demos`);

const scanFiles = (foldPath) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      if (fileName.indexOf('zh-CN') === -1) {
        fs.access(
          `${foldPath}/${fileName.split('.')[0]}.zh-CN.md`,
          fs.constants.F_OK,
          function (err) {
            // 文件不存在
            if (err) {
              fs.writeFileSync(
                `${foldPath}/${fileName.split('.')[0]}.zh-CN.md`,
                fs.readFileSync(`${foldPath}/${fileName}`),
              );
            }
          },
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
