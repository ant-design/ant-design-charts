import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ColumnHeightOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { menuOverlayCompatible } from '@ant-design/pro-utils';
import { Dropdown, Tooltip } from 'antd';
import React, { useContext } from 'react';
import { TableContext } from "../../Store/Provide";
import { jsx as _jsx } from "react/jsx-runtime";
var DensityIcon = function DensityIcon(props) {
  var _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/_jsx(ColumnHeightOutlined, {}) : _props$icon;
  var counter = useContext(TableContext);
  var intl = useIntl();
  var dropdownProps = menuOverlayCompatible({
    selectedKeys: [counter.tableSize],
    onClick: function onClick(_ref) {
      var _counter$setTableSize;
      var key = _ref.key;
      (_counter$setTableSize = counter.setTableSize) === null || _counter$setTableSize === void 0 || _counter$setTableSize.call(counter, key);
    },
    style: {
      width: 80
    },
    items: [{
      key: 'large',
      label: intl.getMessage('tableToolBar.densityLarger', '宽松')
    }, {
      key: 'middle',
      label: intl.getMessage('tableToolBar.densityMiddle', '中等')
    }, {
      key: 'small',
      label: intl.getMessage('tableToolBar.densitySmall', '紧凑')
    }]
  });
  return /*#__PURE__*/_jsx(Dropdown, _objectSpread(_objectSpread({}, dropdownProps), {}, {
    trigger: ['click'],
    children: /*#__PURE__*/_jsx(Tooltip, {
      title: intl.getMessage('tableToolBar.density', '表格密度'),
      children: icon
    })
  }));
};
export default /*#__PURE__*/React.memo(DensityIcon);