import { resolve, dirname } from 'path';
import { readSync } from 'to-vfile';
import { fileURLToPath } from 'url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import parseFile from './parse.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const setCode = (fileInfo) => {
  const { chartName, plotName, utilName, dataSet, code } = fileInfo;
  return `import React, { useState, useEffect }from 'react';
  import ReactDOM from 'react-dom';
  import {${plotName}} from '@ant-design/charts';
  ${utilName ? `import { ${utilName} } from '@antv/util';` : ''}
  ${dataSet ? `import { ${dataSet} } from '@antv/data-set';` : ''}
  
  const Demo${chartName} = () => {
    ${code.toString()}
    return <<%= chartName %> {...config} />;
  };
  
  ReactDOM.render(<Demo${chartName} />, document.getElementById('container'));`;
};

const mdParse = () => {
  return function transformer(tree) {
    recursionTree(tree);
  };
  function recursionTree(tree) {
    // 删除顶部导航
    if (tree.type === 'html') {
      tree.value = tree.value.replace(/<Playground path="(\S+)">/g, (_) => {
        return _.replace(/\.ts/, '.js');
      });
    }

    // 示例代码转为 React 语法
    if (tree.type === 'code' && tree.value.indexOf('new ') !== -1) {
      const fileInfo = parseFile(tree.value, 'code');
      const { chartName, hasError } = fileInfo;
      if (chartName && !hasError) {
        tree.value = setCode(fileInfo);
      } else {
        tree.value = '';
      }
    }

    // 解析套娃路径
    if (tree.type === 'inlineCode' && tree.value.indexOf('markdown:') !== -1) {
      const filePath = tree.value.split(':')[1];
      const docsPath = resolve(__dirname, '../../../G2Plot', filePath);
      const res = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(mdParse, { extname: '.md' })
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .processSync(readSync(docsPath));
      tree.type = 'html';
      tree.value = res.toString();
    }

    if (tree.children && tree.children.length) {
      tree.children.forEach((children) => {
        recursionTree(children);
      });
    }
  }
};

export default mdParse;
