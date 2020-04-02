/**
 * 自动创建文件并添加index.tsx 同时生成demo文档
 * eg: node node ./scripts/addChart.js Bar 柱状图
 */
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// 代码存放路径
const CODE_PATH = path.join(__dirname, '../src');
// 文档存放路径
const DOC_PATH = path.join(__dirname, '../docs');
// 代码模版
const templateChartPath = path.join(__dirname, '../template/chart/index.ejs');
// 文档模版
const templateDocPath = path.join(__dirname, '../template/doc/index.ejs');
const arg = process.argv.splice(2);
// 首字母小写
const lowerCase = (str) => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, (m) => m.toLowerCase());
};
try {
  // 生成的文件名，首字母小写
  const fimeName = lowerCase(arg[0]);
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

  // 生成文件
  ejs.renderFile(
    templateChartPath,
    {
      chartName: arg[0],
    }, // 渲染的数据key: 对应到了ejs中的index
    (err, data) => {
      if (err) {
        console.log('模版文件读取失败： ', err);
        return;
      }
      // 生成文件内容
      fs.writeFile(filePath, data, (error) => {
        if (error) {
          console.log('文件写入失败 ', error);
          return;
        }
        console.log(`${filePath} 生成完成`);
      });
    },
  );

  // 生成文档
  ejs.renderFile(
    templateDocPath,
    {
      chartName: arg[0],
      docTitle: docTitle,
    }, // 渲染的数据key: 对应到了ejs中的index
    (err, data) => {
      if (err) {
        console.log('模版文件读取失败： ', err);
        return;
      }
      // 生成文件内容
      fs.writeFile(docPath, data, (error) => {
        if (error) {
          console.log('文档写入失败 ', error);
          return;
        }
        console.log(`${docPath} 生成完成`);
      });
    },
  );
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
