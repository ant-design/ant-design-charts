/**
 * 自动创建文件并添加index.tsx 同时生成demo文档
 * eg: node node ./scripts/addChart.js Bar 柱状图
 */
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

// 代码存放路径
const CODE_PATH = path.join(__dirname, '../src');
// 文档存放路径
const DOC_PATH = path.join(__dirname, '../docs');
// 代码模版
const templateChartPath = path.join(__dirname, '../template/chart/index.txt');
// 文档模版
const templateDocPath = path.join(__dirname, '../template/doc/index.txt');
const arg = process.argv.splice(2);
// 首字母小写
const replaceReg = str => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, m => m.toLowerCase());
};
try {
  // 生成的文件名，首字母小写
  const fimeName = replaceReg(arg[0]);
  // 文档名
  const docTitle = arg[1];
  // 文件夹路径
  const fileFolderPath = `${CODE_PATH}/${fimeName}`;
  // 文件路径
  const filePath = `${CODE_PATH}/${fimeName}/index.tsx`;
  // 文档路径
  const docPath = `${DOC_PATH}/${fimeName}.md`;
  shell.exec(`mkdir -p ${fileFolderPath}`);
  shell.exec(`cd ${fileFolderPath} && touch index.tsx`);
  shell.exec(`cd ${DOC_PATH} && touch ${fimeName}.md`);
  // 同步读写，防止读完写不下
  const pipe = (source, target, name, title) => {
    const rs = fs.createReadStream(source, { highWaterMark: 1, encoding: 'utf8' });
    const ws = fs.createWriteStream(target, { highWaterMark: 1 });

    // 可读流到可写流,异步操作，可以保证内存不会被淹没，读一点，写一点
    rs.on('data', chunk => {
      // chunk是buffer类型
      const stringChunk = chunk.toString('UTF-8');
      let content = name && stringChunk === name ? arg[0] : stringChunk;
      if (title && content === title) {
        content = docTitle;
      }
      if (ws.write(content) === false) {
        rs.pause();
      }
    });

    ws.on('drain', () => {
      rs.resume();
    });

    rs.on('end', () => {
      // eslint-disable-next-line no-console
      console.log(title ? `${docPath} 生成完成` : `${filePath} 生成完成`);
      ws.end();
    });
  };
  // 生成文件内容
  pipe(templateChartPath, filePath, '$');
  // 生成文档
  pipe(templateDocPath, docPath, '$', 'β');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
