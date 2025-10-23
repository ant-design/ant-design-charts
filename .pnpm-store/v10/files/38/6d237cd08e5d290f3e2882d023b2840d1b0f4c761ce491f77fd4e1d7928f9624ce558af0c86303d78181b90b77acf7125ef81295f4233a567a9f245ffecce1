"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var constant_1 = require("./constant");
var Tooltip = /** @class */ (function (_super) {
    tslib_1.__extends(Tooltip, _super);
    function Tooltip(options) {
        var _this = this;
        var _a, _b;
        var prefixCls = (_b = (_a = options.style) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.prefixCls;
        var CLASS_NAME = (0, constant_1.getClassNames)(prefixCls);
        _this = _super.call(this, options, {
            data: [],
            x: 0,
            y: 0,
            visibility: 'visible',
            title: '',
            position: 'bottom-right',
            offset: [5, 5],
            enterable: false,
            container: {
                x: 0,
                y: 0,
            },
            bounding: null,
            template: {
                prefixCls: '',
                container: "<div class=\"".concat(CLASS_NAME.CONTAINER, "\"></div>"),
                title: "<div class=\"".concat(CLASS_NAME.TITLE, "\"></div>"),
                item: "<li class=\"".concat(CLASS_NAME.LIST_ITEM, "\" data-index={index}>\n        <span class=\"").concat(CLASS_NAME.NAME, "\">\n          <span class=\"").concat(CLASS_NAME.MARKER, "\" style=\"background:{color}\"></span>\n          <span class=\"").concat(CLASS_NAME.NAME_LABEL, "\" title=\"{name}\">{name}</span>\n        </span>\n        <span class=\"").concat(CLASS_NAME.VALUE, "\" title=\"{value}\">{value}</span>\n      </li>"),
            },
            style: (0, constant_1.getDefaultTooltipStyle)(prefixCls),
        }) || this;
        _this.timestamp = -1;
        _this.prevCustomContentKey = _this.attributes.contentKey;
        _this.initShape();
        _this.render(_this.attributes, _this);
        return _this;
    }
    Object.defineProperty(Tooltip.prototype, "HTMLTooltipElement", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    Tooltip.prototype.getContainer = function () {
        return this.element;
    };
    Object.defineProperty(Tooltip.prototype, "elementSize", {
        get: function () {
            var width = this.element.offsetWidth;
            var height = this.element.offsetHeight;
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "HTMLTooltipItemsElements", {
        get: function () {
            var _a = this.attributes, data = _a.data, template = _a.template;
            return data.map(function (_a, idx) {
                var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, index = _a.index, rest = tslib_1.__rest(_a, ["name", "color", "index"]);
                var datum = tslib_1.__assign({ name: name, color: color, index: index !== null && index !== void 0 ? index : idx }, rest);
                return (0, util_1.createDOM)((0, util_1.substitute)(template.item, datum));
            });
        },
        enumerable: false,
        configurable: true
    });
    Tooltip.prototype.render = function (attributes, container) {
        this.renderHTMLTooltipElement();
        this.updatePosition();
    };
    Tooltip.prototype.destroy = function () {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        _super.prototype.destroy.call(this);
    };
    /**
     * 如果设置了坐标值，显示过程中会立即更新位置并关闭过渡动画
     */
    Tooltip.prototype.show = function (x, y) {
        var _this = this;
        if (x !== undefined && y !== undefined) {
            var isToggle = this.element.style.visibility === 'hidden';
            var setPosition = function () {
                _this.attributes.x = x !== null && x !== void 0 ? x : _this.attributes.x;
                _this.attributes.y = y !== null && y !== void 0 ? y : _this.attributes.y;
                _this.updatePosition();
            };
            // 只有从 hidden 状态变为 visible 状态时才需要关闭过渡动画
            isToggle ? this.closeTransition(setPosition) : setPosition();
        }
        this.element.style.visibility = 'visible';
    };
    /**
     * 如果 hide 时传入了坐标值，那么只有当鼠标不在 tooltip 上时才会隐藏
     * 对于 enterable = true 的时候，需要传入 x y，为了避免问题，建议上层在使用的时候，都传入 x y
     * @param x
     * @param y
     * @returns
     */
    Tooltip.prototype.hide = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var enterable = this.attributes.enterable;
        // 如果当前鼠标在 tooltip 上，则不隐藏
        if (enterable && this.isCursorEntered(x, y))
            return;
        this.element.style.visibility = 'hidden';
    };
    /**
     * 初始化容器
     */
    Tooltip.prototype.initShape = function () {
        var template = this.attributes.template;
        this.element = (0, util_1.createDOM)(template.container);
        if (this.id)
            this.element.setAttribute('id', this.id);
    };
    Tooltip.prototype.renderCustomContent = function () {
        if (this.prevCustomContentKey !== undefined && this.prevCustomContentKey === this.attributes.contentKey)
            return;
        this.prevCustomContentKey = this.attributes.contentKey;
        var content = this.attributes.content;
        if (!content)
            return;
        if (typeof content === 'string')
            this.element.innerHTML = content;
        else
            (0, util_2.replaceChildren)(this.element, content);
    };
    /**
     * 更新 HTML 上的内容
     */
    Tooltip.prototype.renderHTMLTooltipElement = function () {
        var _a, _b;
        var _c = this.attributes, template = _c.template, title = _c.title, enterable = _c.enterable, style = _c.style, content = _c.content;
        var CLASS_NAME = (0, constant_1.getClassNames)(template.prefixCls);
        var container = this.element;
        this.element.style.pointerEvents = enterable ? 'auto' : 'none';
        if (content)
            this.renderCustomContent();
        else {
            if (title) {
                container.innerHTML = template.title;
                container.getElementsByClassName(CLASS_NAME.TITLE)[0].innerHTML = title;
            }
            else
                (_b = (_a = container.getElementsByClassName(CLASS_NAME.TITLE)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.remove();
            var itemsElements = this.HTMLTooltipItemsElements;
            var ul = document.createElement('ul');
            ul.className = CLASS_NAME.LIST;
            (0, util_2.replaceChildren)(ul, itemsElements);
            var list = this.element.querySelector(".".concat(CLASS_NAME.LIST));
            if (list)
                list.replaceWith(ul);
            else
                container.appendChild(ul);
        }
        (0, util_2.applyStyleSheet)(container, style);
    };
    /**
     * 根据 position 和指针位置，计算出 tooltip 相对于指针的偏移量
     * @param assignPosition {TooltipPosition} tooltip相对于指针的位置，不指定时使用默认参数
     */
    Tooltip.prototype.getRelativeOffsetFromCursor = function (assignPosition) {
        var _a = this.attributes, position = _a.position, offset = _a.offset;
        var interPosition = assignPosition || position;
        var finalPosition = interPosition.split('-');
        var positionScore = { left: [-1, 0], right: [1, 0], top: [0, -1], bottom: [0, 1] };
        var _b = this.elementSize, width = _b.width, height = _b.height;
        var absolutelyOffset = [-width / 2, -height / 2];
        finalPosition.forEach(function (pos) {
            var _a = tslib_1.__read(absolutelyOffset, 2), abs1 = _a[0], abs2 = _a[1];
            var _b = tslib_1.__read(positionScore[pos], 2), pos1 = _b[0], pos2 = _b[1];
            absolutelyOffset = [abs1 + (width / 2 + offset[0]) * pos1, abs2 + (height / 2 + offset[1]) * pos2];
        });
        return absolutelyOffset;
    };
    /**
     * 将相对于指针的偏移量生效到dom元素上
     */
    Tooltip.prototype.setOffsetPosition = function (_a) {
        var _b = tslib_1.__read(_a, 2), offsetX = _b[0], offsetY = _b[1];
        var _c = this.attributes, _d = _c.x, x = _d === void 0 ? 0 : _d, _e = _c.y, y = _e === void 0 ? 0 : _e, _f = _c.container, cx = _f.x, cy = _f.y;
        this.element.style.left = "".concat(+x + cx + offsetX, "px");
        this.element.style.top = "".concat(+y + cy + offsetY, "px");
    };
    /**
     * 更新tooltip的位置
     */
    Tooltip.prototype.updatePosition = function () {
        var _a = this.attributes.showDelay, showDelay = _a === void 0 ? 60 : _a;
        var currentTimestamp = Date.now();
        if (this.timestamp > 0 && currentTimestamp - this.timestamp < showDelay)
            return;
        this.timestamp = currentTimestamp;
        // 尝试当前的位置使用默认 position 能否放下
        // 如果不能，则改变取溢出边的反向 position
        /**
         * 默认位置
         *    ⬇️
         * 计算自动调整位置
         *    ⬇️
         * 实际摆放位置
         */
        this.setOffsetPosition(this.autoPosition(this.getRelativeOffsetFromCursor()));
    };
    /**
     * 计算自动调整位置后的相对位置
     * @param offsetX 根据position计算的横向偏移量
     * @param offsetY 根据position计算的纵向偏移量
     */
    Tooltip.prototype.autoPosition = function (_a) {
        var _b = tslib_1.__read(_a, 2), offsetX = _b[0], offsetY = _b[1];
        var _c = this.attributes, cursorX = _c.x, cursorY = _c.y, bounding = _c.bounding, position = _c.position;
        // 如果没有设置 bounds，那么意思就是不限制空间
        if (!bounding)
            return [offsetX, offsetY];
        // 更新前的位置和宽度
        var _d = this.element, offsetWidth = _d.offsetWidth, offsetHeight = _d.offsetHeight;
        // 预期放置的位置
        var _e = tslib_1.__read([+cursorX + offsetX, +cursorY + offsetY], 2), expectLeft = _e[0], expectTop = _e[1];
        // 反方向
        var inversion = {
            left: 'right',
            right: 'left',
            top: 'bottom',
            bottom: 'top',
        };
        // 各个边界是否超出容器边界
        var boundingX = bounding.x, boundingY = bounding.y, boundingWidth = bounding.width, boundingHeight = bounding.height;
        var edgeCompare = {
            left: expectLeft < boundingX,
            right: expectLeft + offsetWidth > boundingX + boundingWidth,
            top: expectTop < boundingY,
            bottom: expectTop + offsetHeight > boundingY + boundingHeight,
        };
        // 修正的位置
        var correctivePosition = [];
        // 判断是否超出边界
        position.split('-').forEach(function (pos) {
            // 如果在当前方向超出边界，则设置其反方向
            if (edgeCompare[pos])
                correctivePosition.push(inversion[pos]);
            else
                correctivePosition.push(pos);
        });
        var correctedPositionString = correctivePosition.join('-');
        return this.getRelativeOffsetFromCursor(correctedPositionString);
    };
    Tooltip.prototype.isCursorEntered = function (clientX, clientY) {
        // 是可捕获的，并且点在 tooltip dom 上
        if (this.element) {
            var _a = this.element.getBoundingClientRect(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            // const { container } = this.attributes;
            // const { x: cx, y: cy } = container;
            // console.log(1113, [clientX, clientY], [x, y, width, height], [cx, cy], new BBox(x - cx, y - cy, width, height).isPointIn(cursorX, cursorY));
            return new util_2.BBox(x, y, width, height).isPointIn(clientX, clientY);
        }
        return false;
    };
    Tooltip.prototype.closeTransition = function (callback) {
        var _this = this;
        var transition = this.element.style.transition;
        this.element.style.transition = 'none';
        callback();
        setTimeout(function () {
            _this.element.style.transition = transition;
        }, 10);
    };
    Tooltip.tag = 'tooltip';
    return Tooltip;
}(core_1.Component));
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map