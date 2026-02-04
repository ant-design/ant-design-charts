"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireDefault(require("react"));
var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));
var _enzyme = require("enzyme");
var color = _interopRequireWildcard(require("../../helpers/color"));
var _Sketch = _interopRequireDefault(require("./Sketch"));
var _SketchFields = _interopRequireDefault(require("./SketchFields"));
var _SketchPresetColors = _interopRequireDefault(require("./SketchPresetColors"));
var _common = require("../common");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* global test, jest, expect */

// import canvas from 'canvas'

test('Sketch renders correctly', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Sketch.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Sketch renders on server correctly', () => {
//   const tree = renderer.create(
//     <Sketch renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Sketch onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Sketch.default, {
    onChange: changeSpy
  }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('click');
  expect(changeSpy).toHaveBeenCalled();
});
test('Sketch with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Sketch.default, {
    onSwatchHover: hoverSpy
  }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');
  expect(hoverSpy).toHaveBeenCalled();
});
test('Sketch renders custom styles correctly', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Sketch.default, {
    styles: {
      default: {
        picker: {
          boxShadow: 'none'
        }
      }
    }
  })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});
test('SketchFields renders correctly', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SketchFields.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});
test('SketchPresetColors renders correctly', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SketchPresetColors.default, {
    colors: ['#fff', '#999', '#000']
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
test('SketchPresetColors with custom titles renders correctly', function () {
  var colors = [{
    color: '#fff',
    title: 'white'
  }, {
    color: '#999',
    title: 'gray'
  }, {
    color: '#000'
  }, '#f00'];
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SketchPresetColors.default, {
    colors: colors
  })).toJSON();
  expect(tree).toMatchSnapshot();
});