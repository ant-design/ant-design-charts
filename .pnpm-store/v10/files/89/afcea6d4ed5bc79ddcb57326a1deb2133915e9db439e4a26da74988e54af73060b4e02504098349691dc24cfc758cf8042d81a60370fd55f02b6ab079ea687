"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderLayoutSettingItem = exports.LayoutSetting = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _defaultSettings = require("../../defaultSettings");
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
var renderLayoutSettingItem = exports.renderLayoutSettingItem = function renderLayoutSettingItem(item) {
  var action = /*#__PURE__*/_react.default.cloneElement(item.action, {
    disabled: item.disabled
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: item.disabled ? item.disabledReason : '',
    placement: "left",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List.Item, {
      actions: [action],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: {
          opacity: item.disabled ? 0.5 : 1
        },
        children: item.title
      })
    })
  });
};
var LayoutSetting = exports.LayoutSetting = function LayoutSetting(_ref) {
  var settings = _ref.settings,
    prefixCls = _ref.prefixCls,
    changeSetting = _ref.changeSetting,
    hashId = _ref.hashId;
  var formatMessage = (0, _index.getFormatMessage)();
  var _ref2 = settings || _defaultSettings.defaultSettings,
    contentWidth = _ref2.contentWidth,
    splitMenus = _ref2.splitMenus,
    fixedHeader = _ref2.fixedHeader,
    layout = _ref2.layout,
    fixSiderbar = _ref2.fixSiderbar;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, {
    className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
    split: false,
    dataSource: [{
      title: formatMessage({
        id: 'app.setting.content-width',
        defaultMessage: 'Content Width'
      }),
      action: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Select, {
        value: contentWidth || 'Fixed',
        size: "small",
        className: "content-width ".concat(hashId).trim(),
        onSelect: function onSelect(value) {
          changeSetting('contentWidth', value);
        },
        style: {
          width: 80
        },
        children: [layout === 'side' ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select.Option, {
          value: "Fixed",
          children: formatMessage({
            id: 'app.setting.content-width.fixed',
            defaultMessage: 'Fixed'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select.Option, {
          value: "Fluid",
          children: formatMessage({
            id: 'app.setting.content-width.fluid',
            defaultMessage: 'Fluid'
          })
        })]
      })
    }, {
      title: formatMessage({
        id: 'app.setting.fixedheader',
        defaultMessage: 'Fixed Header'
      }),
      action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, {
        size: "small",
        className: "fixed-header",
        checked: !!fixedHeader,
        onChange: function onChange(checked) {
          changeSetting('fixedHeader', checked);
        }
      })
    }, {
      title: formatMessage({
        id: 'app.setting.fixedsidebar',
        defaultMessage: 'Fixed Sidebar'
      }),
      disabled: layout === 'top',
      disabledReason: formatMessage({
        id: 'app.setting.fixedsidebar.hint',
        defaultMessage: 'Works on Side Menu Layout'
      }),
      action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, {
        size: "small",
        className: "fix-siderbar",
        checked: !!fixSiderbar,
        onChange: function onChange(checked) {
          return changeSetting('fixSiderbar', checked);
        }
      })
    }, {
      title: formatMessage({
        id: 'app.setting.splitMenus'
      }),
      disabled: layout !== 'mix',
      action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, {
        size: "small",
        checked: !!splitMenus,
        className: "split-menus",
        onChange: function onChange(checked) {
          changeSetting('splitMenus', checked);
        }
      })
    }],
    renderItem: renderLayoutSettingItem
  });
};