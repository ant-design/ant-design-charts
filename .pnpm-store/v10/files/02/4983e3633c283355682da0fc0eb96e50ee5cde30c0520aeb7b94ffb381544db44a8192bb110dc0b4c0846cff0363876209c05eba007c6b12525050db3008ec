import { ExtensionController } from '../registry/extension';
export const REQUIRED_TRANSFORMS = [
    'update-related-edges',
    'collapse-expand-node',
    'collapse-expand-combo',
    'get-edge-actual-ends',
    'arrange-draw-order',
];
export class TransformController extends ExtensionController {
    constructor(context) {
        super(context);
        this.category = 'transform';
        this.setTransforms(this.context.options.transforms || []);
    }
    getTransforms() { }
    setTransforms(transforms) {
        this.setExtensions([
            ...REQUIRED_TRANSFORMS.slice(0, REQUIRED_TRANSFORMS.length - 1),
            ...transforms,
            REQUIRED_TRANSFORMS[REQUIRED_TRANSFORMS.length - 1],
        ]);
    }
    getTransformInstance(key) {
        return key ? this.extensionMap[key] : this.extensionMap;
    }
}
//# sourceMappingURL=transform.js.map