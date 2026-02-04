var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { deepMix, identity } from '@antv/util';
import { mat4, vec4 } from 'gl-matrix';
import { compose, isMatrix, extend3D } from './utils';
import { cartesian3D, translate3D, scale3D, transpose3D } from './transforms';
var Coordinate3D = /** @class */ (function () {
    /**
     * Create a new Coordinate Object.
     * @param options Custom options
     */
    function Coordinate3D(options) {
        // 当前的选项
        this.options = {
            x: 0,
            y: 0,
            z: 0,
            width: 300,
            height: 150,
            depth: 150,
            transformations: [],
        };
        // 当前可以使用的变换
        this.transformers = {
            cartesian3D: cartesian3D,
            translate3D: translate3D,
            scale3D: scale3D,
            transpose3D: transpose3D,
        };
        this.update(options);
    }
    /**
     * Update options and inner state.
     * @param options Options to be updated
     */
    Coordinate3D.prototype.update = function (options) {
        this.options = deepMix({}, this.options, options);
        this.recoordinate();
    };
    /**
     * Returns a new Coordinate with same options.
     * @returns Coordinate
     */
    Coordinate3D.prototype.clone = function () {
        return new Coordinate3D(this.options);
    };
    /**
     * Returns current options.
     * @returns options
     */
    Coordinate3D.prototype.getOptions = function () {
        return this.options;
    };
    /**
     * Clear transformations and update.
     */
    Coordinate3D.prototype.clear = function () {
        this.update({
            transformations: [],
        });
    };
    /**
     * Returns the size of the bounding box of the coordinate.
     * @returns [width, height, depth]
     */
    Coordinate3D.prototype.getSize = function () {
        var _a = this.options, width = _a.width, height = _a.height, depth = _a.depth;
        return [width, height, depth];
    };
    /**
     * Returns the center of the bounding box of the coordinate.
     * @returns [centerX, centerY, centerZ]
     */
    Coordinate3D.prototype.getCenter = function () {
        var _a = this.options, x = _a.x, y = _a.y, z = _a.z, width = _a.width, height = _a.height, depth = _a.depth;
        return [(x * 2 + width) / 2, (y * 2 + height) / 2, (z * 2 + depth) / 2];
    };
    /**
     * Add selected transformation.
     * @param args transform type and params
     * @returns Coordinate
     */
    Coordinate3D.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var transformations = this.options.transformations;
        this.update({
            transformations: __spreadArray(__spreadArray([], __read(transformations), false), [__spreadArray([], __read(args), false)], false),
        });
        return this;
    };
    /**
     * Apples transformations for the current vector.
     * @param vector original vector3
     * @returns transformed vector3
     */
    Coordinate3D.prototype.map = function (vector) {
        return this.output(vector);
    };
    /**
     * Apples invert transformations for the current vector.
     * @param vector transformed vector3
     * @param vector original vector3
     */
    Coordinate3D.prototype.invert = function (vector) {
        return this.input(vector);
    };
    Coordinate3D.prototype.recoordinate = function () {
        this.output = this.compose();
        this.input = this.compose(true);
    };
    // 将所有的变换合成一个函数
    // 变换有两种类型：矩阵变换和函数变换
    // 处理过程中需要把连续的矩阵变换合成一个变换函数，然后在和其他变换函数合成最终的变换函数
    Coordinate3D.prototype.compose = function (invert) {
        var e_1, _a;
        if (invert === void 0) { invert = false; }
        var transformations = invert ? __spreadArray([], __read(this.options.transformations), false).reverse() : this.options.transformations;
        var getter = invert ? function (d) { return d.untransform; } : function (d) { return d.transform; };
        var matrixes = [];
        var transforms = [];
        var add = function (transform, extended) {
            if (extended === void 0) { extended = true; }
            return transforms.push(extended ? extend3D(transform) : transform);
        };
        try {
            for (var transformations_1 = __values(transformations), transformations_1_1 = transformations_1.next(); !transformations_1_1.done; transformations_1_1 = transformations_1.next()) {
                var _b = __read(transformations_1_1.value), name_1 = _b[0], args = _b.slice(1);
                var createTransformer = this.transformers[name_1];
                if (createTransformer) {
                    var _c = this.options, x = _c.x, y = _c.y, z = _c.z, width = _c.width, height = _c.height, depth = _c.depth;
                    var transformer = createTransformer(__spreadArray([], __read(args), false), x, y, z, width, height, depth);
                    if (isMatrix(transformer)) {
                        // 如果当前变换是矩阵变换，那么先保存下来
                        matrixes.push(transformer);
                    }
                    else {
                        // 如果当前变换是函数变换，并且之前有没有合成的矩阵变换，那么现将之前的矩阵变换合成
                        if (matrixes.length) {
                            var transform_1 = this.createMatrixTransform(matrixes, invert);
                            add(transform_1);
                            matrixes.splice(0, matrixes.length);
                        }
                        var transform = getter(transformer) || identity;
                        add(transform, true);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (transformations_1_1 && !transformations_1_1.done && (_a = transformations_1.return)) _a.call(transformations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // 合成剩下的矩阵变换
        if (matrixes.length) {
            var transform = this.createMatrixTransform(matrixes, invert);
            add(transform);
        }
        return compose.apply(void 0, __spreadArray([], __read(transforms), false));
    };
    // 将连续的矩阵的运算合成一个变换函数
    Coordinate3D.prototype.createMatrixTransform = function (matrixes, invert) {
        var matrix = mat4.create();
        if (invert)
            matrixes.reverse();
        matrixes.forEach(function (m) { return mat4.mul(matrix, matrix, m); });
        if (invert) {
            mat4.invert(matrix, mat4.clone(matrix));
        }
        return function (vector) {
            var vector4 = [vector[0], vector[1], vector[2], 1];
            vec4.transformMat4(vector4, vector4, matrix);
            return [vector4[0], vector4[1], vector4[2]];
        };
    };
    return Coordinate3D;
}());
export { Coordinate3D };
//# sourceMappingURL=coordinate3D.js.map