"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformController = exports.REQUIRED_TRANSFORMS = void 0;
const extension_1 = require("../registry/extension");
exports.REQUIRED_TRANSFORMS = [
    'update-related-edges',
    'collapse-expand-node',
    'collapse-expand-combo',
    'get-edge-actual-ends',
    'arrange-draw-order',
];
class TransformController extends extension_1.ExtensionController {
    constructor(context) {
        super(context);
        this.category = 'transform';
        this.setTransforms(this.context.options.transforms || []);
    }
    getTransforms() { }
    setTransforms(transforms) {
        this.setExtensions([
            ...exports.REQUIRED_TRANSFORMS.slice(0, exports.REQUIRED_TRANSFORMS.length - 1),
            ...transforms,
            exports.REQUIRED_TRANSFORMS[exports.REQUIRED_TRANSFORMS.length - 1],
        ]);
    }
    getTransformInstance(key) {
        return key ? this.extensionMap[key] : this.extensionMap;
    }
}
exports.TransformController = TransformController;
//# sourceMappingURL=transform.js.map