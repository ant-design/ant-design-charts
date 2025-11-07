import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { isBrowser } from '@ant-design/pro-utils';
import { Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var FullScreenIcon = function FullScreenIcon() {
  var intl = useIntl();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    fullscreen = _useState2[0],
    setFullscreen = _useState2[1];
  useEffect(function () {
    if (!isBrowser()) {
      return;
    }
    document.onfullscreenchange = function () {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? /*#__PURE__*/_jsx(Tooltip, {
    title: intl.getMessage('tableToolBar.exitFullScreen', '全屏'),
    children: /*#__PURE__*/_jsx(FullscreenExitOutlined, {})
  }) : /*#__PURE__*/_jsx(Tooltip, {
    title: intl.getMessage('tableToolBar.fullScreen', '全屏'),
    children: /*#__PURE__*/_jsx(FullscreenOutlined, {})
  });
};
export default /*#__PURE__*/React.memo(FullScreenIcon);