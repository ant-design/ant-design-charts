"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUrlSearchParams = useUrlSearchParams;

var _react = require("react");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
/* eslint-disable no-restricted-syntax */


/**
 *
 * @param {object} params
 * @returns {URL}
 */
function setQueryToCurrentUrl(params) {
  var _a;

  var URL = (typeof window !== 'undefined' ? window : {}).URL;
  var url = new URL((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href);
  Object.keys(params).forEach(function (key) {
    var value = params[key];

    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        url.searchParams.delete(key);
        value.forEach(function (valueItem) {
          url.searchParams.append(key, valueItem);
        });
      } else if (value instanceof Date) {
        if (!Number.isNaN(value.getTime())) {
          url.searchParams.set(key, value.toISOString());
        }
      } else if (_typeof(value) === 'object') {
        url.searchParams.set(key, JSON.stringify(value));
      } else {
        url.searchParams.set(key, value);
      }
    } else {
      url.searchParams.delete(key);
    }
  });
  return url;
}

function useUrlSearchParams(initial, config) {
  var _a;

  if (initial === void 0) {
    initial = {};
  }

  if (config === void 0) {
    config = {
      disabled: false
    };
  }
  /**
   * The main idea of this hook is to make things response to change of `window.location.search`,
   * so no need for introducing new state (in the mean time).
   * Whenever `window.location.search` is changed but  not cause re-render, call `forceUpdate()`.
   * Whenever the component - user of this hook - re-render, this hook should return
   * the query object that corresponse to the current `window.location.search`
   */


  var _b = (0, _react.useState)(),
      forceUpdate = _b[1];

  var locationSearch = typeof window !== 'undefined' && ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.search);
  /**
   * @type {URLSearchParams}
   */

  var urlSearchParams = (0, _react.useMemo)(function () {
    if (config.disabled) return {};
    return new URLSearchParams(locationSearch || {});
  }, [config.disabled, locationSearch]);
  var params = (0, _react.useMemo)(function () {
    if (config.disabled) return {};
    if (typeof window === 'undefined' || !window.URL) return {};
    var result = []; // @ts-ignore

    urlSearchParams.forEach(function (value, key) {
      result.push({
        key: key,
        value: value
      });
    }); // group by key

    result = result.reduce(function (acc, val) {
      (acc[val.key] = acc[val.key] || []).push(val);
      return acc;
    }, {});
    result = Object.keys(result).map(function (key) {
      var valueGroup = result[key];

      if (valueGroup.length === 1) {
        return [key, valueGroup[0].value];
      }

      return [key, valueGroup.map(function (_a) {
        var value = _a.value;
        return value;
      })];
    });

    var newParams = __assign({}, initial);

    result.forEach(function (_a) {
      var key = _a[0],
          value = _a[1];
      newParams[key] = parseValue(key, value, {}, initial);
    });
    return newParams;
  }, [config.disabled, initial, urlSearchParams]);

  function redirectToNewSearchParams(newParams) {
    if (typeof window === 'undefined' || !window.URL) return;
    var url = setQueryToCurrentUrl(newParams);

    if (window.location.search !== url.search) {
      window.history.replaceState({}, '', url.toString());
    }

    if (urlSearchParams.toString() !== url.searchParams.toString()) {
      forceUpdate({});
    }
  }

  (0, _react.useEffect)(function () {
    if (config.disabled) return;
    if (typeof window === 'undefined' || !window.URL) return;
    redirectToNewSearchParams(__assign(__assign({}, initial), params));
  }, [config.disabled, params]);

  var setParams = function setParams(newParams) {
    redirectToNewSearchParams(newParams);
  };

  (0, _react.useEffect)(function () {
    if (config.disabled) return function () {};
    if (typeof window === 'undefined' || !window.URL) return function () {};

    var onPopState = function onPopState() {
      forceUpdate({});
    };

    window.addEventListener('popstate', onPopState);
    return function () {
      window.removeEventListener('popstate', onPopState);
    };
  }, [config.disabled]);
  return [params, setParams];
}

var booleanValues = {
  true: true,
  false: false
};

function parseValue(key, _value, types, defaultParams) {
  if (!types) return _value;
  var type = types[key];
  var value = _value === undefined ? defaultParams[key] : _value;

  if (type === Number) {
    return Number(value);
  }

  if (type === Boolean || _value === 'true' || _value === 'false') {
    return booleanValues[value];
  }

  if (Array.isArray(type)) {
    // eslint-disable-next-line eqeqeq
    return type.find(function (item) {
      return item == value;
    }) || defaultParams[key];
  }

  return value;
}