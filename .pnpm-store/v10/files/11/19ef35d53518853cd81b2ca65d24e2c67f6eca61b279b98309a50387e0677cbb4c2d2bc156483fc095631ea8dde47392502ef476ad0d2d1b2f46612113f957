import { GraphEvent } from '../constants';
import { BasePlugin } from './base-plugin';
/**
 * <zh/> 配置相机参数
 *
 * <en/> Configure camera parameters
 */
export class CameraSetting extends BasePlugin {
    constructor(context, options) {
        super(context, options);
        this.setOptions = (options) => {
            const caller = {
                cameraType: 'setType',
                near: 'setNear',
                far: 'setFar',
                fov: 'setFov',
                aspect: 'setAspect',
                // 确保 projectionMode 在 near/far/fov/aspect 之后设置
                // Ensure that projectionMode is set after near/far/fov/aspect
                projectionMode: 'setProjectionMode',
                distance: 'setDistance',
                minDistance: 'setMinDistance',
                maxDistance: 'setMaxDistance',
                roll: 'setRoll',
                elevation: 'setElevation',
                azimuth: 'setAzimuth',
            };
            const valueMapper = (key, value) => {
                switch (key) {
                    case 'projectionMode':
                        return value === 'perspective' ? 1 : 0;
                    case 'cameraType':
                        return { orbiting: 0, exploring: 1, tracking: 2 }[value];
                    case 'aspect':
                        if (typeof value === 'number')
                            return value;
                        return this.getCanvasAspect();
                    default:
                        return value;
                }
            };
            Object.entries(caller).forEach(([key, method]) => {
                const value = options[key];
                if (value !== undefined) {
                    const actualValue = valueMapper(key, value);
                    // @ts-expect-error incorrect ts type check
                    this.context.canvas.getCamera()[method](actualValue);
                }
            });
        };
        this.bindEvents();
    }
    /**
     * <zh/> 更新相机参数
     *
     * <en/> Update camera parameters
     * @param options - <zh/> 相机配置项 | <en/> Camera configuration options
     * @internal
     */
    update(options) {
        this.setOptions(options);
        super.update(options);
    }
    bindEvents() {
        this.context.graph.once(GraphEvent.BEFORE_DRAW, () => this.setOptions(this.options));
    }
    getCanvasAspect() {
        const [width, height] = this.context.viewport.getCanvasSize();
        return width / height;
    }
}
//# sourceMappingURL=camera-setting.js.map