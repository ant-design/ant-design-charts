import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import { ElementEvent } from '@antv/g';
import { clamp, debounce } from '@antv/util';
import { animate, onAnimateFinished } from '../../animation';
import { Component } from '../../core';
import { Group } from '../../shapes';
import { BBox, classNames, hide, scaleToPixel, select, show, splitStyle, subStyleProps, transpose, visibility, } from '../../util';
import { button } from '../marker/symbol';
var CLASS_NAMES = classNames({
    prevBtnGroup: 'prev-btn-group',
    prevBtn: 'prev-btn',
    nextBtnGroup: 'next-btn-group',
    nextBtn: 'next-btn',
    pageInfoGroup: 'page-info-group',
    pageInfo: 'page-info',
    playWindow: 'play-window',
    contentGroup: 'content-group',
    controller: 'controller',
    clipPath: 'clip-path',
}, 'navigator');
var Navigator = /** @class */ (function (_super) {
    __extends(Navigator, _super);
    function Navigator(options) {
        var _this = _super.call(this, options, {
            x: 0,
            y: 0,
            animate: {
                easing: 'linear',
                duration: 200,
                fill: 'both',
            },
            buttonCursor: 'pointer',
            buttonFill: 'black',
            buttonD: button(0, 0, 6),
            buttonSize: 12,
            controllerPadding: 5,
            controllerSpacing: 5,
            formatter: function (curr, total) { return "".concat(curr, "/").concat(total); },
            defaultPage: 0,
            loop: false,
            orientation: 'horizontal',
            pageNumFill: 'black',
            pageNumFontSize: 12,
            pageNumTextAlign: 'start',
            pageNumTextBaseline: 'middle',
        }) || this;
        _this.playState = 'idle';
        _this.contentGroup = _this.appendChild(new Group({ class: CLASS_NAMES.contentGroup.name }));
        _this.playWindow = _this.contentGroup.appendChild(new Group({ class: CLASS_NAMES.playWindow.name }));
        _this.innerCurrPage = _this.defaultPage;
        return _this;
    }
    Object.defineProperty(Navigator.prototype, "defaultPage", {
        get: function () {
            var defaultPage = this.attributes.defaultPage;
            return clamp(defaultPage, 0, Math.max(this.pageViews.length - 1, 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigator.prototype, "pageViews", {
        get: function () {
            return this.playWindow.children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigator.prototype, "controllerShape", {
        // todo fixme
        get: function () {
            return this.totalPages > 1 ? { width: 55, height: 0 } : { width: 0, height: 0 };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigator.prototype, "pageShape", {
        get: function () {
            var pageViews = this.pageViews;
            var _a = __read(transpose(pageViews.map(function (pageView) {
                var _a = pageView.getBBox(), width = _a.width, height = _a.height;
                return [width, height];
            })).map(function (arr) { return Math.max.apply(Math, __spreadArray([], __read(arr), false)); }), 2), maxWidth = _a[0], maxHeight = _a[1];
            var _b = this.attributes, _c = _b.pageWidth, pageWidth = _c === void 0 ? maxWidth : _c, _d = _b.pageHeight, pageHeight = _d === void 0 ? maxHeight : _d;
            return { pageWidth: pageWidth, pageHeight: pageHeight };
        },
        enumerable: false,
        configurable: true
    });
    Navigator.prototype.getContainer = function () {
        return this.playWindow;
    };
    Object.defineProperty(Navigator.prototype, "totalPages", {
        get: function () {
            return this.pageViews.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigator.prototype, "currPage", {
        get: function () {
            return this.innerCurrPage;
        },
        enumerable: false,
        configurable: true
    });
    Navigator.prototype.getBBox = function () {
        var _a = _super.prototype.getBBox.call(this), x = _a.x, y = _a.y;
        var controllerShape = this.controllerShape;
        var _b = this.pageShape, pageWidth = _b.pageWidth, pageHeight = _b.pageHeight;
        return new BBox(x, y, pageWidth + controllerShape.width, pageHeight);
    };
    Navigator.prototype.goTo = function (pageNum) {
        var _this = this;
        var animateOptions = this.attributes.animate;
        var _a = this, currPage = _a.currPage, playState = _a.playState, playWindow = _a.playWindow, pageViews = _a.pageViews;
        if (playState !== 'idle' || pageNum < 0 || pageViews.length <= 0 || pageNum >= pageViews.length)
            return null;
        pageViews[currPage].setLocalPosition(0, 0);
        this.prepareFollowingPage(pageNum);
        var _b = __read(this.getFollowingPageDiff(pageNum), 2), dx = _b[0], dy = _b[1];
        this.playState = 'running';
        var animation = animate(playWindow, [{ transform: "translate(0, 0)" }, { transform: "translate(".concat(-dx, ", ").concat(-dy, ")") }], animateOptions);
        onAnimateFinished(animation, function () {
            _this.innerCurrPage = pageNum;
            _this.playState = 'idle';
            _this.setVisiblePages([pageNum]);
            _this.updatePageInfo();
        });
        return animation;
    };
    Navigator.prototype.prev = function () {
        var loop = this.attributes.loop;
        var pages = this.pageViews.length;
        var page = this.currPage;
        if (!loop && page <= 0)
            return null;
        var following = loop ? (page - 1 + pages) % pages : clamp(page - 1, 0, pages);
        return this.goTo(following);
    };
    Navigator.prototype.next = function () {
        var loop = this.attributes.loop;
        var pages = this.pageViews.length;
        var page = this.currPage;
        if (!loop && page >= pages - 1)
            return null;
        var following = loop ? (page + 1) % pages : clamp(page + 1, 0, pages);
        return this.goTo(following);
    };
    Navigator.prototype.renderClipPath = function (container) {
        var _a = this.pageShape, pageWidth = _a.pageWidth, pageHeight = _a.pageHeight;
        if (!pageWidth || !pageHeight) {
            this.contentGroup.style.clipPath = undefined;
            return;
        }
        this.clipPath = container.maybeAppendByClassName(CLASS_NAMES.clipPath, 'rect').styles({
            width: pageWidth,
            height: pageHeight,
        });
        this.contentGroup.attr('clipPath', this.clipPath.node());
    };
    Navigator.prototype.setVisiblePages = function (pages) {
        this.playWindow.children.forEach(function (page, index) {
            if (pages.includes(index))
                show(page);
            else
                hide(page);
        });
    };
    Navigator.prototype.adjustControllerLayout = function () {
        var _a = this, prevBtn = _a.prevBtnGroup, nextBtn = _a.nextBtnGroup, pageNum = _a.pageInfoGroup;
        var _b = this.attributes, orientation = _b.orientation, padding = _b.controllerPadding;
        var _c = pageNum.getBBox(), pW = _c.width, pH = _c.height;
        var _d = __read(orientation === 'horizontal' ? [-180, 0] : [-90, 90], 2), r1 = _d[0], r2 = _d[1];
        prevBtn.setLocalEulerAngles(r1);
        nextBtn.setLocalEulerAngles(r2);
        var _e = prevBtn.getBBox(), bpW = _e.width, bpH = _e.height;
        var _f = nextBtn.getBBox(), bnW = _f.width, bnH = _f.height;
        var maxWidth = Math.max(bpW, pW, bnW);
        var _g = orientation === 'horizontal'
            ? {
                offset: [
                    [0, 0],
                    [bpW / 2 + padding, 0],
                    [bpW + pW + padding * 2, 0],
                ],
                textAlign: 'start',
            }
            : {
                offset: [
                    [maxWidth / 2, -bpH - padding],
                    [maxWidth / 2, 0],
                    [maxWidth / 2, bnH + padding],
                ],
                textAlign: 'center',
            }, _h = __read(_g.offset, 3), _j = __read(_h[0], 2), o1x = _j[0], o1y = _j[1], _k = __read(_h[1], 2), o2x = _k[0], o2y = _k[1], _l = __read(_h[2], 2), o3x = _l[0], o3y = _l[1], textAlign = _g.textAlign;
        var pageNumText = pageNum.querySelector('text');
        pageNumText && (pageNumText.style.textAlign = textAlign);
        prevBtn.setLocalPosition(o1x, o1y);
        pageNum.setLocalPosition(o2x, o2y);
        nextBtn.setLocalPosition(o3x, o3y);
    };
    Navigator.prototype.updatePageInfo = function () {
        var _a;
        var _b = this, currPage = _b.currPage, pageViews = _b.pageViews, formatter = _b.attributes.formatter;
        if (pageViews.length < 2)
            return;
        (_a = this.pageInfoGroup.querySelector(CLASS_NAMES.pageInfo.class)) === null || _a === void 0 ? void 0 : _a.attr('text', formatter(currPage + 1, pageViews.length));
        this.adjustControllerLayout();
    };
    Navigator.prototype.getFollowingPageDiff = function (pageNum) {
        var currPage = this.currPage;
        if (currPage === pageNum)
            return [0, 0];
        var orientation = this.attributes.orientation;
        var _a = this.pageShape, pageWidth = _a.pageWidth, pageHeight = _a.pageHeight;
        var sign = pageNum < currPage ? -1 : 1;
        return orientation === 'horizontal' ? [sign * pageWidth, 0] : [0, sign * pageHeight];
    };
    Navigator.prototype.prepareFollowingPage = function (pageNum) {
        var _a = this, currPage = _a.currPage, pageViews = _a.pageViews;
        this.setVisiblePages([pageNum, currPage]);
        if (pageNum !== currPage) {
            var _b = __read(this.getFollowingPageDiff(pageNum), 2), dx = _b[0], dy = _b[1];
            pageViews[pageNum].setLocalPosition(dx, dy);
        }
    };
    Navigator.prototype.renderController = function (container) {
        var _this = this;
        var spacing = this.attributes.controllerSpacing;
        var _a = this.pageShape, pageWidth = _a.pageWidth, pageHeight = _a.pageHeight;
        var visible = this.pageViews.length >= 2;
        var group = container.maybeAppendByClassName(CLASS_NAMES.controller, 'g');
        visibility(group.node(), visible);
        if (!visible)
            return;
        var style = subStyleProps(this.attributes, 'button');
        var textStyle = subStyleProps(this.attributes, 'pageNum');
        var _b = __read(splitStyle(style), 2), _c = _b[0], groupStyle = _b[1], size = _c.size, pathStyle = __rest(_c, ["size"]);
        var whetherToAddEventListener = !group.select(CLASS_NAMES.prevBtnGroup.class).node();
        var prevBtnGroup = group.maybeAppendByClassName(CLASS_NAMES.prevBtnGroup, 'g').styles(groupStyle);
        this.prevBtnGroup = prevBtnGroup.node();
        var prevBtn = prevBtnGroup.maybeAppendByClassName(CLASS_NAMES.prevBtn, 'path');
        var nextBtnGroup = group.maybeAppendByClassName(CLASS_NAMES.nextBtnGroup, 'g').styles(groupStyle);
        this.nextBtnGroup = nextBtnGroup.node();
        var nextBtn = nextBtnGroup.maybeAppendByClassName(CLASS_NAMES.nextBtn, 'path');
        [prevBtn, nextBtn].forEach(function (btn) {
            btn.styles(__assign(__assign({}, pathStyle), { transformOrigin: 'center' }));
            scaleToPixel(btn.node(), size, true);
        });
        var pageInfoGroup = group.maybeAppendByClassName(CLASS_NAMES.pageInfoGroup, 'g');
        this.pageInfoGroup = pageInfoGroup.node();
        pageInfoGroup.maybeAppendByClassName(CLASS_NAMES.pageInfo, 'text').styles(textStyle);
        this.updatePageInfo();
        // group.node().style.transform = `translate(${pageWidth + spacing}, ${pageHeight / 2})`;
        // put it on the right side of the container
        group.node().setLocalPosition(pageWidth + spacing, pageHeight / 2);
        if (whetherToAddEventListener) {
            this.prevBtnGroup.addEventListener('click', function () {
                _this.prev();
            });
            this.nextBtnGroup.addEventListener('click', function () {
                _this.next();
            });
        }
    };
    Navigator.prototype.render = function (attributes, container) {
        var _a = attributes.x, x = _a === void 0 ? 0 : _a, _b = attributes.y, y = _b === void 0 ? 0 : _b;
        this.attr('transform', "translate(".concat(x, ", ").concat(y, ")"));
        /**
         * container
         *  |- contentGroup (with clip path)
         *    |- playWindow (with animation)
         *      |- pages
         *  |- clipPath
         */
        var containerSelection = select(container);
        this.renderClipPath(containerSelection);
        this.renderController(containerSelection);
        this.setVisiblePages([this.defaultPage]);
        this.goTo(this.defaultPage);
    };
    Navigator.prototype.bindEvents = function () {
        var _this = this;
        var render = debounce(function () { return _this.render(_this.attributes, _this); }, 50);
        this.playWindow.addEventListener(ElementEvent.INSERTED, render);
        this.playWindow.addEventListener(ElementEvent.REMOVED, render);
    };
    return Navigator;
}(Component));
export { Navigator };
//# sourceMappingURL=index.js.map