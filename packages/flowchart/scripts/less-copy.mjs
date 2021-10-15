/**
 * 同步 *.less 文件到对应的 es | lib 目录
 */
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import { dirname, resolve, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, '../src');

const copyLess = async (lessPath) => {
  const writeEsPath = lessPath.replace(/\/src\//, '/es/');
  const writeLibPath = lessPath.replace(/\/src\//, '/lib/');
  const content = await fs.readFile(lessPath, {
    encoding: 'utf-8',
  });
  fs.writeFile(writeEsPath, content);
  fs.writeFile(writeLibPath, content);
};

/**
 * 文件扫描，获取所有 *.less 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanDir = async (foldPath, dir) => {
  try {
    const files = await fs.readdir(foldPath);
    files.forEach(async (filename) => {
      const director = join(foldPath + '/', filename);
      const stats = await fs.stat(director);
      if (stats.isDirectory()) {
        scanDir(director, dir ? `${dir}.${filename}` : filename);
      }
      if (stats.isFile() && filename.endsWith('.less')) {
        const lessPath = resolve(__dirname, '../src', dir.split('.').join('/'), filename);
        copyLess(lessPath);
      }
    });
  } catch (err) {
    console.info(err);
  }
};

scanDir(sourcePath);
