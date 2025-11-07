"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseValueToDay = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
var _customParseFormat = _interopRequireDefault(require("dayjs/plugin/customParseFormat"));
var _isNil = require("../isNil");
_dayjs.default.extend(_customParseFormat.default);
/**
 * 一个比较hack的moment判断工具
 * @param value
 * @returns
 */
var isMoment = function isMoment(value) {
  return !!(value !== null && value !== void 0 && value._isAMomentObject);
};
var parseValueToDay = exports.parseValueToDay = function parseValueToDay(value, formatter) {
  if ((0, _isNil.isNil)(value) || _dayjs.default.isDayjs(value) || isMoment(value)) {
    if (isMoment(value)) {
      return (0, _dayjs.default)(value);
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(function (v) {
      return parseValueToDay(v, formatter);
    });
  }
  if (typeof value === 'number') return (0, _dayjs.default)(value);
  return (0, _dayjs.default)(value, formatter);
};