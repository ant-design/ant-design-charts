"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractTypeName = exports.applyMap = exports.compact = exports.isEnzymeWrapper = exports.isCheerioWrapper = exports.isReactWrapper = exports.isShallowWrapper = void 0;

var _filter = _interopRequireDefault(require("lodash/filter"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _ShallowWrapper = _interopRequireDefault(require("enzyme/build/ShallowWrapper"));

var _ReactWrapper = _interopRequireDefault(require("enzyme/build/ReactWrapper"));

var _Debug = require("enzyme/build/Debug");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SHALLOW_WRAPPER_NAME = _ShallowWrapper.default.name;
const REACT_WRAPPER_NAME = _ReactWrapper.default.name;

const isShallowWrapper = wrapper => !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.constructor) && wrapper.constructor.name === SHALLOW_WRAPPER_NAME;

exports.isShallowWrapper = isShallowWrapper;

const isReactWrapper = wrapper => !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.constructor) && wrapper.constructor.name === REACT_WRAPPER_NAME;

exports.isReactWrapper = isReactWrapper;

const isCheerioWrapper = wrapper => !(0, _isNil.default)(wrapper) && !(0, _isNil.default)(wrapper.cheerio);

exports.isCheerioWrapper = isCheerioWrapper;

const isEnzymeWrapper = wrapper => isShallowWrapper(wrapper) || isReactWrapper(wrapper) || isCheerioWrapper(wrapper);

exports.isEnzymeWrapper = isEnzymeWrapper;

const compact = array => (0, _filter.default)(array, item => !(0, _isNil.default)(item) && item !== '');

exports.compact = compact;

const applyMap = (json, options) => {
  if (typeof options.map === 'function') {
    return options.map(json);
  }

  return json;
};

exports.applyMap = applyMap;

const extractTypeName = node => {
  const name = (0, _Debug.typeName)(node);

  if (name.$$typeof === Symbol.for('react.lazy')) {
    return 'React.Lazy';
  }

  if (name.$$typeof === Symbol.for('react.memo')) {
    return 'React.Memo';
  }

  if (name === Symbol.for('react.suspense')) {
    return 'React.Suspense';
  }

  return name;
};

exports.extractTypeName = extractTypeName;