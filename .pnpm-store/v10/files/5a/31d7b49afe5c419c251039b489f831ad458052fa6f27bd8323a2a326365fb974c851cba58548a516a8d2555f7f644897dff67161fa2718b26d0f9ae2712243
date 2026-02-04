import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

var debounce = function debounce(callback) {
  var reqID = null;

  var exec = function exec(args) {
    return function () {
      // @ts-ignore TS2488
      callback.apply(void 0, args);
    };
  };

  return function () {
    if (reqID) {
      cancelAnimationFrame(reqID);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    reqID = requestAnimationFrame(exec(args));
  };
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var ReadingProgressCore = function ReadingProgressCore() {};

var ReadingProgressWindow = /*#__PURE__*/function (_ReadingProgressCore) {
  _inheritsLoose(ReadingProgressWindow, _ReadingProgressCore);

  function ReadingProgressWindow() {
    var _this;

    _this = _ReadingProgressCore.apply(this, arguments) || this;

    _this.measureWrapperHeight = function () {
      var targetElHeihgt = document.body.getBoundingClientRect().height || 0;
      return Math.round(targetElHeihgt - _this.getViewportHeight());
    };

    _this.getViewportHeight = function () {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    _this.getProgress = function () {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      return Math.round(top / _this.measureWrapperHeight() * 100);
    };

    return _this;
  }

  _createClass(ReadingProgressWindow, [{
    key: "rootSelector",
    get: function get() {
      return window;
    }
  }]);

  return ReadingProgressWindow;
}(ReadingProgressCore);

var ReadingProgressElement = /*#__PURE__*/function (_ReadingProgressCore2) {
  _inheritsLoose(ReadingProgressElement, _ReadingProgressCore2);

  function ReadingProgressElement(_ref) {
    var _this2;

    var rootEl = _ref.rootEl,
        targetEl = _ref.targetEl;
    _this2 = _ReadingProgressCore2.call(this) || this;

    _this2.measureWrapperHeight = function () {
      var _this2$targetEl;

      var targetElHeight = ((_this2$targetEl = _this2.targetEl) == null ? void 0 : _this2$targetEl.getBoundingClientRect().height) || 0;
      return Math.round(targetElHeight - _this2.getViewportHeight());
    };

    _this2.getViewportHeight = function () {
      var _this2$rootEl;

      return ((_this2$rootEl = _this2.rootEl) == null ? void 0 : _this2$rootEl.clientHeight) || 0;
    };

    _this2.getProgress = function () {
      var _this2$rootEl2;

      var top = ((_this2$rootEl2 = _this2.rootEl) == null ? void 0 : _this2$rootEl2.scrollTop) || 0;
      return Math.round(top / _this2.measureWrapperHeight() * 100);
    };

    _this2.rootEl = document.querySelector(rootEl);
    _this2.targetEl = document.querySelector(targetEl);
    return _this2;
  }

  _createClass(ReadingProgressElement, [{
    key: "rootSelector",
    get: function get() {
      return this.rootEl;
    }
  }]);

  return ReadingProgressElement;
}(ReadingProgressCore);

var ReadingProgress = /*#__PURE__*/function () {
  function ReadingProgress(_ref2) {
    var _this3 = this;

    var rootEl = _ref2.rootEl,
        targetEl = _ref2.targetEl;

    this.getViewportHeight = function () {
      return _this3.rp.getViewportHeight();
    };

    this.getProgress = function () {
      return _this3.rp.getProgress();
    };

    this.rp = typeof rootEl === 'string' && typeof targetEl === 'string' ? new ReadingProgressElement({
      rootEl: rootEl,
      targetEl: targetEl
    }) : new ReadingProgressWindow();
  }

  _createClass(ReadingProgress, [{
    key: "rootSelector",
    get: function get() {
      return this.rp.rootSelector;
    }
  }]);

  return ReadingProgress;
}();

var useReadingProgress = function useReadingProgress(props) {
  var _rp$current;

  var rp = useRef();
  useEffect(function () {
    rp.current = new ReadingProgress({
      rootEl: props == null ? void 0 : props.rootEl,
      targetEl: props == null ? void 0 : props.targetEl
    });
  }, [props]);

  var _useState = useState(((_rp$current = rp.current) == null ? void 0 : _rp$current.getProgress()) || 0),
      value = _useState[0],
      updateProgressValue = _useState[1];

  var update = useCallback(function () {
    var _rp$current2;

    updateProgressValue(((_rp$current2 = rp.current) == null ? void 0 : _rp$current2.getProgress()) || 0);
  }, []);
  var debounceUpdate = useCallback(debounce(function () {
    update();
  }), []);
  useEffect(function () {
    var _rp$current3;

    if ((_rp$current3 = rp.current) != null && _rp$current3.rootSelector) {
      rp.current.rootSelector.addEventListener('scroll', debounceUpdate);
    }

    window.addEventListener('resize', debounceUpdate);
    update();
    return function () {
      var _rp$current4;

      if ((_rp$current4 = rp.current) != null && _rp$current4.rootSelector) {
        rp.current.rootSelector.removeEventListener('scroll', debounceUpdate);
      }

      window.removeEventListener('resize', debounceUpdate);
    };
  }, [update, debounceUpdate]);
  return {
    value: value
  };
};

var ReadingProgress$1 = function ReadingProgress(_ref) {
  var targetEl = _ref.targetEl,
      rootEl = _ref.rootEl,
      children = _ref.children;
  var readingProgress = useReadingProgress({
    targetEl: targetEl,
    rootEl: rootEl
  });
  return children(readingProgress);
};

var Root = function Root() {};

var RootEl = /*#__PURE__*/function (_Root) {
  _inheritsLoose(RootEl, _Root);

  function RootEl(el) {
    var _this;

    _this = _Root.call(this) || this;
    _this.el = el;
    return _this;
  }

  var _proto = RootEl.prototype;

  _proto.isScrolledToBottom = function isScrolledToBottom() {
    return this.scrollTop + this.outerHeight >= this.scrollHeight;
  };

  _proto.registerScrollEvent = function registerScrollEvent(callback) {
    this.el.addEventListener('scroll', callback);
  };

  _proto.unregisterScrollEvent = function unregisterScrollEvent(callback) {
    this.el.removeEventListener('scroll', callback);
  };

  RootEl.create = function create(selector) {
    var el = document.querySelector(selector);

    if (!el) {
      throw new Error('element is not found.');
    }

    return new RootEl(el);
  };

  _createClass(RootEl, [{
    key: "top",
    get: function get() {
      return this.el.getBoundingClientRect().top;
    }
  }, {
    key: "outerHeight",
    get: function get() {
      return this.el.getBoundingClientRect().height;
    }
  }, {
    key: "scrollTop",
    get: function get() {
      return this.el.scrollTop;
    }
  }, {
    key: "scrollHeight",
    get: function get() {
      return this.el.scrollHeight;
    }
  }]);

  return RootEl;
}(Root);

var RootWindow = /*#__PURE__*/function (_Root) {
  _inheritsLoose(RootWindow, _Root);

  function RootWindow() {
    return _Root.apply(this, arguments) || this;
  }

  var _proto = RootWindow.prototype;

  _proto.isScrolledToBottom = function isScrolledToBottom() {
    return this.scrollTop + this.outerHeight >= this.scrollHeight;
  };

  _proto.registerScrollEvent = function registerScrollEvent(callback) {
    document.addEventListener('scroll', callback);
  };

  _proto.unregisterScrollEvent = function unregisterScrollEvent(callback) {
    document.removeEventListener('scroll', callback);
  };

  RootWindow.create = function create() {
    return new RootWindow();
  };

  _createClass(RootWindow, [{
    key: "outerHeight",
    get: function get() {
      return window.innerHeight;
    }
  }, {
    key: "scrollTop",
    get: function get() {
      return document.documentElement.scrollTop;
    }
  }, {
    key: "scrollHeight",
    get: function get() {
      return document.documentElement.scrollHeight;
    }
  }]);

  return RootWindow;
}(Root);

var RootFactory = /*#__PURE__*/function () {
  function RootFactory() {}

  RootFactory.create = function create(selector) {
    if (!selector) {
      return RootWindow.create();
    }

    return RootEl.create(selector);
  };

  return RootFactory;
}();

var useScrollspy = function useScrollspy(_ref) {
  var sectionRefs = _ref.sectionRefs,
      rootSelector = _ref.rootSelector,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset;
  var rootEl = useRef(null);
  useEffect(function () {
    rootEl.current = RootFactory.create(rootSelector);
  }, [rootSelector]);
  var isScrolledToBottom = useCallback(function () {
    if (!rootEl.current) {
      return false;
    }

    return rootEl.current.isScrolledToBottom();
  }, [rootEl]);
  var isElementInViewport = useCallback(function (element) {
    if (!rootEl.current) {
      return false;
    }

    var innerScrollTop = rootEl.current.scrollTop;
    var innerScrollBottom = innerScrollTop + rootEl.current.outerHeight;
    var elementRect = element.getBoundingClientRect();
    var elementScrollTop = rootEl.current instanceof RootEl ? innerScrollTop + elementRect.top - rootEl.current.top + offset : innerScrollTop + elementRect.top + offset;
    var elementScrollBottom = elementScrollTop + elementRect.height;
    return [elementScrollTop < innerScrollBottom, elementScrollBottom > innerScrollTop].every(function (v) {
      return v;
    });
  }, [rootEl, offset]);
  var getElementsStatusInViewport = useCallback(function () {
    return sectionRefs.map(function (sectionRef) {
      if (sectionRef.current) {
        return isElementInViewport(sectionRef.current);
      }

      return false;
    });
  }, [isElementInViewport, sectionRefs]);

  var _useState = useState([]),
      elementsStatusInViewport = _useState[0],
      updateElementsStatusInViewport = _useState[1];

  var currentElementIndexInViewport = useMemo(function () {
    return elementsStatusInViewport.findIndex(function (status) {
      return status;
    });
  }, [elementsStatusInViewport]);
  var spy = useCallback(function () {
    var newElementsStatusInViewport = isScrolledToBottom() ? [].concat(new Array(sectionRefs.length - 1).fill(false).map(function (v) {
      return v;
    }), [true]) : getElementsStatusInViewport();
    updateElementsStatusInViewport(newElementsStatusInViewport);
  }, [getElementsStatusInViewport, isScrolledToBottom, sectionRefs]);
  useEffect(function () {
    spy();

    if (rootEl.current) {
      rootEl.current.registerScrollEvent(spy);
    }

    return function () {
      if (rootEl.current) {
        rootEl.current.unregisterScrollEvent(spy);
      }
    };
  }, [spy]);
  return {
    elementsStatusInViewport: elementsStatusInViewport,
    currentElementIndexInViewport: currentElementIndexInViewport
  };
};

var Scrollspy = function Scrollspy(_ref) {
  var children = _ref.children,
      sectionRefs = _ref.sectionRefs,
      rootSelector = _ref.rootSelector,
      offset = _ref.offset;

  var _useScrollspy = useScrollspy({
    sectionRefs: sectionRefs,
    rootSelector: rootSelector,
    offset: offset
  }),
      elementsStatusInViewport = _useScrollspy.elementsStatusInViewport,
      currentElementIndexInViewport = _useScrollspy.currentElementIndexInViewport;

  return children({
    elementsStatusInViewport: elementsStatusInViewport,
    currentElementIndexInViewport: currentElementIndexInViewport
  });
};

var Pagination = function Pagination(_ref) {
  var _this = this;

  var currentPage = _ref.currentPage,
      totalPage = _ref.totalPage,
      _ref$middlePagesSibli = _ref.middlePagesSiblingCount,
      middlePagesSiblingCount = _ref$middlePagesSibli === void 0 ? 2 : _ref$middlePagesSibli,
      _ref$edgePageCount = _ref.edgePageCount,
      edgePageCount = _ref$edgePageCount === void 0 ? 2 : _ref$edgePageCount;

  this.getAllPages = function () {
    return [].concat(Array(_this.totalPage)).fill(1).map(function (_, i) {
      return i + 1;
    });
  };

  this.getMiddlePageCount = function () {
    return _this.middlePagesSiblingCount * 2 + 1;
  };

  this.isReachedToFirst = function () {
    return _this.currentPage <= _this.middlePagesSiblingCount;
  };

  this.isReachedToLast = function () {
    return _this.currentPage + _this.middlePagesSiblingCount >= _this.totalPage;
  };

  this.getAllPreviousPages = function () {
    return _this.getAllPages().slice(0, _this.getMiddlePages()[0] - 1);
  };

  this.getAllNextPages = function () {
    var totalPageItems = _this.getAllPages();

    var middlePages = _this.getMiddlePages();

    return totalPageItems.slice(middlePages[middlePages.length - 1], totalPageItems[totalPageItems.length]);
  };

  this.hasPreviousPage = function () {
    return _this.currentPage > 1;
  };

  this.hasNextPage = function () {
    return _this.totalPage > _this.currentPage;
  };

  this.getMiddlePages = function () {
    var totalPageItems = _this.getAllPages();

    var middlePageCount = _this.getMiddlePageCount();

    if (_this.isReachedToFirst()) {
      return totalPageItems.slice(0, middlePageCount);
    }

    if (_this.isReachedToLast()) {
      return totalPageItems.slice(-middlePageCount);
    }

    return totalPageItems.slice(_this.currentPage - _this.middlePagesSiblingCount - 1, _this.currentPage + _this.middlePagesSiblingCount);
  };

  this.getPreviousPages = function () {
    if (_this.isReachedToFirst()) {
      return [];
    }

    if (_this.getAllPreviousPages().length < 1) {
      return [];
    }

    return _this.getAllPages().slice(0, _this.edgePageCount).filter(function (p) {
      return !_this.getMiddlePages().includes(p);
    });
  };

  this.getNextPages = function () {
    if (_this.isReachedToLast()) {
      return [];
    }

    if (_this.getAllNextPages().length < 1) {
      return [];
    }

    var totalPages = _this.getAllPages();

    return totalPages.slice(totalPages.length - _this.edgePageCount, totalPages.length).filter(function (p) {
      return !_this.getMiddlePages().includes(p);
    });
  };

  this.isPreviousTruncable = function () {
    return _this.getAllPreviousPages().filter(function (p) {
      return !_this.getPreviousPages().includes(p) && !_this.getMiddlePages().includes(p);
    }).length > 0;
  };

  this.isNextTruncable = function () {
    return _this.getAllNextPages().filter(function (p) {
      return !_this.getNextPages().includes(p) && !_this.getMiddlePages().includes(p);
    }).length > 0;
  };

  this.currentPage = currentPage;
  this.totalPage = totalPage;
  this.middlePagesSiblingCount = middlePagesSiblingCount;
  this.edgePageCount = edgePageCount;
};

var MIDDLE_PAGES_SIBLING_COUNT = 2;
var EDGE_PAGE_COUNT = 2;
var usePagination = function usePagination(_ref) {
  var totalPage = _ref.totalPage,
      currentPage = _ref.currentPage,
      _ref$middlePagesSibli = _ref.middlePagesSiblingCount,
      middlePagesSiblingCount = _ref$middlePagesSibli === void 0 ? MIDDLE_PAGES_SIBLING_COUNT : _ref$middlePagesSibli,
      _ref$edgePageCount = _ref.edgePageCount,
      edgePageCount = _ref$edgePageCount === void 0 ? EDGE_PAGE_COUNT : _ref$edgePageCount;
  var pagination = useMemo(function () {
    return new Pagination({
      totalPage: totalPage,
      currentPage: currentPage,
      middlePagesSiblingCount: middlePagesSiblingCount,
      edgePageCount: edgePageCount
    });
  }, [totalPage, currentPage, middlePagesSiblingCount, edgePageCount]);
  return {
    getMiddlePages: pagination.getMiddlePages,
    hasPreviousPage: pagination.hasPreviousPage,
    hasNextPage: pagination.hasNextPage,
    getPreviousPages: pagination.getPreviousPages,
    getNextPages: pagination.getNextPages,
    isPreviousTruncable: pagination.isPreviousTruncable,
    isNextTruncable: pagination.isNextTruncable,
    totalPage: totalPage,
    currentPage: currentPage
  };
};

var Pagination$1 = function Pagination(_ref) {
  var children = _ref.children,
      totalPage = _ref.totalPage,
      currentPage = _ref.currentPage,
      middlePagesSiblingCount = _ref.middlePagesSiblingCount,
      edgePageCount = _ref.edgePageCount;
  var pagination = usePagination({
    totalPage: totalPage,
    currentPage: currentPage,
    middlePagesSiblingCount: middlePagesSiblingCount,
    edgePageCount: edgePageCount
  });
  return children(pagination);
};

export { Pagination$1 as Pagination, ReadingProgress$1 as ReadingProgress, Scrollspy, usePagination, useReadingProgress, useScrollspy };
//# sourceMappingURL=ghostui.esm.js.map
