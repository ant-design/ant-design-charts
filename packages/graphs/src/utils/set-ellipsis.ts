/** 超出省略，不够精准 */
export const setEllipsis = (text: string, fontStyle: { [key: string]: unknown }, contentWidth: number = 120) => {
  const { fontSize = 12, fontWeight = 'normal', fontFamily = 'Arial, sans-serif' } = fontStyle;
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px ${fontWeight} ${fontFamily}`;
  let currentText = text;
  let flag = false;
  ctx.fillText(currentText, 0, 0);
  for (let i = text.length - 1; i > 0; i--) {
    const { width } = ctx.measureText(currentText);
    if (width <= contentWidth) {
      if (!flag) return currentText;
      // 中文结尾删除最后一位、非中文结尾删除最后2位
      const reg = /[\u4e00-\u9fa5]/;
      const lastStr = currentText.substring(currentText.length - 1, currentText.length);
      return currentText.substring(0, currentText.length - (reg.test(lastStr) ? 1 : 2)) + '...';
    } else {
      flag = true;
      currentText = currentText.substring(0, currentText.length - 1);
    }
  }
};
