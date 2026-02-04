"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
Object.defineProperty(exports, "shallowToJson", {
  enumerable: true,
  get: function get() {
    return _shallow.default;
  }
});
Object.defineProperty(exports, "mountToJson", {
  enumerable: true,
  get: function get() {
    return _mount.default;
  }
});
Object.defineProperty(exports, "renderToJson", {
  enumerable: true,
  get: function get() {
    return _render.default;
  }
});
Object.defineProperty(exports, "createSerializer", {
  enumerable: true,
  get: function get() {
    return _createSerializer.default;
  }
});

var _utils = require("./utils");

var _shallow = _interopRequireDefault(require("./shallow"));

var _mount = _interopRequireDefault(require("./mount"));

var _render = _interopRequireDefault(require("./render"));

var _createSerializer = _interopRequireDefault(require("./createSerializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(wrapper, options) {
  if ((0, _utils.isShallowWrapper)(wrapper)) {
    return (0, _shallow.default)(wrapper, options);
  }

  if ((0, _utils.isReactWrapper)(wrapper)) {
    return (0, _mount.default)(wrapper, options);
  }

  if ((0, _utils.isCheerioWrapper)(wrapper)) {
    return (0, _render.default)(wrapper, options);
  }
}