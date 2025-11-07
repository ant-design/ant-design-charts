"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mix_1 = tslib_1.__importDefault(require("./mix"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var extend = function (subclass, superclass, overrides, staticOverrides) {
    // 如果只提供父类构造函数，则自动生成子类构造函数
    if (!(0, is_function_1.default)(superclass)) {
        overrides = superclass;
        superclass = subclass;
        subclass = function () { };
    }
    var create = Object.create
        ? function (proto, c) {
            return Object.create(proto, {
                constructor: {
                    value: c,
                },
            });
        }
        : function (proto, c) {
            function Tmp() { }
            Tmp.prototype = proto;
            var o = new Tmp();
            o.constructor = c;
            return o;
        };
    var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
    subclass.prototype = (0, mix_1.default)(superObj, subclass.prototype); // 指定子类的prototype
    subclass.superclass = create(superclass.prototype, superclass);
    (0, mix_1.default)(superObj, overrides);
    (0, mix_1.default)(subclass, staticOverrides);
    return subclass;
};
exports.default = extend;
//# sourceMappingURL=extend.js.map