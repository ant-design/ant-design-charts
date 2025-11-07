import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import Card from "./components/Card";
import Divider from "./components/Divider";
import TabPane from "./components/TabPane";
import { jsx as _jsx } from "react/jsx-runtime";
var Group = function Group(props) {
  return /*#__PURE__*/_jsx(Card, _objectSpread({
    bodyStyle: {
      padding: 0
    }
  }, props));
};

// 当前不对底层 Card 做封装，仅挂载子组件，直接导出
// @ts-ignore
var ProCard = Card;
ProCard.isProCard = true;
ProCard.Divider = Divider;
ProCard.TabPane = TabPane;
ProCard.Group = Group;
export default ProCard;