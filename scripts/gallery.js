/**
 * 同一目录文件扫描
 * 扫描 g2plot examples 特定条件下所有 meta.json，自动生成 tempGallery.md
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const chalk = require('chalk');
const {
  chartNames,
  filterTitle,
  specilFilePath,
  excludeFilePath,
  specilFilePathZhNames,
} = require('./constants');
const { toHump, upperCase } = require('./util.js');

const fp = path.resolve('../', 'G2Plot/examples');
const DOC_PATH = path.join(__dirname, '../docs');
const templateGalleryPath = path.join(__dirname, '../template/doc/gallery.ejs');
const templateNavPath = path.join(__dirname, '../template/doc/nav.ejs');
const filePath = `${DOC_PATH}/demos/temp-gallery.md`;

// 存储所有的meta文件
let metaInfo = [];
const combineResult = [];

/**
 * 根据order排序并合并相同类型的charts
 */
const sortAndCombineCharts = () => {
  // 排序
  metaInfo = metaInfo.sort((pre, next) => {
    return pre.order - next.order;
  });
  // 去重
  for (let i = 0; i < metaInfo.length; i += 1) {
    if (metaInfo[i].compared) {
      continue;
    }
    for (j = i + 1; j < metaInfo.length; j += 1) {
      const { compared } = metaInfo[j];
      if (compared) {
        continue;
      }
      if (metaInfo[i].chart === metaInfo[j].chart) {
        metaInfo[i].demos = metaInfo[i].demos.concat(metaInfo[j].demos);
        metaInfo[j].compared = true;
      }
    }
  }
};

// 将相同 levelName 的聚集到一一起，并插入 title
const combineSpecialFile = () => {
  const tempArr = [];
  metaInfo.forEach((item) => {
    if (!item.compared) {
      tempArr.push({
        ...item,
        combined: false,
      });
    }
  });
  for (let i = 0; i < tempArr.length; i += 1) {
    if (tempArr[i].combined) {
      continue;
    }
    let isFirst = true;
    combineResult.push(tempArr[i]);
    if (!tempArr[i].levelName) {
      continue;
    }
    for (j = i + 1; j < tempArr.length; j += 1) {
      const item = tempArr[j];
      if (item.combined) {
        continue;
      }
      if (tempArr[i].levelName === item.levelName) {
        if (isFirst) {
          const last = combineResult.pop();
          combineResult.push(
            {
              onlyTitle: specilFilePathZhNames[item.levelName],
            },
            last,
          );
        }
        combineResult.push(item);
        isFirst = false;
        tempArr[j].combined = true;
      }
    }
  }
};

/**
 * 文件扫描，获取所有meta.json
 * @param {foldPath} string 扫描路径
 */
const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      const director = path.join(foldPath + '/', fileName);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${fileName}` : fileName);
      }
      if (stats.isFile() && fileName === 'meta.json') {
        const file = fs.readFileSync(director, 'utf-8');
        const obj = JSON.parse(file);
        const fileInfo = dir.split('.');
        let deepLevel = false;
        let levelName = '';
        if (excludeFilePath.includes(fileInfo[0])) {
          return;
        }
        if (specilFilePath.includes(fileInfo[0])) {
          levelName = fileInfo.shift();
          deepLevel = true;
        }
        const chart = upperCase(toHump(fileInfo[0]));
        const order = Object.keys(chartNames).findIndex((item) => item === chart);
        let chartName = obj.demos[0].title.zh;
        fileInfo.splice(fileInfo.length - 1, 1);
        obj.chart = chart;
        obj.compared = false;
        obj.order = order >= 0 ? order : 99;
        obj.path = fileInfo.join('#');
        filterTitle.forEach((item) => {
          chartName = chartName.replace(item, '');
        });
        obj.chartName = chartName;
        obj.levelName = levelName;
        obj.isDeepLevel = deepLevel;

        metaInfo.push(obj);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * 添加导航信息
 */
const writeNav = () => {
  return new Promise((resolve, reject) => {
    try {
      ejs.renderFile(
        templateNavPath,
        {
          menuTitle: '所有图表',
          navTitle: '图表示例',
        }, // 渲染的数据key: 对应到了ejs中的index
        (err, data) => {
          if (err) {
            console.log('模版文件读取失败： ', err);
            return;
          }
          // 生成文件内容
          fs.writeFile(filePath, data, (err) => {
            if (err) {
              console.log(err);
              reject(err);
            }
            resolve();
          });
        },
      );
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * 追加文件
 */
const writeFile = async () => {
  await writeNav();
  combineResult.forEach((item) => {
    // 生成文件
    ejs.renderFile(
      templateGalleryPath,
      {
        info: item,
      }, // 渲染的数据key: 对应到了ejs中的index
      (err, data) => {
        if (err) {
          console.log('模版文件读取失败： ', err);
          return;
        }
        // 生成文件内容
        fs.appendFileSync(filePath, data);
      },
    );
  });
  console.log(chalk.green('临时文件 temp-gallery.md 生成完成，请按需使用'));
};

const start = () => {
  scanFiles(fp);
  sortAndCombineCharts();
  combineSpecialFile();
  writeFile();
};

start();
