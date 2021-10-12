/**
 * 一键同步 G2Plot API 文档
 * eg:
 * -全量同步：`node scripts/docs/api.js G2Plot`
 */
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import { readSync } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import mdParse from '../ast/mdParse.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiWriteBasePath = '../../packages/site/docs';
const arg = process.argv.splice(2);
const docsPath = arg[1] || 'docs';
const plot = arg[0] || 'G2Plot';
const fp = resolve('../', `${plot}/${docsPath}`);

const apiGenerator = async (apiPath, filename) => {
  // 文件路径，上层自动扫描
  const res = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(mdParse, { extname: '.md' })
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .processSync(readSync(apiPath));
  const writePath = join(__dirname, apiWriteBasePath, apiPath.split(docsPath)[1]);
  await checkDirExist(writePath.split(filename)[0]);
  await fs.writeFile(writePath, res.toString());
};

// 文件路径是否存在，不存在时直接创建
const checkDirExist = async (folderpath) => {
  const pathArr = folderpath.split('/');
  if (!pathArr.includes('site')) {
    return;
  }
  let _path = '';
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      _path += `/${pathArr[i]}`;
      try {
        // fsPromise 不再支持 exists，没想到好方法
        await fs.mkdir(_path);
      } catch (err) {
        // await fs.mkdir(_path);
      }
    }
  }
};

/**
 * 文件扫描，获取所有 *.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanFiles = async (foldPath, dir) => {
  console.log('文档生成中....');
  try {
    const files = await fs.readdir(foldPath);
    files.forEach(async (filename) => {
      const director = join(foldPath + '/', filename);
      const stats = await fs.stat(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${filename}` : filename);
      }
      if (stats.isFile() && filename.endsWith('.md')) {
        const apiPath = resolve(__dirname, `../../../${plot}/${docsPath}`, dir.split('.').join('/'), filename);
        apiGenerator(apiPath, filename);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
