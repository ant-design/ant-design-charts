import { memoize } from '../lodash';
import { arr2rgb } from './arr2rgb';

const RGB_REG = /rgba?\(([\s.,0-9]+)\)/;

/**
 * 创建辅助 tag 取颜色
 * @returns
 */
function getTmp(): HTMLElement {
  let i = document.getElementById('antv-web-colour-picker');
  if (i) {
    return i;
  }
  i = document.createElement('i');
  i.id = 'antv-web-colour-picker';
  i.title = 'Web Colour Picker';
  i.style.display = 'none';
  document.body.appendChild(i);
  return i;
}

/**
 * 将颜色转换到 rgb 的格式
 * @param {color} color 颜色
 * @return 将颜色转换到 '#ffffff' 的格式
 */
function toRGBString(color: string): string {
  // 如果已经是 rgb的格式
  if (color[0] === '#' && color.length === 7) {
    return color;
  }

  const iEl = getTmp();

  iEl.style.color = color;

  let rst = document.defaultView.getComputedStyle(iEl, '').getPropertyValue('color');
  const matches = RGB_REG.exec(rst) as string[];
  const cArray: number[] = matches[1].split(/\s*,\s*/).map((s) => Number(s));

  rst = arr2rgb(cArray);

  return rst;
}

/**
 * export with memoize.
 * @param color
 * @returns
 */
export const toRGB = memoize(toRGBString, (color) => color, 256);
