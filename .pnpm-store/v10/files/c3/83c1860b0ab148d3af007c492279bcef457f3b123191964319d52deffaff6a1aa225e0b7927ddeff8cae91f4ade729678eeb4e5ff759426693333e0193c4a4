import { version } from 'antd';
import { omitUndefined } from "../omitUndefined";
import { compareVersions } from "./index";
export var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return version;
  return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || version;
};
var openVisibleCompatible = function openVisibleCompatible(open, onOpenChange) {
  var props = compareVersions(getVersion(), '4.23.0') > -1 ? {
    open: open,
    onOpenChange: onOpenChange
  } : {
    visible: open,
    onVisibleChange: onOpenChange
  };
  return omitUndefined(props);
};
export { openVisibleCompatible };