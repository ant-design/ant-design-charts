const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { parser } = require('./core');
const { flow } = require('./flow');

const relativePath = '../../..';
const TARGET_DIR = 'ant-design-charts/site/docs/options/plots';
const excludeFolder = ['core/mark', 'core/chart', 'core/transform', 'core/coordinate'];
const excludeFiles = ['encode', 'view'];
const paths = ['G2/site/docs/manual/core'];
const SKIP_LINES = ['<Playground ', '尝试一下：'];
const DELETE_BLOCK = ['也可以配置在 View 层级'];

const MAX_SPACE = 2;

/**
 * @param {string} dir 扫描目录
 * @param {string[]} depth 路径深度数组
 * @description 递归扫描目录，调用 parser 方法解析代码，调用 docTemplate 方法生成代码模板
 */
const scanDir = async (dir, depth = [], targetDir = TARGET_DIR) => {
  if (excludeFolder.some((item) => dir.includes(item))) {
    return;
  }
  try {
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      const filePath = path.resolve(dir, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile() && file.endsWith('.md') && !excludeFiles.some((item) => file.includes(item))) {
        const contents = await fs.promises.readFile(filePath, 'utf-8');
        const lines = contents.split('\n');
        const transformedContents = [];
        let blockCode = [];
        let inCodeBlock = false;
        let deleteBlock = false;
        for (const line of lines) {
          if (SKIP_LINES.some((skip) => line.startsWith(skip))) continue;
          // 存在删除标识时，直到找到下一个代码块结束标识
          if (DELETE_BLOCK.some((block) => line.includes(block))) {
            deleteBlock = true;
            continue;
          }
          if (inCodeBlock) {
            blockCode.push(line);
          }
          if (!inCodeBlock && /^```[ts|js|javascript]/.test(line.trim())) {
            inCodeBlock = true;
            blockCode.push(line);
          } else if (inCodeBlock && line.startsWith('```')) {
            if (deleteBlock) {
              deleteBlock = false;
              blockCode = [];
              inCodeBlock = false;
              continue;
            }
            const processCode = parser(blockCode);
            blockCode = [];
            inCodeBlock = false;
            transformedContents.push(processCode);
          } else if (!inCodeBlock) {
            transformedContents.push(flow(line));
          }
        }

        const recursivePath = path.resolve(__dirname, relativePath, targetDir, ...depth);
        try {
          await fs.promises.mkdir(recursivePath, { recursive: true });
        } catch (err) {
          if (err.code !== 'EEXIST') {
            throw err;
          }
        }

        // 遍历 transformedContents ,最多保留连续的 2 行空行
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
      } else if (stats.isDirectory()) {
        await scanDir(filePath, [...depth, file]);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
};

scanDir(path.resolve(__dirname, './tests'), [], './ant-design-charts');

// paths.forEach((sourceDir) => {
//   const sourcePath = path.resolve(__dirname, relativePath, sourceDir);
//   const depth = sourceDir.split('/').pop();
//   scanDir(sourcePath, [depth]);
// });
