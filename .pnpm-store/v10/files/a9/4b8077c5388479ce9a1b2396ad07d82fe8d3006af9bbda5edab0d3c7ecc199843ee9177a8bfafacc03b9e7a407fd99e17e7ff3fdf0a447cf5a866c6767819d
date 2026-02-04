(function() {
  'use strict';

  function rename(obj, fn) {
    if (typeof fn !== 'function') {
      return obj;
    }

    var res = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[fn(key, obj[key]) || key] = obj[key];
      }
    }
    return res;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = rename;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return rename;
      });
    } else {
      window.rename = rename;
    }
  }
})();
