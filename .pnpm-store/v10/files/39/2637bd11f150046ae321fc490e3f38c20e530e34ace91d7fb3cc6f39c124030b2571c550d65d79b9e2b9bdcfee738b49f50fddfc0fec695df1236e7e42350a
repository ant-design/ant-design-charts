import { forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, forceZ, } from 'd3-force-3d';
import { D3ForceLayout } from '../d3-force';
export class D3Force3DLayout extends D3ForceLayout {
    constructor() {
        super(...arguments);
        this.id = 'd3-force-3d';
        this.config = {
            inputNodeAttrs: ['x', 'y', 'z', 'vx', 'vy', 'vz', 'fx', 'fy', 'fz'],
            outputNodeAttrs: ['x', 'y', 'z', 'vx', 'vy', 'vz'],
            simulationAttrs: [
                'alpha',
                'alphaMin',
                'alphaDecay',
                'alphaTarget',
                'velocityDecay',
                'randomSource',
                'numDimensions',
            ],
        };
        this.forceMap = {
            link: forceLink,
            manyBody: forceManyBody,
            center: forceCenter,
            collide: forceCollide,
            radial: forceRadial,
            x: forceX,
            y: forceY,
            z: forceZ,
        };
        this.options = {
            numDimensions: 3,
            link: {
                id: (edge) => edge.id,
            },
            manyBody: {},
            center: {
                x: 0,
                y: 0,
                z: 0,
            },
        };
    }
    initSimulation() {
        return forceSimulation();
    }
}
//# sourceMappingURL=index.js.map