"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useMergedState = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireDefault(require("react"));
var _motion = _interopRequireDefault(require("../../_util/motion"));
const useCollapsible = (collapsible, prefixCls, rootPrefixCls) => {
  const isThoughtChainUnControlled = typeof collapsible === 'boolean' || collapsible?.expandedKeys === undefined;
  // ============================ Collapsible ============================
  const [enableCollapse, customizeExpandedKeys, customizeOnExpand] = _react.default.useMemo(() => {
    let baseConfig = {
      expandedKeys: [],
      onExpand: () => {}
    };
    if (!collapsible) {
      return [false, baseConfig.expandedKeys, baseConfig.onExpand];
    }
    if (typeof collapsible === 'object') {
      baseConfig = {
        ...baseConfig,
        ...collapsible
      };
    }
    return [true, baseConfig.expandedKeys, baseConfig.onExpand];
  }, [collapsible]);

  // ============================ ExpandedKeys ============================
  const [mergedExpandedKeys, setMergedExpandedKeys] = (0, _useMergedState.default)(customizeExpandedKeys, {
    value: isThoughtChainUnControlled ? undefined : customizeExpandedKeys,
    onChange: customizeOnExpand
  });

  // ============================ Event ============================
  const onItemExpand = curKey => {
    setMergedExpandedKeys(preKeys => {
      const targetPreKeys = isThoughtChainUnControlled ? preKeys : customizeExpandedKeys;
      const keys = targetPreKeys.includes(curKey) ? targetPreKeys.filter(key => key !== curKey) : [...targetPreKeys, curKey];
      customizeOnExpand?.(keys);
      return keys;
    });
  };

  // ============================ Motion ============================
  const collapseMotion = _react.default.useMemo(() => {
    if (!enableCollapse) return {};
    return {
      ...(0, _motion.default)(rootPrefixCls),
      motionAppear: false,
      leavedClassName: `${prefixCls}-content-hidden`
    };
  }, [rootPrefixCls, prefixCls, enableCollapse]);

  // ============================ Return ============================
  return [enableCollapse, mergedExpandedKeys, enableCollapse ? onItemExpand : undefined, collapseMotion];
};
var _default = exports.default = useCollapsible;