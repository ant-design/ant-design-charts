import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { cache } from '@emotion/css';
export var CacheManager = /*#__PURE__*/function () {
  function CacheManager() {
    _classCallCheck(this, CacheManager);
    _defineProperty(this, "_cacheList", [cache]);
  }
  _createClass(CacheManager, [{
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