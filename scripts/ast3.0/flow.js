// 将文档中的 G2 替换为 Ant Design Charts
const replacePackageName = (line) => {
  const packageName = line.match(/(?<=\@)[^/]+/g);
  // 如果匹配到 @antv/g2 则替换为 @ant-design/charts
  if (packageName && packageName[0] === 'antv/g2') {
    return line.replace(/(?<=\@)[^/]+/g, '@ant-design/charts');
  }
  // 如果匹配到 G2，则替换为 Ant Design Charts
  if (line.includes('G2')) {
    return line.replace(/G2/g, 'Ant Design Charts');
  }
  return line;
};

// 跳转路径替换
const replacePath = (line) => {
  const pathMaps = {
    '/manual/core': '/options/plots/core',
    '/manual/component': '/options/plots/component',
    '@antv/g2': '@ant-design/charts',
  };
  Object.keys(pathMaps).forEach((key) => {
    if (line.includes(key)) {
      line = line.replace(key, pathMaps[key]);
    }
  });
  return line;
};

const flow = (line) => {
  const methods = [replacePackageName, replacePath];
  let transformedLine = line;
  methods.forEach((method) => {
    transformedLine = method(transformedLine);
  });
  return transformedLine;
};

module.exports = { flow };
