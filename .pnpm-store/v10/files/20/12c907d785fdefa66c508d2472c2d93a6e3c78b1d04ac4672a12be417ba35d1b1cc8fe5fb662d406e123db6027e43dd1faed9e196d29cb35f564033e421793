function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { getParameters } from 'codesandbox-import-utils/lib/api/define';
import { ApplyPluginsType } from 'dumi';
import { genReactRenderCode, pluginManager } from "./utils";
var CSB_API_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define';

/**
 * get serialized data that use to submit to codesandbox.io
 * @param opts  previewer props
 */
function getCSBData(opts) {
  var _opts$asset$dependenc, _react, _deps$_react, _reactDom, _deps$_reactDom;
  var isTSX = Boolean((_opts$asset$dependenc = opts.asset.dependencies) === null || _opts$asset$dependenc === void 0 ? void 0 : _opts$asset$dependenc['index.tsx']);
  var ext = isTSX ? '.tsx' : '.jsx';
  var files = {};
  var deps = {};
  var entryFileName = "index".concat(ext);
  Object.entries(opts.asset.dependencies).forEach(function (_ref) {
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
      files[name === entryFileName ? "App".concat(ext) : name] = {
        content: value,
        isBinary: false
      };
    }
  });

  // add react、react-dom dependency
  (_deps$_react = deps[_react = 'react']) !== null && _deps$_react !== void 0 ? _deps$_react : deps[_react] = 'latest';
  (_deps$_reactDom = deps[_reactDom = 'react-dom']) !== null && _deps$_reactDom !== void 0 ? _deps$_reactDom : deps[_reactDom] = deps.react;

  // append sandbox.config.json
  files['sandbox.config.json'] = {
    content: JSON.stringify({
      template: 'create-react-app'
    }, null, 2),
    isBinary: false
  };

  // append package.json
  files['package.json'] = {
    content: JSON.stringify({
      name: opts.title,
      description: opts.description || 'An auto-generated demo by dumi',
      main: entryFileName,
      dependencies: deps,
      // add TypeScript dependency if required, must in devDeps to avoid csb compile error
      devDependencies: isTSX ? {
        typescript: '^4'
      } : {}
    }, null, 2),
    isBinary: false
  };

  // append index.html
  files['index.html'] = {
    content: '<div style="margin: 16px;" id="root"></div>',
    isBinary: false
  };

  // append entry file
  files[entryFileName] = {
    content: genReactRenderCode(deps.react),
    isBinary: false
  };
  var csbOpts = pluginManager.applyPlugins({
    type: ApplyPluginsType.modify,
    key: 'modifyCodeSandboxData',
    initialValue: {
      files: files
    },
    args: opts
  });
  return getParameters(csbOpts);
}

/**
 * use CodeSandbox.io
 * @param data  previewer opts
 * @param opts  the api that CodeSandbox calls when creating the demo
 * @note  return a open function for open demo on codesandbox.io
 */
export var openCodeSandbox = function openCodeSandbox(data, opts) {
  var _data$assets;
  var form = document.createElement('form');
  var input = document.createElement('input');
  var CSBData = getCSBData(data);
  form.method = 'POST';
  form.target = '_blank';
  form.style.display = 'none';
  form.action = (opts === null || opts === void 0 ? void 0 : opts.api) || CSB_API_ENDPOINT;
  form.appendChild(input);
  form.setAttribute('data-demo', ((_data$assets = data.assets) === null || _data$assets === void 0 ? void 0 : _data$assets.id) || '');
  input.name = 'parameters';
  input.value = CSBData;
  document.body.appendChild(form);
  form.submit();
  form.remove();
};