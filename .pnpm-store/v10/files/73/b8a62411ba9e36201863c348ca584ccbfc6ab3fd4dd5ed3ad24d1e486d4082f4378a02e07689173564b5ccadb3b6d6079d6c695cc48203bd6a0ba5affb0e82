"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdjacencyMatrix = exports.computeNodeEigenvectorCentrality = exports.computeNodePageRankCentrality = exports.computeNodeClosenessCentrality = exports.computeNodeBetweennessCentrality = exports.initCentralityResult = exports.getNodeCentralities = void 0;
const algorithm_1 = require("@antv/algorithm");
const id_1 = require("./id");
const getNodeCentralities = (graphData, getRelatedEdgesData, centrality) => {
    var _a;
    switch (centrality.type) {
        case 'degree': {
            const centralityResult = new Map();
            (_a = graphData.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
                const degree = getRelatedEdgesData((0, id_1.idOf)(node), centrality.direction).length;
                centralityResult.set((0, id_1.idOf)(node), degree);
            });
            return centralityResult;
        }
        case 'betweenness':
            return (0, exports.computeNodeBetweennessCentrality)(graphData, centrality.directed, centrality.weightPropertyName);
        case 'closeness':
            return (0, exports.computeNodeClosenessCentrality)(graphData, centrality.directed, centrality.weightPropertyName);
        case 'eigenvector':
            return (0, exports.computeNodeEigenvectorCentrality)(graphData, centrality.directed);
        case 'pagerank':
            return (0, exports.computeNodePageRankCentrality)(graphData, centrality.epsilon, centrality.linkProb);
        default:
            return (0, exports.initCentralityResult)(graphData);
    }
};
exports.getNodeCentralities = getNodeCentralities;
const initCentralityResult = (graphData) => {
    var _a;
    const centralityResult = new Map();
    (_a = graphData.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
        centralityResult.set((0, id_1.idOf)(node), 0);
    });
    return centralityResult;
};
exports.initCentralityResult = initCentralityResult;
/**
 * <zh/> 计算图中每个节点的中介中心性
 *
 * <en/> Calculate the betweenness centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @param weightPropertyName - <zh/> 边的权重属性名 | <en/>The weight property name of the edge
 * @returns <zh/> 每个节点的中介中心性值 | <en/>The betweenness centrality for each node
 */
const computeNodeBetweennessCentrality = (graphData, directed, weightPropertyName) => {
    const centralityResult = (0, exports.initCentralityResult)(graphData);
    const { nodes = [] } = graphData;
    nodes.forEach((source) => {
        nodes.forEach((target) => {
            if (source !== target) {
                const { allPath } = (0, algorithm_1.findShortestPath)(graphData, (0, id_1.idOf)(source), (0, id_1.idOf)(target), directed, weightPropertyName);
                const pathCount = allPath.length;
                allPath.flat().forEach((nodeId) => {
                    if (nodeId !== (0, id_1.idOf)(source) && nodeId !== (0, id_1.idOf)(target)) {
                        centralityResult.set(nodeId, centralityResult.get(nodeId) + 1 / pathCount);
                    }
                });
            }
        });
    });
    return centralityResult;
};
exports.computeNodeBetweennessCentrality = computeNodeBetweennessCentrality;
/**
 * <zh/> 计算图中每个节点的接近中心性
 *
 * <en/> Calculate the closeness centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @param weightPropertyName - <zh/> 边的权重属性名 | <en/>The weight property name of the edge
 * @returns <zh/> 每个节点的接近中心性值 | <en/>The closeness centrality for each node
 */
const computeNodeClosenessCentrality = (graphData, directed, weightPropertyName) => {
    const centralityResult = new Map();
    const { nodes = [] } = graphData;
    nodes.forEach((source) => {
        const totalLength = nodes.reduce((acc, target) => {
            if (source !== target) {
                const { length } = (0, algorithm_1.findShortestPath)(graphData, (0, id_1.idOf)(source), (0, id_1.idOf)(target), directed, weightPropertyName);
                acc += length;
            }
            return acc;
        }, 0);
        centralityResult.set((0, id_1.idOf)(source), 1 / totalLength);
    });
    return centralityResult;
};
exports.computeNodeClosenessCentrality = computeNodeClosenessCentrality;
/**
 * <zh/> 计算图中每个节点的 PageRank 中心性
 *
 * <en/> Calculate the PageRank centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param epsilon - <zh/> PageRank 算法的收敛容差 | <en/>The convergence tolerance of the PageRank algorithm
 * @param linkProb - <zh/> PageRank 算法的阻尼系数，指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85 | <en/>The damping factor of the PageRank algorithm, which refers to the probability that a user will continue to visit the next node linked to a node at any time, with an empirical value of 0.85
 * @returns <zh/> 每个节点的 PageRank 中心性值 | <en/>The PageRank centrality for each node
 */
const computeNodePageRankCentrality = (graphData, epsilon, linkProb) => {
    var _a;
    const centralityResult = new Map();
    const data = (0, algorithm_1.pageRank)(graphData, epsilon, linkProb);
    (_a = graphData.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
        centralityResult.set((0, id_1.idOf)(node), data[(0, id_1.idOf)(node)]);
    });
    return centralityResult;
};
exports.computeNodePageRankCentrality = computeNodePageRankCentrality;
/**
 * <zh/> 计算图中每个节点的特征向量中心性
 *
 * <en/> Calculate the eigenvector centrality for each node in the graph.
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @returns 每个节点的特征向量中心性值 The eigenvector centrality for each node.
 */
const computeNodeEigenvectorCentrality = (graphData, directed) => {
    const { nodes = [] } = graphData;
    const adjacencyMatrix = (0, exports.createAdjacencyMatrix)(graphData, directed);
    const eigenvector = powerIteration(adjacencyMatrix, nodes.length);
    const centralityResult = new Map();
    nodes.forEach((node, index) => {
        centralityResult.set((0, id_1.idOf)(node), eigenvector[index]);
    });
    return centralityResult;
};
exports.computeNodeEigenvectorCentrality = computeNodeEigenvectorCentrality;
/**
 * <zh/> 创建图的邻接矩阵
 *
 * <en/> Create the adjacency matrix for the graph.
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @returns <zh/> 邻接矩阵 | <en/>The adjacency matrix
 */
const createAdjacencyMatrix = (graphData, directed) => {
    const { nodes = [], edges = [] } = graphData;
    const matrix = Array(nodes.length)
        .fill(null)
        .map(() => Array(nodes.length).fill(0));
    edges.forEach(({ source, target }) => {
        const uIndex = nodes.findIndex((node) => (0, id_1.idOf)(node) === source);
        const vIndex = nodes.findIndex((node) => (0, id_1.idOf)(node) === target);
        if (directed) {
            matrix[uIndex][vIndex] = 1;
        }
        else {
            matrix[uIndex][vIndex] = 1;
            matrix[vIndex][uIndex] = 1;
        }
    });
    return matrix;
};
exports.createAdjacencyMatrix = createAdjacencyMatrix;
/**
 * <zh/> 使用幂迭代法计算主特征向量
 *
 * <en/> Calculate the principal eigenvector using the power iteration method
 * @see https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors
 * @param matrix - <zh/> 邻接矩阵 | <en/> The adjacency matrix
 * @param numNodes - <zh/> 节点数量 | <en/> The number of nodes
 * @param maxIterations - <zh/> 最大迭代次数 | <en/> The maximum number of iterations
 * @param tolerance - <zh/> 收敛容差 | <en/> The convergence tolerance
 * @returns <zh/> 主特征向量 | <en/> The principal eigenvector
 */
const powerIteration = (matrix, numNodes, maxIterations = 100, tolerance = 1e-6) => {
    let eigenvector = Array(numNodes).fill(1);
    let diff = Infinity;
    for (let iter = 0; iter < maxIterations && diff > tolerance; iter++) {
        const newEigenvector = Array(numNodes).fill(0);
        for (let i = 0; i < numNodes; i++) {
            for (let j = 0; j < numNodes; j++) {
                newEigenvector[i] += matrix[i][j] * eigenvector[j];
            }
        }
        const norm = Math.sqrt(newEigenvector.reduce((sum, val) => sum + val * val, 0));
        for (let i = 0; i < numNodes; i++) {
            newEigenvector[i] /= norm;
        }
        diff = Math.sqrt(newEigenvector.reduce((sum, val, index) => sum + (val - eigenvector[index]) * val, 0));
        eigenvector = newEigenvector;
    }
    return eigenvector;
};
//# sourceMappingURL=centrality.js.map