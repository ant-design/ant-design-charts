"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQRCode = void 0;
var _qrcodegen = require("../libs/qrcodegen");
var _utils = require("../utils");
var _react = _interopRequireDefault(require("react"));
var useQRCode = exports.useQRCode = function useQRCode(opt) {
  var value = opt.value,
    level = opt.level,
    minVersion = opt.minVersion,
    includeMargin = opt.includeMargin,
    marginSize = opt.marginSize,
    imageSettings = opt.imageSettings,
    size = opt.size;
  var memoizedQrcode = _react.default.useMemo(function () {
    var segments = _qrcodegen.QrSegment.makeSegments(value);
    return _qrcodegen.QrCode.encodeSegments(segments, _utils.ERROR_LEVEL_MAP[level], minVersion);
  }, [value, level, minVersion]);
  return _react.default.useMemo(function () {
    var cs = memoizedQrcode.getModules();
    var mg = (0, _utils.getMarginSize)(includeMargin, marginSize);
    var ncs = cs.length + mg * 2;
    var cis = (0, _utils.getImageSettings)(cs, size, mg, imageSettings);
    return {
      cells: cs,
      margin: mg,
      numCells: ncs,
      calculatedImageSettings: cis,
      qrcode: memoizedQrcode
    };
  }, [memoizedQrcode, size, imageSettings, includeMargin, marginSize]);
};