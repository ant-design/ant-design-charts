"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CacheManager = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _css = require("@emotion/css");
var CacheManager = exports.CacheManager = /*#__PURE__*/function () {
  function CacheManager() {
    (0, _classCallCheck2.default)(this, CacheManager);
    (0, _defineProperty2.default)(this, "_cacheList", [_css.cache]);
  }
  (0, _createClass2.default)(CacheManager, [{
    key: "add",
    value: function add(cache) {
      var existCache = this.getCache(cache.key);
      if (existCache) {
        return existCache;
      } else {
        this._cacheList.push(cache);
        return cache;
      }
    }
  }, {
    key: "delete",
    value: function _delete(cache) {
      this._cacheList = this._cacheList.filter(function (c) {
        return c.key !== cache.key;
      });
    }
  }, {
    key: "hasCache",
    value: function hasCache(cache) {
      return this._cacheList.some(function (c) {
        return c.key === cache.key;
      });
    }
  }, {
    key: "getCache",
    value: function getCache(key) {
      return this._cacheList.find(function (c) {
        return c.key === key;
      });
    }
  }, {
    key: "getCacheList",
    value: function getCacheList() {
      return this._cacheList;
    }
  }]);
  return CacheManager;
}();