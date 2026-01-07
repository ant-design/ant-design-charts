function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { SP_ROUTE_PREFIX } from "../../../constants";
import { useAppData, useDemo, useSiteData } from 'dumi';
import React, { createElement } from 'react';
import Previewer from 'dumi/theme/builtins/Previewer';
import { useRenderer } from "../useRenderer";
import DemoErrorBoundary from "./DemoErrorBoundary";
var InternalDumiDemo = function InternalDumiDemo(props) {
  var _useSiteData = useSiteData(),
    historyType = _useSiteData.historyType;
  var _useAppData = useAppData(),
    basename = _useAppData.basename;
  var id = props.demo.id;
  var demo = useDemo(id);
  var component = demo.component,
    asset = demo.asset,
    renderOpts = demo.renderOpts;
  var _useRenderer = useRenderer({
      id: id,
      renderOpts: demo.renderOpts,
      component: demo.component
    }),
    canvasRef = _useRenderer.canvasRef;

  // hide debug demo in production
  if (process.env.NODE_ENV === 'production' && props.previewerProps.debug) return null;
  var demoNode = /*#__PURE__*/React.createElement(DemoErrorBoundary, null, renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer ? /*#__PURE__*/React.createElement("div", {
    ref: canvasRef
  }) : /*#__PURE__*/createElement(component));
  if (props.demo.inline) {
    return demoNode;
  }
  var isHashRoute = historyType === 'hash';
  return /*#__PURE__*/React.createElement(Previewer, _extends({
    asset: asset,
    demoUrl:
    // allow user override demoUrl by frontmatter
    props.previewerProps.demoUrl || // when use hash route, browser can automatically handle relative paths starting with #
    "".concat(isHashRoute ? "#" : '').concat(basename).concat(SP_ROUTE_PREFIX, "demos/").concat(props.demo.id)
  }, props.previewerProps), props.previewerProps.iframe ? null : demoNode);
};
export var DumiDemo = /*#__PURE__*/React.memo(InternalDumiDemo, function (prev, next) {
  // compare length for performance
  return JSON.stringify(prev).length === JSON.stringify(next).length;
});
if (process.env.NODE_ENV !== 'production') {
  InternalDumiDemo.displayName = 'DumiDemo';
}