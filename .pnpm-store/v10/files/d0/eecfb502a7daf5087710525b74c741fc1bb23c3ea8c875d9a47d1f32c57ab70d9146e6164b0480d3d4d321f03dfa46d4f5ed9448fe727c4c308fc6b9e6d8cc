function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["title", "placement"];
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import Tabs from "../Tabs";
import { ReactComponent as IconCheck } from '@ant-design/icons-svg/inline-svg/outlined/check.svg';
import { ReactComponent as IconCodeSandbox } from '@ant-design/icons-svg/inline-svg/outlined/code-sandbox.svg';
import { ReactComponent as IconEdit } from '@ant-design/icons-svg/inline-svg/outlined/edit.svg';
import { ReactComponent as IconSketch } from '@ant-design/icons-svg/inline-svg/outlined/sketch.svg';
import { ReactComponent as IconStackBlitz } from '@ant-design/icons-svg/inline-svg/outlined/thunderbolt.svg';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import { getSketchJSON, openCodeSandbox, openStackBlitz, useDemo, useIntl } from 'dumi';
import SourceCode from 'dumi/theme/builtins/SourceCode';
import PreviewerActionsExtra from 'dumi/theme/slots/PreviewerActionsExtra';
import SourceCodeEditor from 'dumi/theme/slots/SourceCodeEditor';
import RcTooltip from 'rc-tooltip';
import React, { useRef, useState } from 'react';
import "./index.less";
var Tooltip = function Tooltip(props) {
  var title = props.title,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(RcTooltip, _extends({
    prefixCls: "dumi-theme-default-tooltip",
    placement: placement
  }, rest, {
    overlay: title
  }));
};
var IconCode = function IconCode() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 117"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"
  }));
};
var IconCodeExpand = function IconCodeExpand() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 117"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"
  }));
};
var IconExternalLink = function IconExternalLink() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"
  }));
};
var PreviewerActions = function PreviewerActions(props) {
  var _files$activeKey$0$ma, _props$disabledAction, _props$disabledAction2, _props$disabledAction3, _props$disabledAction4;
  var intl = useIntl();
  var files = Object.entries(props.asset.dependencies).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      type = _ref2[1].type;
    return type === 'FILE';
  });
  var _ref3 = useDemo(props.asset.id),
    renderOpts = _ref3.renderOpts;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = useState(props.forceShowCode || props.defaultShowCode),
    _useState4 = _slicedToArray(_useState3, 2),
    showCode = _useState4[0],
    setShowCode = _useState4[1];
  var copyTimer = useRef();
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCopied = _useState6[0],
    setIsCopied = _useState6[1];
  var isSingleFile = files.length === 1;
  var lang = ((_files$activeKey$0$ma = files[activeKey][0].match(/\.([^.]+)$/)) === null || _files$activeKey$0$ma === void 0 ? void 0 : _files$activeKey$0$ma[1]) || 'text';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-actions"
  }, !((_props$disabledAction = props.disabledActions) !== null && _props$disabledAction !== void 0 && _props$disabledAction.includes('CSB')) && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.codesandbox'
    }),
    onClick: function onClick() {
      return openCodeSandbox(props);
    }
  }, /*#__PURE__*/React.createElement(IconCodeSandbox, null)), !((_props$disabledAction2 = props.disabledActions) !== null && _props$disabledAction2 !== void 0 && _props$disabledAction2.includes('STACKBLITZ')) && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.stackblitz'
    }),
    onClick: function onClick() {
      return openStackBlitz(props);
    }
  }, /*#__PURE__*/React.createElement(IconStackBlitz, null)), !((_props$disabledAction3 = props.disabledActions) !== null && _props$disabledAction3 !== void 0 && _props$disabledAction3.includes('HTML2SKETCH')) && getSketchJSON && /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-previewer-action-btn dumi-default-previewer-action-sketch",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.sketch'
    }),
    "data-copied": isCopied || undefined
  }, isCopied ? /*#__PURE__*/React.createElement(IconCheck, null) : /*#__PURE__*/React.createElement(IconSketch, null), /*#__PURE__*/React.createElement("select", {
    value: "",
    onChange: function onChange(ev) {
      var type = ev.target.value;
      switch (type) {
        case 'group':
        case 'symbol':
          getSketchJSON(props.demoContainer, {
            type: type
          }).then(function (data) {
            copy(JSON.stringify(data));
            setIsCopied(true);
            clearTimeout(copyTimer.current);
            copyTimer.current = window.setTimeout(function () {
              return setIsCopied(false);
            }, 2000);
          });
          break;
        case 'guide':
          window.open('https://d.umijs.org/config#html2sketch');
          break;
        default:
      }
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }), /*#__PURE__*/React.createElement("option", {
    value: "group"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.group'
  })), /*#__PURE__*/React.createElement("option", {
    value: "symbol"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.symbol'
  })), /*#__PURE__*/React.createElement("option", {
    value: "-",
    disabled: true
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.divider'
  })), /*#__PURE__*/React.createElement("option", {
    value: "guide"
  }, intl.formatMessage({
    id: 'previewer.actions.sketch.guide'
  })))), !((_props$disabledAction4 = props.disabledActions) !== null && _props$disabledAction4 !== void 0 && _props$disabledAction4.includes('EXTERNAL')) && /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: props.demoUrl,
    className: "dumi-default-previewer-action-btn",
    "data-dumi-tooltip": intl.formatMessage({
      id: 'previewer.actions.separate'
    })
  }, /*#__PURE__*/React.createElement(IconExternalLink, null)), props.extra, /*#__PURE__*/React.createElement(PreviewerActionsExtra, props), !props.forceShowCode && /*#__PURE__*/React.createElement("button", {
    className: "dumi-default-previewer-action-btn",
    type: "button",
    onClick: function onClick() {
      return setShowCode(function (prev) {
        return !prev;
      });
    },
    "data-dumi-tooltip": intl.formatMessage({
      id: "previewer.actions.code.".concat(showCode ? 'shrink' : 'expand')
    })
  }, showCode ? /*#__PURE__*/React.createElement(IconCodeExpand, null) : /*#__PURE__*/React.createElement(IconCode, null))), showCode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-sources"
  }, /*#__PURE__*/React.createElement(Tabs, {
    className: classNames('dumi-default-previewer-tabs', isSingleFile && 'dumi-default-previewer-tabs-single'),
    defaultActiveKey: String(activeKey),
    onChange: function onChange(key) {
      return setActiveKey(Number(key));
    },
    items: files.map(function (_ref4, i) {
      var _ref5 = _slicedToArray(_ref4, 1),
        filename = _ref5[0];
      return {
        key: String(i),
        // remove leading ./ prefix
        label: filename.replace(/^\.\//, ''),
        // only support to edit entry file currently
        children: i === 0 && renderOpts !== null && renderOpts !== void 0 && renderOpts.compile ? /*#__PURE__*/React.createElement(SourceCodeEditor, {
          lang: lang,
          initialValue: files[i][1].value.trim(),
          onChange: function onChange(code) {
            var _props$onSourceChange, _props$onSourceTransp;
            (_props$onSourceChange = props.onSourceChange) === null || _props$onSourceChange === void 0 ? void 0 : _props$onSourceChange.call(props, _defineProperty({}, files[i][0], code));
            // FIXME: remove before publish
            (_props$onSourceTransp = props.onSourceTranspile) === null || _props$onSourceTransp === void 0 ? void 0 : _props$onSourceTransp.call(props, {
              source: _defineProperty({}, files[i][0], code)
            });
          },
          extra: /*#__PURE__*/React.createElement(Tooltip, {
            title: intl.formatMessage({
              id: 'previewer.actions.code.editable'
            })
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "dumi-default-previewer-editor-tip-btn"
          }, /*#__PURE__*/React.createElement(IconEdit, null)))
        }) : /*#__PURE__*/React.createElement(SourceCode, {
          lang: lang,
          extra:
          // only show readonly tip for non-entry files
          // because readonly entry file means live compile is not available for this demo tech stack
          i !== 0 && /*#__PURE__*/React.createElement(Tooltip, {
            title: intl.formatMessage({
              id: 'previewer.actions.code.readonly'
            })
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "dumi-default-previewer-editor-tip-btn",
            "data-readonly": true
          }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(IconEdit, null)))
        }, files[activeKey][1].value.trim())
      };
    })
  }))));
};
export default PreviewerActions;