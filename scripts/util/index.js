const fs = require('fs');
const path = require('path');

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

// 文件路径是否存在，不存在时直接创建
const checkDirExist = (folderpath) => {
  const pathArr = folderpath.split('/');
  let _path = '';
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      _path += `/${pathArr[i]}`;
      if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path);
      }
    }
  }
};

const removeDir = (dir) => {
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      removeDir(newPath);
    } else {
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
};

module.exports = {
  lowerCase,
  upperCase,
  toHump,
  toLine,
  checkDirExist,
  removeDir,
};
