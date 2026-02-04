import { __awaiter } from "tslib";
import { deepMix, pick } from '@antv/util';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, } from 'd3-force';
export class D3ForceLayout {
    constructor(options) {
        this.id = 'd3-force';
        this.config = {
            inputNodeAttrs: ['x', 'y', 'vx', 'vy', 'fx', 'fy'],
            outputNodeAttrs: ['x', 'y', 'vx', 'vy'],
            simulationAttrs: [
                'alpha',
                'alphaMin',
                'alphaDecay',
                'alphaTarget',
                'velocityDecay',
                'randomSource',
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
        };
        // @ts-ignore
        this.options = {
            link: {
                id: (edge) => edge.id,
            },
            manyBody: {},
            center: {
                x: 0,
                y: 0,
            },
        };
        this.context = {
            options: {},
            assign: false,
            nodes: [],
            edges: [],
        };
        deepMix(this.options, options);
        if (this.options.forceSimulation) {
            this.simulation = this.options.forceSimulation;
        }
    }
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericLayout(false, graph, options);
        });
    }
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericLayout(true, graph, options);
        });
    }
    stop() {
        this.simulation.stop();
    }
    tick(iterations) {
        this.simulation.tick(iterations);
        return this.getResult();
    }
    restart() {
        this.simulation.restart();
    }
    setFixedPosition(id, position) {
        const node = this.context.nodes.find((n) => n.id === id);
        if (!node)
            return;
        position.forEach((value, index) => {
            if (typeof value === 'number' || value === null) {
                const key = ['fx', 'fy', 'fz'][index];
                node[key] = value;
            }
        });
    }
    getOptions(options) {
        var _a, _b;
        const _ = deepMix({}, this.options, options);
        // process nodeSize
        if (_.collide && ((_a = _.collide) === null || _a === void 0 ? void 0 : _a.radius) === undefined) {
            _.collide = _.collide || {};
            // @ts-ignore
            _.collide.radius = (_b = _.nodeSize) !== null && _b !== void 0 ? _b : 10;
        }
        // process iterations
        if (_.iterations === undefined) {
            if (_.link && _.link.iterations === undefined) {
                _.iterations = _.link.iterations;
            }
            if (_.collide && _.collide.iterations === undefined) {
                _.iterations = _.collide.iterations;
            }
        }
        // assign to context
        this.context.options = _;
        return _;
    }
    genericLayout(assign, graph, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _options = this.getOptions(options);
            const nodes = graph.getAllNodes().map(({ id, data }) => (Object.assign(Object.assign({ id }, data), pick(data.data, this.config.inputNodeAttrs))));
            const edges = graph.getAllEdges().map((edge) => (Object.assign({}, edge)));
            Object.assign(this.context, { assign, nodes, edges, graph });
            const promise = new Promise((resolver) => {
                this.resolver = resolver;
            });
            const simulation = this.setSimulation(_options);
            simulation.nodes(nodes);
            (_a = simulation.force('link')) === null || _a === void 0 ? void 0 : _a.links(edges);
            return promise;
        });
    }
    getResult() {
        const { assign, nodes, edges, graph } = this.context;
        const nodesResult = nodes.map((node) => ({
            id: node.id,
            data: Object.assign(Object.assign({}, node.data), pick(node, this.config.outputNodeAttrs)),
        }));
        const edgeResult = edges.map(({ id, source, target, data }) => ({
            id,
            source: typeof source === 'object' ? source.id : source,
            target: typeof target === 'object' ? target.id : target,
            data,
        }));
        if (assign) {
            nodesResult.forEach((node) => graph.mergeNodeData(node.id, node.data));
        }
        return { nodes: nodesResult, edges: edgeResult };
    }
    initSimulation() {
        return forceSimulation();
    }
    setSimulation(options) {
        const simulation = this.simulation || this.options.forceSimulation || this.initSimulation();
        if (!this.simulation) {
            this.simulation = simulation
                .on('tick', () => { var _a; return (_a = options.onTick) === null || _a === void 0 ? void 0 : _a.call(options, this.getResult()); })
                .on('end', () => { var _a; return (_a = this.resolver) === null || _a === void 0 ? void 0 : _a.call(this, this.getResult()); });
        }
        apply(simulation, this.config.simulationAttrs.map((name) => [
            name,
            options[name],
        ]));
        Object.entries(this.forceMap).forEach(([name, Ctor]) => {
            const forceName = name;
            if (options[name]) {
                let force = simulation.force(forceName);
                if (!force) {
                    force = Ctor();
                    simulation.force(forceName, force);
                }
                apply(force, Object.entries(options[forceName]));
            }
            else
                simulation.force(forceName, null);
        });
        return simulation;
    }
}
const apply = (target, params) => {
    return params.reduce((acc, [method, param]) => {
        if (!acc[method] || param === undefined)
            return acc;
        return acc[method].call(target, param);
    }, target);
};
//# sourceMappingURL=index.js.map