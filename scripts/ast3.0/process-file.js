const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { processOptions } = require('./core');
const { flow } = require('./flow');

const RELATIVE_PATH = '../../..';
const TARGET_DIR = 'ant-design-charts/site/docs/options/plots';

const MAX_SPACE = 2;

// 处理文件
const processFile = async (filePath, file, depth) => {
  const contents = await fs.promises.readFile(filePath, 'utf-8');
  const processedContents = processOptions(contents.split('\n'));
  const lines = processedContents.split('\n');
  const transformedContents = [];
  for (const line of lines) {
    if (line.startsWith('<Playground ') || line.startsWith('尝试一下：')) continue;
    flowLine = flow(line);
    if (flowLine === 'Delete this line.') continue;
    transformedContents.push(flowLine);
  }

  const recursivePath = path.resolve(__dirname, RELATIVE_PATH, TARGET_DIR, ...depth);
  try {
    await fs.promises.mkdir(recursivePath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }

  // 遍历 transformedContents ,做多保留连续的 2 行空行
  const newTransformedContents = [];
  let emptyLineCount = 0;
  for (const line of transformedContents) {
    if (line.trim() === '') {
      emptyLineCount++;
      if (emptyLineCount <= MAX_SPACE) {
        newTransformedContents.push(line);
      }
    } else {
      emptyLineCount = 0;
      newTransformedContents.push(line);
    }
  }

  // 示例代码生成
  await fs.promises.writeFile(path.resolve(recursivePath, file), newTransformedContents.join('\n'));
  console.log(chalk.green(`File ${file} has been processed and saved to ${recursivePath}`));
};

module.exports = {
  processFile,
};
