"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shortcut = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const pinch_1 = require("./pinch");
const lowerCaseKeys = (keys) => keys.map((key) => ((0, util_1.isString)(key) ? key.toLocaleLowerCase() : key));
class Shortcut {
    constructor(emitter) {
        this.map = new Map();
        this.boundHandlePinch = () => { };
        this.recordKey = new Set();
        this.onKeyDown = (event) => {
            if (!(event === null || event === void 0 ? void 0 : event.key))
                return;
            this.recordKey.add(event.key);
            this.trigger(event);
        };
        this.onKeyUp = (event) => {
            if (!(event === null || event === void 0 ? void 0 : event.key))
                return;
            this.recordKey.delete(event.key);
        };
        this.onWheel = (event) => {
            this.triggerExtendKey(constants_1.CommonEvent.WHEEL, event);
        };
        this.onDrag = (event) => {
            this.triggerExtendKey(constants_1.CommonEvent.DRAG, event);
        };
        this.handlePinch = (event, options) => {
            this.triggerExtendKey(constants_1.CommonEvent.PINCH, Object.assign(Object.assign({}, event), options));
        };
        this.onFocus = () => {
            this.recordKey.clear();
        };
        this.emitter = emitter;
        this.bindEvents();
    }
    bind(key, handler) {
        if (key.length === 0)
            return;
        if (key.includes(constants_1.CommonEvent.PINCH) && !this.pinchHandler) {
            this.boundHandlePinch = this.handlePinch.bind(this);
            this.pinchHandler = new pinch_1.PinchHandler(this.emitter, 'pinchmove', this.boundHandlePinch);
        }
        this.map.set(key, handler);
    }
    unbind(key, handler) {
        this.map.forEach((h, k) => {
            if ((0, util_1.isEqual)(k, key)) {
                if (!handler || handler === h)
                    this.map.delete(k);
            }
        });
    }
    unbindAll() {
        this.map.clear();
    }
    match(key) {
        // 排序
        const recordKeyList = lowerCaseKeys(Array.from(this.recordKey)).sort();
        const keyList = lowerCaseKeys(key).sort();
        return (0, util_1.isEqual)(recordKeyList, keyList);
    }
    bindEvents() {
        var _a;
        const { emitter } = this;
        emitter.on(constants_1.CommonEvent.KEY_DOWN, this.onKeyDown);
        emitter.on(constants_1.CommonEvent.KEY_UP, this.onKeyUp);
        emitter.on(constants_1.CommonEvent.WHEEL, this.onWheel);
        emitter.on(constants_1.CommonEvent.DRAG, this.onDrag);
        // 窗口重新获得焦点后清空按键，避免按键状态异常
        // Clear the keys when the window regains focus to avoid abnormal key states
        (_a = globalThis.addEventListener) === null || _a === void 0 ? void 0 : _a.call(globalThis, 'focus', this.onFocus);
    }
    trigger(event) {
        this.map.forEach((handler, key) => {
            if (this.match(key))
                handler(event);
        });
    }
    /**
     * <zh/> 扩展 wheel, drag 操作
     *
     * <en/> Extend wheel, drag operations
     * @param eventType - event name
     * @param event - event
     */
    triggerExtendKey(eventType, event) {
        this.map.forEach((handler, key) => {
            if (key.includes(eventType)) {
                if ((0, util_1.isEqual)(Array.from(this.recordKey), key.filter((k) => k !== eventType))) {
                    handler(event);
                }
            }
        });
    }
    destroy() {
        var _a, _b;
        this.unbindAll();
        this.emitter.off(constants_1.CommonEvent.KEY_DOWN, this.onKeyDown);
        this.emitter.off(constants_1.CommonEvent.KEY_UP, this.onKeyUp);
        this.emitter.off(constants_1.CommonEvent.WHEEL, this.onWheel);
        this.emitter.off(constants_1.CommonEvent.DRAG, this.onDrag);
        (_a = this.pinchHandler) === null || _a === void 0 ? void 0 : _a.off('pinchmove', this.boundHandlePinch);
        (_b = globalThis.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(globalThis, 'blur', this.onFocus);
    }
}
exports.Shortcut = Shortcut;
//# sourceMappingURL=shortcut.js.map