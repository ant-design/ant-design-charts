const regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
const regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
const regexColorStop = /[\d.]+:(#[^\s]+|[^)]+\))/gi;

function isGradientColor(val) {
  return /^[r,R,L,l]{1}[\s]*\(/.test(val);
}

/**
 * 将 g 渐变转换为 css 渐变
 */
export function toCSSGradient(gradientColor) {
  if (isGradientColor(gradientColor)) {
    let cssColor;
    let steps;
    if (gradientColor[0] === 'l') {
      // 线性渐变
      const arr = regexLG.exec(gradientColor);
      const angle = +arr[1] + 90; // css 和 g 的渐变起始角度不同
      steps = arr[2];

      cssColor = `linear-gradient(${angle}deg, `;
    } else if (gradientColor[0] === 'r') {
      // 径向渐变
      cssColor = 'radial-gradient(';
      const arr = regexRG.exec(gradientColor);
      steps = arr[4];
    }

    const colorStops: string[] = steps.match(regexColorStop);

    colorStops.forEach((item: string, index: number) => {
      const itemArr = item.split(':');
      cssColor += `${itemArr[1]} ${Number(itemArr[0]) * 100}%`;
      if (index !== colorStops.length - 1) {
        cssColor += ', ';
      }
    });

    cssColor += ')';

    return cssColor;
  }

  return gradientColor;
}
