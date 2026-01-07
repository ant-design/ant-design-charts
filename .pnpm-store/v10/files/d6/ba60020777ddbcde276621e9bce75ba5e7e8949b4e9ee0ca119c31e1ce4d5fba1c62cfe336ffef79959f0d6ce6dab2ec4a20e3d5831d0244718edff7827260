import _typeof from "@babel/runtime/helpers/esm/typeof";
/** 获取展示符号 */
export function getSymbolByRealValue(realValue) {
  if (realValue === 0) {
    return null;
  }
  if (realValue > 0) {
    return '+';
  }
  return '-';
}

/** 获取颜色 */
export function getColorByRealValue(realValue) {
  if (realValue === 0) {
    return '#595959';
  }
  return realValue > 0 ? '#ff4d4f' : '#52c41a';
}

/** 获取到最后展示的数字 */
export function getRealTextWithPrecision(realValue) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return precision >= 0 ? realValue === null || realValue === void 0 ? void 0 : realValue.toFixed(precision) : realValue;
}

/**
 * 转化为数字
 * @copy from https://github.com/toss/es-toolkit/blob/32a183828c244d675f46810935e45dfefec81a54/src/compat/util/toNumber.ts#L19
 */
export function toNumber(value) {
  if (_typeof(value) === 'symbol' || value instanceof Symbol) {
    return NaN;
  }
  return Number(value);
}