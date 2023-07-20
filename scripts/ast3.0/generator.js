const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { parser } = require('./core');
const { codeTemplate } = require('./code-template');

/**
 * @param {string} dir 扫描目录
 * @description 递归扫描目录，调用 parser 方法解析代码，调用 codeTemplate 方法生成代码模板
 */
const scanDir = async (dir) => {
  const files = await fs.readdirSync(dir);
  files.forEach(async (file) => {
    const filePath = path.resolve(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      // 获取文件元信息
      const meta = parser(filePath);
      // 格式化代码
      const formattedCode = prettier.format(codeTemplate(meta), {
        semi: true,
        singleQuote: true,
        printWidth: 120,
        parser: 'babel',
      });
      // 示例代码生成
      fs.writeFileSync(path.resolve(__dirname, `./examples-parser/${file}`), formattedCode);
    } else {
      scanDir(filePath);
    }
  });
};

scanDir(path.resolve(__dirname, './examples'));
