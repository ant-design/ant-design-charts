/* eslint-disable no-console */
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const SOURCE_PATH = path.join(__dirname, '../src');
// const TEMPLATE_PATH = path.join(__dirname, './tempate.txt');
const arg = process.argv.splice(2);

const pipe = (source, target) => {
  const rs = fs.createReadStream(source, { highWaterMark: 1 });
  const ws = fs.createWriteStream(target, { highWaterMark: 1 });

  // 可读流到可写流,异步操作，可以保证内存不会被淹没，读一点，写一点

  // 如果想看文件类容，使用readFile

  rs.on('data', chunk => {
    console.log(chunk.toString('UTF-8'));

    // chunk是buffer类型
    if (ws.write(chunk) === false) {
      // 写不下，停止读取
      rs.pause();
    }
  });

  ws.on('drain', () => {
    // 恢复读取
    rs.resume();
  });

  rs.on('end', () => {
    ws.end();
  });
};

try {
  const fileFolderPath = `${SOURCE_PATH}/${arg[0]}`;
  const filePath = `${SOURCE_PATH}/${arg[0]}/index.tsx`;
  const templateChartPath = path.join(__dirname, '../template/chart/index.txt');
  shell.exec(`mkdir -p ${fileFolderPath}`);
  shell.exec(`cd ${fileFolderPath} && touch index.tsx`);
  // fs.readFile(templateChartPath, (err, data) => {});
  pipe(templateChartPath, filePath);
  // fs.writeFileSync(filePath, "import React from 'react'");

  // eslint-disable-next-line global-require
  // const { version } = require(path.join('../', 'package.json'));
  // if (version.includes('-rc.') || version.includes('-beta.') || version.includes('-alpha.')) {
  //   shell.exec('tnpm publish --tag next');
  // } else {
  //   shell.exec('tnpm publish');
  // }
  // shell.exec('git add .');
  // shell.exec(`git commit -m 'publish version:${version}'`);
  // shell.exec('git push');
} catch (err) {
  console.log(err);
}
