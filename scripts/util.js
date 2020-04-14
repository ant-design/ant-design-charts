// 首字母小写
const lowerCase = (str) => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, (m) => m.toLowerCase());
};

// 首字母大写
const upperCase = (str) => {
  const reg = /\b(\w)|\s(\w)/g;
  return str.replace(reg, (m) => m.toUpperCase());
};

module.exports = {
  lowerCase,
  upperCase,
};
