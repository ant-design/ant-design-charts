const path = require('path');
const fs = require('fs');
const remark = require('remark');
const ejs = require('ejs');
const parseFile = require('./parse.js');

const mdprima = () => {
  return function transformer(tree) {
    recursionTree(tree);
  };
  function recursionTree(tree) {
    // 删除顶部导航
    if (tree.type === 'thematicBreak') {
      tree.type = 'html';
    }
    // 示例代码转为 React 语法
    if (tree.type === 'code' && tree.value.indexOf('new ') !== -1) {
      const fileInfo = parseFile(tree.value, 'code');
      if (fileInfo.hasError) {
        tree.value = fileInfo.code;
      } else { 
        ejs.renderFile(
          path.resolve(__dirname, '../template/doc/api.ejs'),
          {
            chartName: fileInfo.chartName,
            chartContent: fileInfo.code,
          }, // 渲染的数据key: 对应到了ejs中的index
          (err, data) => {
            if (err) {
              console.log('模版文件读取失败： ', err);
              return;
            }
            tree.value = data;
          },
        );
      }
    }

    // 解析套娃路径
    if (tree.type === 'inlineCode' && tree.value.indexOf('markdown:') !== -1) {
      const filePath = tree.value.split(':')[1];
      const docsPath = path.resolve(__dirname, '../../G2Plot', filePath);
      const processor = remark().use(mdprima).processSync(fs.readFileSync(docsPath));
      tree.type = 'html';
      tree.value = processor.contents;
    }

    if (tree.children && tree.children.length) {
      tree.children.forEach((children) => {
        recursionTree(children);
      });
    }
  }
};

module.exports = { mdprima };
