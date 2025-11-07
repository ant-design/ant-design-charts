import { List, Select, Switch, Tooltip } from 'antd';
import React from 'react';
import { defaultSettings } from "../../defaultSettings";
import { getFormatMessage } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var renderLayoutSettingItem = function renderLayoutSettingItem(item) {
  var action = /*#__PURE__*/React.cloneElement(item.action, {
    disabled: item.disabled
  });
  return /*#__PURE__*/_jsx(Tooltip, {
    title: item.disabled ? item.disabledReason : '',
    placement: "left",
    children: /*#__PURE__*/_jsx(List.Item, {
      actions: [action],
      children: /*#__PURE__*/_jsx("span", {
        style: {
          opacity: item.disabled ? 0.5 : 1
        },
        children: item.title
      })
    })
  });
};
var LayoutSetting = function LayoutSetting(_ref) {
  var settings = _ref.settings,
    prefixCls = _ref.prefixCls,
    changeSetting = _ref.changeSetting,
    hashId = _ref.hashId;
  var formatMessage = getFormatMessage();
  var _ref2 = settings || defaultSettings,
    contentWidth = _ref2.contentWidth,
    splitMenus = _ref2.splitMenus,
    fixedHeader = _ref2.fixedHeader,
    layout = _ref2.layout,
    fixSiderbar = _ref2.fixSiderbar;
  return /*#__PURE__*/_jsx(List, {
    className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
    split: false,
    dataSource: [{
      title: formatMessage({
        id: 'app.setting.content-width',
        defaultMessage: 'Content Width'
      }),
      action: /*#__PURE__*/_jsxs(Select, {
        value: contentWidth || 'Fixed',
        size: "small",
        className: "content-width ".concat(hashId).trim(),
        onSelect: function onSelect(value) {
          changeSetting('contentWidth', value);
        },
        style: {
          width: 80
        },
        children: [layout === 'side' ? null : /*#__PURE__*/_jsx(Select.Option, {
          value: "Fixed",
          children: formatMessage({
            id: 'app.setting.content-width.fixed',
            defaultMessage: 'Fixed'
          })
        }), /*#__PURE__*/_jsx(Select.Option, {
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
      action: /*#__PURE__*/_jsx(Switch, {
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
      action: /*#__PURE__*/_jsx(Switch, {
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
      action: /*#__PURE__*/_jsx(Switch, {
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
export { LayoutSetting };