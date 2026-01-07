var _navigator;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconArrowDown } from '@ant-design/icons-svg/inline-svg/outlined/arrow-down.svg';
import { ReactComponent as IconArrowUp } from '@ant-design/icons-svg/inline-svg/outlined/arrow-up.svg';
import { ReactComponent as IconSearch } from '@ant-design/icons-svg/inline-svg/outlined/search.svg';
import { useSiteSearch } from 'dumi';
import SearchResult from 'dumi/theme/slots/SearchResult';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "./Input";
import { Mask } from "./Mask";
import "./index.less";
export { Input as SearchInput } from "./Input";
export { Mask as SearchMask } from "./Mask";
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.platform : '');

/** Determine if the element that triggered the event is an input element */
var isInput = function isInput(target) {
  return ['TEXTAREA', 'INPUT'].includes(target.tagName) || target.contentEditable === 'true';
};
var SearchBar = function SearchBar() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focusing = _useState2[0],
    setFocusing = _useState2[1];
  var inputRef = useRef(null);
  var modalInputRef = useRef(null);
  var _useState3 = useState('⌘'),
    _useState4 = _slicedToArray(_useState3, 2),
    symbol = _useState4[0],
    setSymbol = _useState4[1];
  var _useSiteSearch = useSiteSearch(),
    keywords = _useSiteSearch.keywords,
    setKeywords = _useSiteSearch.setKeywords,
    result = _useSiteSearch.result,
    loading = _useSiteSearch.loading,
    loadSearchData = _useSiteSearch.load;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    modalVisible = _useState6[0],
    setModalVisible = _useState6[1];
  useEffect(function () {
    // why put useEffect?
    // to avoid Text content mismatch between server & client in ssr
    if (!isAppleDevice) {
      setSymbol('Ctrl');
    }
    var handler = function handler(ev) {
      if ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k' || ev.key === '/' && !isInput(ev.target)) {
        ev.preventDefault();
        if (inputRef.current) {
          var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
            top = _inputRef$current$get.top,
            bottom = _inputRef$current$get.bottom,
            left = _inputRef$current$get.left,
            right = _inputRef$current$get.right;
          var isInViewport = top >= 0 && left >= 0 && bottom <= window.innerHeight && right <= window.innerWidth;
          if (isInViewport) {
            inputRef.current.focus();
          } else {
            setKeywords('');
            setModalVisible(true);
            setTimeout(function () {
              var _modalInputRef$curren;
              (_modalInputRef$curren = modalInputRef.current) === null || _modalInputRef$curren === void 0 ? void 0 : _modalInputRef$curren.focus();
            });
          }
        }
      }
      if (ev.key === 'Escape') {
        ev.preventDefault();
        setModalVisible(false);
      }
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-bar"
  }, /*#__PURE__*/React.createElement(IconSearch, {
    className: "dumi-default-search-bar-svg"
  }), /*#__PURE__*/React.createElement(Input, {
    onFocus: function onFocus() {
      setFocusing(true);
      loadSearchData();
    },
    onMouseEnter: function onMouseEnter() {
      loadSearchData();
    },
    onBlur: function onBlur() {
      // wait for item click
      setTimeout(function () {
        setFocusing(false);
      }, 1);
    },
    onChange: function onChange(keywords) {
      return setKeywords(keywords);
    },
    ref: inputRef
  }), /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-shortcut"
  }, symbol, " K"), keywords.trim() && focusing && !modalVisible && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-popover"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SearchResult, {
    data: result,
    loading: loading
  }))), /*#__PURE__*/React.createElement(Mask, {
    visible: modalVisible,
    onMaskClick: function onMaskClick() {
      setModalVisible(false);
    },
    onClose: function onClose() {
      return setKeywords('');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    className: "dumi-default-search-bar-svg"
  }), /*#__PURE__*/React.createElement(Input, {
    onFocus: function onFocus() {
      return setFocusing(true);
    },
    onBlur: function onBlur() {
      // wait for item click
      setTimeout(function () {
        setFocusing(false);
      }, 1);
    },
    onChange: function onChange(keywords) {
      return setKeywords(keywords);
    },
    ref: modalInputRef
  })), /*#__PURE__*/React.createElement(SearchResult, {
    data: result,
    loading: loading,
    onItemSelect: function onItemSelect() {
      setModalVisible(false);
    }
  }), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("ul", {
    className: "dumi-default-search-modal-commands"
  }, /*#__PURE__*/React.createElement("li", {
    className: "dumi-default-search-modal-commands-arrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, /*#__PURE__*/React.createElement(IconArrowUp, {
    width: "10px",
    height: "10px",
    fill: "rgba(0, 0, 0, 0.45)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, /*#__PURE__*/React.createElement(IconArrowDown, {
    width: "10px",
    height: "10px",
    fill: "rgba(0, 0, 0, 0.45)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-modal-commands-text"
  }, "to navigate")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, "esc"), /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-search-modal-commands-text"
  }, "to close"))))));
};
export default SearchBar;