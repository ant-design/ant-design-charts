const shell = require('shelljs');

// 首字母小写
const lowerCase = (str = '') => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, (m) => m.toLowerCase());
};

// 首字母大写
const upperCase = (str = '') => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, (m) => m.toUpperCase());
};

// 中划线转驼峰
const toHump = (name = '') => {
  return name.replace(/\-(\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });
};
// 驼峰转换中划线
const toLine = (name = '') => {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase();
};

module.exports = {
  lowerCase,
  upperCase,
  toHump,
  toLine,
};
