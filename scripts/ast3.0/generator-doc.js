const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const chalk = require('chalk');
const { parser } = require('./core');
const { codeTemplate } = require('./code-template');
const { flow } = require('./flow');

const relativePath = '../../..';
const targetDir = 'ant-design-charts/site/docs/options/plots';
const paths = ['G2/site/docs/manual/core', 'G2Plot/site/docs/manual/component'];

/**
 * @param {string} dir 扫描目录
 * @param {string[]} depth 路径深度数组
 * @description 递归扫描目录，调用 parser 方法解析代码，调用 codeTemplate 方法生成代码模板
 */
const scanDir = async (dir, depth = []) => {
  try {
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      const filePath = path.resolve(dir, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile() && file.endsWith('.md')) {
        const contents = await fs.promises.readFile(filePath, 'utf-8');
        const transformedContents = [];
        let blockCode = [];
        const lines = contents.split('\n');
        let isCodeBlock = false;
        let codeType = '';
        for (const line of lines) {
          if (isCodeBlock && !line.startsWith('```')) {
            blockCode.push(line);
          }
          if (line.startsWith('```js') || line.startsWith('```ts')) {
            codeType = line.split(' ')[0].replace(/`/g, '');
            isCodeBlock = true;
          } else if (isCodeBlock && line.startsWith('```')) {
            isCodeBlock = false;
            const code = blockCode.join('\n');
            const meta = parser(code, 'code');
            let formattedCode = '';
            if (meta.success) {
              formattedCode = prettier.format(codeTemplate(meta), {
                semi: true,
                singleQuote: true,
                printWidth: 120,
                parser: 'babel',
              });
            } else {
              formattedCode = meta.code;
            }
            blockCode = [];
            transformedContents.push(`\`\`\`${codeType}\n${formattedCode}\n\`\`\``);
          } else if (!isCodeBlock) {
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

        // 示例代码生成
        await fs.promises.writeFile(path.resolve(recursivePath, file), transformedContents.join('\n'));
        console.log(chalk.green(`File ${file} has been processed and saved to ${recursivePath}`));
      } else if (stats.isDirectory()) {
        await scanDir(filePath, [...depth, file]);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
};

// scanDir(path.resolve(__dirname, './tests'));

paths.forEach((sourceDir) => {
  const sourcePath = path.resolve(__dirname, relativePath, sourceDir);
  const depth = sourceDir.split('/').pop();
  scanDir(sourcePath, [depth]);
});
