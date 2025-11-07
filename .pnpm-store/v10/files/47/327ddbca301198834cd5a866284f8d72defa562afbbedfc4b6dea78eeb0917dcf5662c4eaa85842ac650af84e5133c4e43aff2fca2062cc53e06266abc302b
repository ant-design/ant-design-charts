"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emit = emit;
exports.eventTargetOf = eventTargetOf;
const g_1 = require("@antv/g");
const element_1 = require("../element");
__exportStar(require("./events"), exports);
/**
 * <zh/> 基于 Event 对象触发事件
 *
 * <en/> Trigger event based on Event object
 * @param emitter - <zh/> 事件目标 | <en/> event target
 * @param event - <zh/> 事件对象 | <en/> event object
 */
function emit(emitter, event) {
    emitter.emit(event.type, event);
}
/**
 * <zh/> 获取事件目标元素
 *
 * <en/> Get the event target element
 * @param shape - <zh/> 事件图形 | <en/> event shape
 * @returns <zh/> 目标元素 | <en/> target element
 * @remarks
 * <zh/> 事件响应大多数情况会命中元素的内部图形，通过该方法可以获取到其所属元素
 *
 * <en/> Most of the event responses will hit the internal graphics of the element, and this method can be used to get the element to which it belongs
 */
function eventTargetOf(shape) {
    if (!shape)
        return null;
    if (shape instanceof g_1.Document) {
        return { type: 'canvas', element: shape };
    }
    let element = shape;
    while (element) {
        // 此判断条件不适用于 label 和 节点分开渲染的情况
        // This condition is not applicable to the case where the label and node are rendered separately
        if ((0, element_1.isNode)(element))
            return { type: 'node', element };
        if ((0, element_1.isEdge)(element))
            return { type: 'edge', element };
        if ((0, element_1.isCombo)(element))
            return { type: 'combo', element };
        element = element.parentElement;
    }
    return null;
}
//# sourceMappingURL=index.js.map