"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDocumentTitle = useDocumentTitle;
var _react = require("react");
var _isBrowser = require("../../isBrowser");
function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  (0, _react.useEffect)(function () {
    if ((0, _isBrowser.isBrowser)() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title, titleText]);
}