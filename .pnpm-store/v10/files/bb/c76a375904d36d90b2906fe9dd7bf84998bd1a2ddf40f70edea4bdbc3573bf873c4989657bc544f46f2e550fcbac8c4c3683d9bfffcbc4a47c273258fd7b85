"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useListData;
var React = _interopRequireWildcard(require("react"));
function useListData(items, roles) {
  const getRoleBubbleProps = React.useCallback((bubble, index) => {
    if (typeof roles === 'function') {
      return roles(bubble, index);
    }
    if (roles) {
      return roles[bubble.role] || {};
    }
    return {};
  }, [roles]);
  return React.useMemo(() => (items || []).map((bubbleData, i) => {
    const mergedKey = bubbleData.key ?? `preset_${i}`;
    return {
      ...getRoleBubbleProps(bubbleData, i),
      ...bubbleData,
      key: mergedKey
    };
  }), [items, getRoleBubbleProps]);
}