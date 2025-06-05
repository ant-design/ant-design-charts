function template(content, staticCode = '') {
  const regex = /["|']?type["|']?:\s+["|'](\S+)["|'],/;
  const match = content.match(regex);
  const chartMapping = {
    interval: 'Column',
    line: 'Line',
    area: 'Area',
  };

  if (!match) return content;
  const isPie = /["|']?type["|']?:\s+["|']theta["|'],/.test(content);
  const isScatter = /["|']?type["|']?:\s+["|']point["|'],/.test(content);
  let chart = chartMapping[match[1]] || 'Column';
  if (isScatter) {
    chart = 'Scatter';
  }
  if (isPie) {
    chart = 'Pie';
  }
  // 提取配置：删除 type 行（保留逗号之前），
  const lines = content.split('\n');
  const typeLineIndex = lines.findIndex((line) => regex.test(line));
  const baseIndent = '  ';
  lines.splice(typeLineIndex, 1); // 删除 type 行
  const configBody = lines.map((line) => line).join('\n');

  // 对 staticCode 每一行做缩进处理
  const indentedStaticCode = staticCode
    .split('\n')
    .map((line) => (line ? baseIndent + line : ''))
    .join('\n');

  const indentedConfig = configBody
    .split('\n')
    .map((line, index) => {
      if (index === 0) return line;
      return line ? baseIndent + line : '';
    })
    .join('\n');
  const replacedSign = indentedConfig.replace(/["|']?\-FN\-["|']?/g, '');

  return `import { ${chart} } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
${indentedStaticCode ? indentedStaticCode + '\n' : ''}
${baseIndent}const config =${replacedSign};

${baseIndent}return <${chart} {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);`;
}

module.exports = { template };
