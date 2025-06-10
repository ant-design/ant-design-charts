### Layout

Dagre 层次布局。配置如下：

也可以参考 [Dagre Wiki](https://github.com/dagrejs/dagre/wiki)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rankdir | 节点排列方向。可以是 `TB`、`BT`、`LR` 或 `RL`，其中 T = 上，B = 下，L = 左，R = 右 | string | `TB` |
| align | 节点排列对齐方式。可以是 `UL`、`UR`、`DL` 或 `DR`，其中 U = 上，D = 下，L = 左，R = 右 | string | `undefined` |
| nodesep | 布局中节点水平间隔的像素数 | number | `50` |
| edgesep | 布局中边水平间隔的像素数 | number | `10` |
| ranksep | 布局中每个等级之间的像素数 | number | `50` |
| marginx | 图表左右两侧的边距像素数 | number | `0` |
| marginy | 图表上下两侧的边距像素数 | number | `0` |
| acyclicer | 如果设置为 greedy，则使用贪婪启发式算法来找到图的反馈弧集。反馈弧集是可以移除以使图无环的边集 | string | `undefined` |
| ranker | 为输入图中的每个节点分配等级的算法类型。可能的值：`network-simplex`、`tight-tree` 或 `longest-path` | string | `network-simplex` |
