### Layout

D3 Force layout. Common parameters are as follows:

**collide:** Force to prevent node overlap.

| Property         | Description                 | Type   | Default Value |
| ---------------- | --------------------------- | ------ | ------------- |
| collide.radius   | Collision radius of nodes   | number | -             |
| collide.strength | strength of collision force | number | -             |

**link:** Used to simulate the connection relationship between nodes, ensuring that the connected nodes remain within a certain distance range.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| link.distance | The ideal distance between two nodes | number | - |
| link.strength | The strength of the link, controlling the tightness of the connection between nodes | number | - |

**manyBody:** The gravitational or repulsive force between nodes.

| Property          | Description                                                          | Type   | Default Value |
| ----------------- | -------------------------------------------------------------------- | ------ | ------------- |
| manyBody.strength | The strength of the gravitational or repulsive force between nodes   | number | -             |
| manyBody.theta    | Barnes-Hut approximation parameter for calculating multi-body forces | number | -             |

For complete parameters, refer to [d3-force](https://d3js.org/d3-force)
