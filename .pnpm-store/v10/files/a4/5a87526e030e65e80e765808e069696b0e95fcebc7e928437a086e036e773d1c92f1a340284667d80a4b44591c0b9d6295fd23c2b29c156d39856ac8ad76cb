function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import sdk from '@stackblitz/sdk';
import { ApplyPluginsType } from 'dumi';
import { genReactRenderCode, pluginManager } from "./utils";
export var openStackBlitz = function openStackBlitz(data) {
  var _data$asset$dependenc, _react, _deps$_react, _reactDom, _deps$_reactDom;
  var isTSX = Boolean((_data$asset$dependenc = data.asset.dependencies) === null || _data$asset$dependenc === void 0 ? void 0 : _data$asset$dependenc['index.tsx']);
  var ext = isTSX ? '.tsx' : '.jsx';
  var deps = {};
  var entryFileName = "index".concat(ext);
  var files = {
    'index.html': '<div style="margin: 16px;" id="root"></div>'
  };
  var config = {
    title: data.title || '',
    description: data.description || 'An auto-generated demo by dumi',
    template: 'create-react-app',
    files: {}
  };
  Object.entries(data.asset.dependencies).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      _ref2$ = _ref2[1],
      type = _ref2$.type,
      value = _ref2$.value;
    if (type === 'NPM') {
      // generate dependencies
      deps[name] = value;
    } else {
      // append other imported local files
      files[name === entryFileName ? "App".concat(ext) : name] = value;
    }
  });
  (_deps$_react = deps[_react = 'react']) !== null && _deps$_react !== void 0 ? _deps$_react : deps[_react] = 'latest';
  (_deps$_reactDom = deps[_reactDom = 'react-dom']) !== null && _deps$_reactDom !== void 0 ? _deps$_reactDom : deps[_reactDom] = deps.react;
  files['package.json'] = JSON.stringify({
    name: data.title,
    description: data.description || 'An auto-generated demo by dumi',
    dependencies: deps,
    // add TypeScript dependency if required, must in devDeps to avoid csb compile error
    devDependencies: isTSX ? {
      typescript: '^4'
    } : {}
  }, null, 2);
  files[entryFileName] = genReactRenderCode(deps.react);
  config.files = files;
  var stbOpts = pluginManager.applyPlugins({
    type: ApplyPluginsType.modify,
    key: 'modifyStackBlitzData',
    initialValue: config,
    args: data
  });
  sdk.openProject(stbOpts);
};