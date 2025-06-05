const fs = require('fs');
const path = require('path');
const { processFile } = require('./process-file');

const paths = ['G2/site/docs/manual/component'];

/**
 * @param {string} dir 扫描目录
 * @param {string[]} depth 路径深度数组
 */
const scanDir = async (dir, depth = []) => {
  try {
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      const filePath = path.resolve(dir, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile() && file.endsWith('.md')) {
        await processFile(filePath, file, depth);
      } else if (stats.isDirectory()) {
        await scanDir(filePath, [...depth, file]);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
};

// scanDir(path.resolve(__dirname, './tests'));

const filePath = process.argv[2];

if (filePath) {
  const file = filePath.split('/').pop();
  processFile(filePath, file, []);
} else {
  paths.forEach((sourceDir) => {
    const sourcePath = path.resolve(__dirname, relativePath, sourceDir);
    const depth = sourceDir.split('/').pop();
    scanDir(sourcePath, [depth]);
  });
}
