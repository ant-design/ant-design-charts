export var omitUndefinedAndEmptyArr = function omitUndefinedAndEmptyArr(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    var _obj$key;
    if (Array.isArray(obj[key]) && ((_obj$key = obj[key]) === null || _obj$key === void 0 ? void 0 : _obj$key.length) === 0) {
      return;
    }
    if (obj[key] === undefined) {
      return;
    }
    newObj[key] = obj[key];
  });
  return newObj;
};