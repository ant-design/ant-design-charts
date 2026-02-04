import { List, Switch } from 'antd';
import React from 'react';
import { renderLayoutSettingItem } from "./LayoutChange";
import { getFormatMessage } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
var RegionalSetting = function RegionalSetting(_ref) {
  var settings = _ref.settings,
    prefixCls = _ref.prefixCls,
    changeSetting = _ref.changeSetting,
    hashId = _ref.hashId;
  var formatMessage = getFormatMessage();
  var regionalSetting = ['header', 'footer', 'menu', 'menuHeader'];
  return /*#__PURE__*/_jsx(List, {
    className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
    split: false,
    renderItem: renderLayoutSettingItem,
    dataSource: regionalSetting.map(function (key) {
      return {
        title: formatMessage({
          id: "app.setting.regionalsettings.".concat(key)
        }),
        action: /*#__PURE__*/_jsx(Switch, {
          size: "small",
          className: "regional-".concat(key, " ").concat(hashId).trim(),
          checked: settings["".concat(key, "Render")] || settings["".concat(key, "Render")] === undefined,
          onChange: function onChange(checked) {
            return changeSetting("".concat(key, "Render"), checked === true ? undefined : false);
          }
        })
      };
    })
  });
};
export { RegionalSetting };