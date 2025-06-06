const fs = require('fs');
const path = require('path');

const PATH_BASE = path.join(__dirname, './site/docs/components');

const charts = {
  area: '面积图',
  bar: '条形图',
  column: '柱状图',
  'dual-axes': '双轴图',
  funnel: '漏斗图',
  line: '折线图',
  pie: '饼图',
  scatter: '散点图',
  radar: '雷达图',
  tiny: '迷你图',
  rose: '玫瑰图',
  waterfall: '瀑布图',
  histogram: '直方图',
  heatmap: '热力图',
  box: '箱线图',
  sankey: '桑基图',
  stock: '蜡烛图',
  bullet: '子弹图',
  gauge: '仪表盘',
  liquid: '水滴图',
  wordCloud: '词云图',
  treemap: '矩阵树图',
  'radial-bar': '玉环图',
  circlePacking: '捆绑图',
  violin: '小提琴图',
  'bidirectional-bar': '对称条形图',
  venn: '韦恩图',
  sunburst: '旭日图',
};

const existComponents = [];
const scanDirectories = (dir) => {
  const files = fs.readdirSync(dir);
  const components = {};

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (file.endsWith('.md') && stat.isFile()) {
      const component = file.replace(/.(en|zh).md/g, '');
      existComponents.push(component);
      console.log(`Processing file: ${component}`);
    }
  });

  return components;
};

scanDirectories(PATH_BASE);

Object.keys(charts).forEach((chart, index) => {
  if (!existComponents.includes(chart)) {
    const filePath = path.join(PATH_BASE, `${chart}.zh.md`);
    const zhContent = `---
category: Components
type: Plot
title: ${chart.toUpperCase()} ${charts[chart]}
link: /examples#${chart}
order: ${20 + index}
---

文档建设中...

`;

    const enContent = `---
category: Components
type: Plot
title: ${chart.toUpperCase()} ${charts[chart]}
link: /examples#${chart}
order: ${20 + index}
---

Documentation is under construction...
`;
    fs.writeFileSync(filePath, zhContent, 'utf8');
    fs.writeFileSync(filePath, enContent, 'utf8');
    console.log(`Created file: ${filePath}`);
  }
});
