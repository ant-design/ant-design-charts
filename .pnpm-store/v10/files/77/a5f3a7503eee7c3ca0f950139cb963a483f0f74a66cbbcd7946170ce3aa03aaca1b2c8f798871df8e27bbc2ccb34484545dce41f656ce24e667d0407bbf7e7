import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["modalProps"];
import { Modal } from 'antd';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import { ProHelpPanel } from "./ProHelpPanel";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 渲染一个模态对话框，其中显示了一个 ProHelpPanel。
 * @param modalProps 要传递给 Modal 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
export var ProHelpModal = function ProHelpModal(_ref) {
  var modalProps = _ref.modalProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useMergedState = useMergedState(false, {
      value: modalProps === null || modalProps === void 0 ? void 0 : modalProps.open,
      onChange: modalProps === null || modalProps === void 0 ? void 0 : modalProps.afterClose
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    modalOpen = _useMergedState2[0],
    setModalOpen = _useMergedState2[1];
  return /*#__PURE__*/_jsx(Modal, _objectSpread(_objectSpread({
    onCancel: function onCancel() {
      setModalOpen(false);
    },
    styles: {
      body: {
        margin: -24
      }
    },
    centered: true,
    closable: false,
    footer: null,
    width: 720,
    open: modalOpen,
    maskClosable: true
  }, modalProps), {}, {
    children: /*#__PURE__*/_jsx(ProHelpPanel, _objectSpread(_objectSpread({
      height: 648
    }, props), {}, {
      onClose: function onClose() {
        return setModalOpen(false);
      }
    }))
  }));
};