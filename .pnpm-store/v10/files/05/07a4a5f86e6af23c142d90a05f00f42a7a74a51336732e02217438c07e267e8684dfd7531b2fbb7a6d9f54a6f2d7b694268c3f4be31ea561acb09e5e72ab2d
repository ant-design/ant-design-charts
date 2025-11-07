import { isEqual, isString } from '@antv/util';
import { CommonEvent } from '../constants';
import { PinchHandler } from './pinch';
const lowerCaseKeys = (keys) => keys.map((key) => (isString(key) ? key.toLocaleLowerCase() : key));
export class Shortcut {
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
            this.triggerExtendKey(CommonEvent.WHEEL, event);
        };
        this.onDrag = (event) => {
            this.triggerExtendKey(CommonEvent.DRAG, event);
        };
        this.handlePinch = (event, options) => {
            this.triggerExtendKey(CommonEvent.PINCH, Object.assign(Object.assign({}, event), options));
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
        if (key.includes(CommonEvent.PINCH) && !this.pinchHandler) {
            this.boundHandlePinch = this.handlePinch.bind(this);
            this.pinchHandler = new PinchHandler(this.emitter, 'pinchmove', this.boundHandlePinch);
        }
        this.map.set(key, handler);
    }
    unbind(key, handler) {
        this.map.forEach((h, k) => {
            if (isEqual(k, key)) {
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
        return isEqual(recordKeyList, keyList);
    }
    bindEvents() {
        var _a;
        const { emitter } = this;
        emitter.on(CommonEvent.KEY_DOWN, this.onKeyDown);
        emitter.on(CommonEvent.KEY_UP, this.onKeyUp);
        emitter.on(CommonEvent.WHEEL, this.onWheel);
        emitter.on(CommonEvent.DRAG, this.onDrag);
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
                if (isEqual(Array.from(this.recordKey), key.filter((k) => k !== eventType))) {
                    handler(event);
                }
            }
        });
    }
    destroy() {
        var _a, _b;
        this.unbindAll();
        this.emitter.off(CommonEvent.KEY_DOWN, this.onKeyDown);
        this.emitter.off(CommonEvent.KEY_UP, this.onKeyUp);
        this.emitter.off(CommonEvent.WHEEL, this.onWheel);
        this.emitter.off(CommonEvent.DRAG, this.onDrag);
        (_a = this.pinchHandler) === null || _a === void 0 ? void 0 : _a.off('pinchmove', this.boundHandlePinch);
        (_b = globalThis.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(globalThis, 'blur', this.onFocus);
    }
}
//# sourceMappingURL=shortcut.js.map