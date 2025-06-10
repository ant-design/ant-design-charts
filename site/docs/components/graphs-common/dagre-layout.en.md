### Layout

**Dagre Hierarchical Layout**. The configuration options are as follows:

For more details, refer to the [Dagre Wiki](https://github.com/dagrejs/dagre/wiki).

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| `rankdir` | The direction of node arrangement. Options include `TB`, `BT`, `LR`, or `RL`, where T = Top, B = Bottom, L = Left, and R = Right. | string | `TB` |
| `align` | Node alignment mode. Options include `UL`, `UR`, `DL`, or `DR`, where U = Up, D = Down, L = Left, and R = Right. | string | `undefined` |
| `nodesep` | The horizontal spacing between nodes in the layout, in pixels. | number | `50` |
| `edgesep` | The horizontal spacing between edges in the layout, in pixels. | number | `10` |
| `ranksep` | The spacing between levels in the layout, in pixels. | number | `50` |
| `marginx` | The margin on the left and right sides of the graph, in pixels. | number | `0` |
| `marginy` | The margin on the top and bottom sides of the graph, in pixels. | number | `0` |
| `acyclicer` | If set to `greedy`, uses a greedy heuristic algorithm to find the feedback arc set of the graph. The feedback arc set consists of edges that can be removed to make the graph acyclic. | string | `undefined` |
| `ranker` | The algorithm used to assign ranks to nodes in the input graph. Possible values are `network-simplex`, `tight-tree`, or `longest-path`. | string | `network-simplex` |
