/**
 * 一键同步 L7Plot API 文档
 * eg:
 * -全量同步：`node scripts/docs/l7plot.mjs`
 *
 * 该文件下引用的包和主包会有冲突，使用时在强制安装
 * ```zx
 *   npm install unified to-vfile remark-parse remark-frontmatter remark-stringify --force
 * ```
 */
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import { readSync } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import mdParse from '../ast/md-parse-l7plot.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiWriteBasePath = '../../packages/site/docs';
const arg = process.argv.splice(2);
const docsPath = arg[1] || 'website/docs';
const plot = arg[0] || 'L7Plot';
const fp = resolve('../', `${plot}/${docsPath}`);

const excludePath = ['manual'];

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
      if (_path.indexOf('site/docs/map-') === -1) {
        continue;
      }
      try {
        // fsPromise 不再支持 exists，没想到好方法
        await fs.mkdir(_path);
      } catch (err) {
        // await fs.mkdir(_path);
      }
    }
  }
};

const hasSameEl = (source, target) => {
  return new Set(source.concat(target)).size !== source.length + target.length;
};

const apiGenerator = async (apiPath, filename) => {
  // 文件路径，上层自动扫描
  const res = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(mdParse, { extname: '.md' })
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .processSync(readSync(apiPath));
  let writePath = join(__dirname, apiWriteBasePath, apiPath.split(docsPath)[1]);
  // 统一加上 map 前缀
  writePath = writePath.replace(/docs\//, 'docs/map-');
  await checkDirExist(writePath.split(filename)[0]);
  await fs.writeFile(
    writePath,
    res
      .toString()
      .replace(/docs\//g, 'docs/map-')
      .replace(/@antv\/l7plot/g, '@ant-design/charts'),
  );
};

/**
 * 文件扫描，获取所有 *.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanL7PlotFiles = async (foldPath, dir) => {
  console.log('文档生成中....');
  try {
    const files = await fs.readdir(foldPath);
    files.forEach(async (filename) => {
      const director = join(foldPath + '/', filename);
      const stats = await fs.stat(director);
      if (stats.isDirectory()) {
        scanL7PlotFiles(director, dir ? `${dir}.${filename}` : filename);
      }
      if (stats.isFile() && filename.endsWith('.md') && !hasSameEl(excludePath, dir.split('.').concat(filename))) {
        const apiPath = resolve(__dirname, `../../../${plot}/${docsPath}`, dir.split('.').join('/'), filename);
        apiGenerator(apiPath, filename);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanL7PlotFiles(fp);
