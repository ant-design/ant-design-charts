import { vec2 } from 'gl-matrix';
import { direction } from './direction';
/**
 * 二维向量 v1 到 v2 的夹角
 * @param v1
 * @param v2
 * @param direct
 */
export function angleTo(v1, v2, direct) {
    var ang = vec2.angle(v1, v2);
    var angleLargeThanPI = direction(v1, v2) >= 0;
    if (direct) {
        if (angleLargeThanPI) {
            return Math.PI * 2 - ang;
        }
        return ang;
    }
    if (angleLargeThanPI) {
        return ang;
    }
    return Math.PI * 2 - ang;
}
//# sourceMappingURL=angle-to.js.map