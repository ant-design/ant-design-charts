/**
 * 根据sehema数据自动生成测试文档
 */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const request = require('request');
const ejs = require('ejs');
const { upperCase } = require('./util.js');

// 扫描路径
const SCAN_PATH = path.join(__dirname, '../src');

// 请求路径
const requestUrl =
  'https://gw.alipayobjects.com/os/bmw-prod/0ab838d5-5f1f-460a-898b-74ee57f8f6eb.json';

// fetch path
const TEMPLATEFETCHPATH = path.join(__dirname, '../template/test/local.ejs');

// local path
const TEMPLATELOCALPATH = path.join(__dirname, '../template/test/fetch.ejs');

try {
  request(requestUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const mockData = JSON.parse(body);
      mockData.forEach((item) => {
        const currentPath = `${SCAN_PATH}/${item.name}/__tests__`;
        shell.exec(`mkdir -p ${currentPath} && cd ${currentPath}`);
        // 生成文件
        ejs.renderFile(
          item.dataType === 'local' ? TEMPLATEFETCHPATH : TEMPLATELOCALPATH,
          {
            chartName: upperCase(item.name),
            fetchUrl: item.fetchUrl,
            chartData: item.data,
            chartConfig: item.config,
          }, // 渲染的数据key: 对应到了ejs中的index
          (err, data) => {
            if (err) {
              console.log('模版文件读取失败： ', err);
              return;
            }
            // 生成文件内容
            fs.writeFile(`${currentPath}/${item.name}.test.js`, data, (error) => {
              if (error) {
                console.log('文件写入失败 ', error);
                return;
              }
              console.log(`${currentPath}/${item.name}.test.js 文件生成完毕`);
            });
          },
        );
      });
    }
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
