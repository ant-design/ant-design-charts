import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["isMobile", "collapsed"];
import classNames from 'classnames';
import { ArrowSvgIcon } from "../SiderMenu/Arrow";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
export var CollapsedIcon = function CollapsedIcon(props) {
  var isMobile = props.isMobile,
    collapsed = props.collapsed,
    rest = _objectWithoutProperties(props, _excluded);
  var _useStyle = useStyle(props.className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (isMobile && collapsed) return null;
  return wrapSSR( /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({}, rest), {}, {
    className: classNames(props.className, hashId, _defineProperty(_defineProperty({}, "".concat(props.className, "-collapsed"), collapsed), "".concat(props.className, "-is-mobile"), isMobile)),
    children: /*#__PURE__*/_jsx(ArrowSvgIcon, {})
  })));
};