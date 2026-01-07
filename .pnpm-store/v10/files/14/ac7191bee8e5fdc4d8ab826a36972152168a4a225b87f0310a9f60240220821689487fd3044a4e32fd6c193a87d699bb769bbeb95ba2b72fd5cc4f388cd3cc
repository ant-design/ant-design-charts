import useMergedState from "rc-util/es/hooks/useMergedState";
import React from 'react';
import initCollapseMotion from "../../_util/motion";
const useCollapsible = (collapsible, prefixCls, rootPrefixCls) => {
  const isThoughtChainUnControlled = typeof collapsible === 'boolean' || collapsible?.expandedKeys === undefined;
  // ============================ Collapsible ============================
  const [enableCollapse, customizeExpandedKeys, customizeOnExpand] = React.useMemo(() => {
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
  const [mergedExpandedKeys, setMergedExpandedKeys] = useMergedState(customizeExpandedKeys, {
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
  const collapseMotion = React.useMemo(() => {
    if (!enableCollapse) return {};
    return {
      ...initCollapseMotion(rootPrefixCls),
      motionAppear: false,
      leavedClassName: `${prefixCls}-content-hidden`
    };
  }, [rootPrefixCls, prefixCls, enableCollapse]);

  // ============================ Return ============================
  return [enableCollapse, mergedExpandedKeys, enableCollapse ? onItemExpand : undefined, collapseMotion];
};
export default useCollapsible;