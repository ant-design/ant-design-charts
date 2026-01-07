import { useIntl } from 'dumi';
import React from 'react';
import "./index.less";
var ContentTabs = function ContentTabs(_ref) {
  var tabs = _ref.tabs,
    key = _ref.tabKey,
    onChange = _ref.onChange;
  var intl = useIntl();

  // TODO: tab.Extra & tab.Action render
  return Boolean(tabs === null || tabs === void 0 ? void 0 : tabs.length) ? /*#__PURE__*/React.createElement("ul", {
    className: "dumi-default-content-tabs"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: function onClick() {
      return onChange();
    },
    "data-active": !key || undefined
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, intl.formatMessage({
    id: 'content.tabs.default'
  }))), tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("li", {
      key: tab.key,
      onClick: function onClick() {
        return onChange(tab);
      },
      "data-active": key === tab.key || undefined
    }, /*#__PURE__*/React.createElement("button", {
      type: "button"
    }, tab.titleIntlId ? intl.formatMessage({
      id: tab.titleIntlId
    }) : tab.meta.frontmatter.title));
  })) : null;
};
export default ContentTabs;