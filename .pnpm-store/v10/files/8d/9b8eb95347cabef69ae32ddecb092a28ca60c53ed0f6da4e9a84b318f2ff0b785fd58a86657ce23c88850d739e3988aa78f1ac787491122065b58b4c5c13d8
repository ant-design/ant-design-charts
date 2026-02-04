import { __extends, __read, __rest, __spreadArray } from "tslib";
import { deepMix, isString, isElement, assign, get } from '@antv/util';
import { Component } from '../../core';
import { deepAssign } from '../../util';
import { CLASS_NAME, POPTIP_ID, POPTIP_STYLE } from './constant';
import { getPositionXY, getSingleTonElement } from './utils';
// 到处方法，可以外部使用
export { getPositionXY } from './utils';
var Poptip = /** @class */ (function (_super) {
    __extends(Poptip, _super);
    function Poptip(options) {
        var _this = _super.call(this, deepMix({ style: { id: POPTIP_ID } }, Poptip.defaultOptions, options)) || this;
        /** 显影控制 */
        _this.visibility = 'visible';
        /** 所有绑定的目标对象 */
        _this.map = new Map();
        /** 节点样式 */
        _this.domStyles = '';
        _this.initShape();
        _this.render(_this.attributes, _this);
        return _this;
    }
    Object.defineProperty(Poptip.prototype, "visible", {
        get: function () {
            return this.visibility === 'visible';
        },
        enumerable: false,
        configurable: true
    });
    Poptip.prototype.render = function (attributes, container) {
        this.visibility = this.style.visibility;
        this.updatePoptipElement();
    };
    /**
     * poptip 组件更新
     */
    Poptip.prototype.update = function (cfg) {
        this.attr(deepMix({}, this.style, cfg));
        this.render(this.attributes, this);
    };
    /**
     * 绑定元素
     */
    Poptip.prototype.bind = function (element, callback) {
        var _this = this;
        if (!element)
            return;
        var defaultText = this.style.text;
        var onmousemove = function (e) {
            var target = element;
            var options = _this.style;
            var text = defaultText;
            if (callback) {
                var _a = typeof callback === 'function' ? callback.call(null, e) : callback, html = _a.html, ele = _a.target, restOptions = __rest(_a, ["html", "target"]);
                options = assign({}, _this.style, restOptions);
                if (ele || ele === false)
                    target = ele;
                if (typeof html === 'string')
                    text = html;
            }
            var position = options.position, arrowPointAtCenter = options.arrowPointAtCenter, follow = options.follow, offset = options.offset;
            if (target) {
                var _b = e, clientX = _b.clientX, clientY = _b.clientY;
                var _c = __read(getPositionXY(clientX, clientY, target, position, arrowPointAtCenter, follow), 2), x = _c[0], y = _c[1];
                _this.showTip(x, y, { text: text, position: position, offset: offset });
            }
            else {
                // 没有移动到指定的目标 关闭弹框
                _this.hideTip();
            }
        };
        var onmouseleave = function () {
            _this.hideTip();
        };
        element.addEventListener('mousemove', onmousemove);
        element.addEventListener('mouseleave', onmouseleave);
        // 存储监听
        this.map.set(element, [onmousemove, onmouseleave]);
    };
    Poptip.prototype.unbind = function (element) {
        if (this.map.has(element)) {
            var _a = __read(this.map.get(element) || [], 2), listener1 = _a[0], listener2 = _a[1];
            listener1 && element.removeEventListener('mousemove', listener1);
            listener2 && element.removeEventListener('mouseleave', listener2);
            this.map.delete(element);
        }
    };
    /**
     * 清空容器内容
     */
    Poptip.prototype.clear = function () {
        this.container.innerHTML = '';
    };
    /**
     * 清除
     */
    Poptip.prototype.destroy = function () {
        var _this = this;
        var _a;
        __spreadArray([], __read(this.map.keys()), false).forEach(function (ele) { return _this.unbind(ele); });
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.remove();
        _super.prototype.destroy.call(this);
    };
    /**
     * 显示 + 改变位置
     * @param x 可选 改变位置 x 方向
     * @param y 可选 改变位置 y 方向
     * @param text 文本变化
     */
    Poptip.prototype.showTip = function (x, y, options) {
        var text = get(options, 'text');
        if (text && typeof text !== 'string')
            return;
        this.applyStyles();
        // 不传入 不希望改变 x y
        if (x && y && options) {
            var offset = options.offset, position = options.position;
            position && this.container.setAttribute('data-position', position);
            this.setOffsetPosition(x, y, offset);
            if (typeof text === 'string') {
                // do something
                var textElement = this.container.querySelector(".".concat(CLASS_NAME.TEXT));
                if (textElement) {
                    textElement.innerHTML = text;
                }
            }
            this.visibility = 'visible';
            this.container.style.visibility = 'visible';
        }
    };
    /**
     * 隐藏
     */
    Poptip.prototype.hideTip = function () {
        this.visibility = 'hidden';
        this.container.style.visibility = 'hidden';
    };
    /**
     * 获取内部容器 HTMLElement
     * @returns this.element:HTMLElement;
     */
    Poptip.prototype.getContainer = function () {
        return this.container;
    };
    Poptip.prototype.getClassName = function () {
        var containerClassName = this.style.containerClassName;
        return "".concat(CLASS_NAME.CONTAINER).concat(containerClassName ? " ".concat(containerClassName) : '');
    };
    /**
     * 初始化容器
     */
    Poptip.prototype.initShape = function () {
        var _this = this;
        var id = this.style.id;
        this.container = getSingleTonElement(id);
        this.container.className = this.getClassName();
        // 盒子添加交互
        this.container.addEventListener('mousemove', function () { return _this.showTip(); });
        this.container.addEventListener('mouseleave', function () { return _this.hideTip(); });
    };
    /**
     * 更新 HTML 上的内容
     */
    Poptip.prototype.updatePoptipElement = function () {
        var container = this.container;
        this.clear();
        var _a = this.style, id = _a.id, template = _a.template, text = _a.text;
        this.container.setAttribute('id', id);
        this.container.className = this.getClassName();
        // 增加 arrow 元素
        var arrowNode = "<span class=\"".concat(CLASS_NAME.ARROW, "\"></span>");
        container.innerHTML = arrowNode;
        // 置入 text 模版
        if (isString(template)) {
            container.innerHTML += template;
        }
        else if (template && isElement(template)) {
            container.appendChild(template);
        }
        // 置入 text
        if (text) {
            container.getElementsByClassName(CLASS_NAME.TEXT)[0].textContent = text;
        }
        this.applyStyles();
        this.container.style.visibility = this.visibility;
    };
    /**
     * 应用样式表
     */
    Poptip.prototype.applyStyles = function () {
        var styles = deepAssign({}, POPTIP_STYLE, this.style.domStyles);
        var styleStr = Object.entries(styles).reduce(function (r, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var styleStr = Object.entries(value).reduce(function (r, _a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                return "".concat(r).concat(k, ": ").concat(v, ";");
            }, '');
            return "".concat(r).concat(key, "{").concat(styleStr, "}");
        }, '');
        if (this.domStyles !== styleStr) {
            this.domStyles = styleStr;
            var styleDOM = this.container.querySelector('style');
            if (styleDOM)
                this.container.removeChild(styleDOM);
            styleDOM = document.createElement('style');
            styleDOM.innerHTML = styleStr;
            this.container.appendChild(styleDOM);
        }
    };
    /**
     * 将相对于指针的偏移量生效到dom元素上
     * @param x 盒子相对于页面 x 的位置
     * @param y 盒子相对于页面 y 的位置
     */
    Poptip.prototype.setOffsetPosition = function (x, y, offset) {
        if (offset === void 0) { offset = this.style.offset; }
        var _a = __read(offset, 2), _b = _a[0], offsetX = _b === void 0 ? 0 : _b, _c = _a[1], offsetY = _c === void 0 ? 0 : _c;
        this.container.style.left = "".concat(x + offsetX, "px");
        this.container.style.top = "".concat(y + offsetY, "px");
    };
    Poptip.tag = 'poptip';
    Poptip.defaultOptions = {
        style: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            target: null,
            visibility: 'hidden',
            text: '',
            position: 'top',
            follow: false,
            offset: [0, 0],
            domStyles: POPTIP_STYLE,
            template: "<div class=\"".concat(CLASS_NAME.TEXT, "\"></div>"),
        },
    };
    return Poptip;
}(Component));
export { Poptip };
//# sourceMappingURL=index.js.map