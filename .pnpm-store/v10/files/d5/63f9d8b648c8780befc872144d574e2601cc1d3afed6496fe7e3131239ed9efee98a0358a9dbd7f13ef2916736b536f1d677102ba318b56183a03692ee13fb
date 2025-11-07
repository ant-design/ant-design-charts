import { mergeOptions } from '../../utils/style';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 直线
 *
 * <en/> Line
 */
export class Line extends BaseEdge {
    constructor(options) {
        super(mergeOptions({ style: Line.defaultStyleProps }, options));
    }
    getKeyPath(attributes) {
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        return [
            ['M', sourcePoint[0], sourcePoint[1]],
            ['L', targetPoint[0], targetPoint[1]],
        ];
    }
}
Line.defaultStyleProps = {};
//# sourceMappingURL=line.js.map