/**
 * 扫描指定目录下的所有demo文件，生成demo文档
 * eg: node scripts/demo.js Area
 */

const fs = require('fs');
const shell = require('shelljs');
const path = require('path');
const ejs = require('ejs');
const recast = require('recast');
const {
  identifier: id,
  expressionStatement,
  memberExpression,
  assignmentExpression,
  arrowFunctionExpression,
} = recast.types.builders;
const { chartOrder, filterTitle } = require('./constant');
const { toHump, upperCase, lowerCase, toLine } = require('./util.js');

const arg = process.argv.splice(2);
const lowerCaseFileName = lowerCase(arg[0]);
const toLineName = toLine(lowerCaseFileName);
const fp = path.resolve('../', `G2plot/examples/${toLineName}`);
const DOC_PATH = path.join(__dirname, '../docs');
const templateDemoPath = path.join(__dirname, '../template/doc/demo.ejs');
const templateTitlePath = path.join(__dirname, '../template/doc/title.ejs');
const filePath = `${DOC_PATH}/demos/${lowerCaseFileName}.md`;

/**
 * 更新g2plot
 */
const updateG2plot = () => {
  return new Promise((resolve, reject) => {
    try {
      shell.exec('cd ~/publicWorkspaces/G2Plot && git checkout master && git pull');
      console.log('updating g2plot...');
      setTimeout(() => {
        resolve('updated');
      }, 0);
    } catch (err) {
      reject(err);
    }
  });
};
// 存储所有的meta文件
let result = [];

/**
 * 根据length排序
 */
const sortAndCombineCharts = () => {
  // 排序
  result = result.sort((pre, next) => {
    return pre.path.length - next.path.length;
  });
};

/**
 * 文件扫描，获取所有.js文件路径
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
      if (stats.isFile() && /.js$/.test(fileName) && dir.indexOf('demo') !== -1) {
        const fileInfo = dir.split('.');
        let chartName = arg[0];
        if (fileInfo[0] !== 'basic') {
          chartName = toHump(upperCase(fileInfo[0] + arg[0]));
        }
        result.push({
          path: director,
          chartName,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * 添加导航信息
 */
const writeTitle = () => {
  return new Promise((resolve, reject) => {
    try {
      let order = chartOrder.findIndex((item) => item === arg[0]);
      if (order < 0) {
        console.warn(`${arg[0]} 图表不在scripts/constants chartOrder中，请先配置`);
      }
      ejs.renderFile(
        templateTitlePath,
        {
          chartTitle: '面积图',
          order: chartOrder.length - order,
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
  await writeTitle();
  const oneArr = result[0];
  [oneArr].forEach((item) => {
    const fileInfo = fs.readFileSync(item.path, 'utf-8');
    const ast = recast.parse(fileInfo);
    recast.run(function (ast, printSource) {
      recast.visit(ast, {
        visitExpressionStatement: function (_path) {
          const node = _path.node;
          printSource(node);
          console.log(node);
          this.traverse(_path);
        },
      });
    });
    // 生成文件
    ejs.renderFile(
      templateDemoPath,
      {
        chartName: arg[0],
        chartTitle: '面积图',
        chartContent: recast.prettyPrint(ast, { tabWidth: 2 }).code,
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
  console.log(`${filePath} 生成完成`);
};

const start = async () => {
  const update = await updateG2plot();
  if (update === 'updated') {
    scanFiles(fp);
    sortAndCombineCharts();
    writeFile();
  } else {
    console.log(update);
  }
};

start();
