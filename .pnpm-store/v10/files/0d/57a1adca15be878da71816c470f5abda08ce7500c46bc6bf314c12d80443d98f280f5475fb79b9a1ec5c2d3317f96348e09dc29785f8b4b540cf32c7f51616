"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNode = void 0;
var render_1 = require("../react/render");
var mountMapping = new Map();
if (typeof document !== 'undefined') {
    mountMapping.set('tooltip', document.createElement('div'));
}
var createNode = function (children, isTooltip) {
    if (isTooltip === void 0) { isTooltip = false; }
    var mount = null;
    /**
     * @description tooltip 为了防止抖动，只需一个root即可
     */
    if (isTooltip) {
        mount = mountMapping.get('tooltip');
    }
    else {
        mount = document.createElement('div');
        if (children === null || children === void 0 ? void 0 : children.key) {
            var exist = mountMapping.get(children.key);
            if (exist) {
                mount = exist;
            }
            else {
                mountMapping.set(children.key, mount);
            }
        }
    }
    (0, render_1.render)(children, mount);
    return mount;
};
exports.createNode = createNode;
