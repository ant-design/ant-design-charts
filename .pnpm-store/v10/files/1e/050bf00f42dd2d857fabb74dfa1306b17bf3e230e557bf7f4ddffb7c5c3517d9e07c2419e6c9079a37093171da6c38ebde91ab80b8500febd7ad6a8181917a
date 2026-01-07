"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateArrayFormatter = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _dayjs = _interopRequireDefault(require("dayjs"));
/**
 * 通过 format 来格式化日期，因为支持了function 所以需要单独的方法来处理
 * @param  {any} endText
 * @param  {FormatType} format
 * @return string
 */
var formatString = function formatString(endText, format) {
  if (typeof format === 'function') {
    return format((0, _dayjs.default)(endText));
  }
  return (0, _dayjs.default)(endText).format(format);
};
/**
 * 格式化区域日期,如果是一个数组，会返回 start ~ end
 * @param  {any} value
 * @param  {FormatType | FormatType[]} format
 * returns string
 */
var dateArrayFormatter = exports.dateArrayFormatter = function dateArrayFormatter(value, format) {
  var _ref = Array.isArray(value) ? value : [],
    _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startText = _ref2[0],
    endText = _ref2[1];
  var formatFirst;
  var formatEnd;
  if (Array.isArray(format)) {
    formatFirst = format[0];
    formatEnd = format[1];
  } else if ((0, _typeof2.default)(format) === 'object' && format.type === 'mask') {
    formatFirst = format.format;
    formatEnd = format.format;
  } else {
    formatFirst = format;
    formatEnd = format;
  }

  // activePickerIndex for https://github.com/ant-design/ant-design/issues/22158
  var parsedStartText = startText ? formatString(startText, formatFirst) : '';
  var parsedEndText = endText ? formatString(endText, formatEnd) : '';
  var valueStr = parsedStartText && parsedEndText ? "".concat(parsedStartText, " ~ ").concat(parsedEndText) : '';
  return valueStr;
};