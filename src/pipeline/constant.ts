export const LAYOUT_CONFIG = {
  type: 'dagre',
  rankdir: 'LR',
  align: 'UR',
  ranksep: 50,
  nodesep: 15,
}
export const MARKER = {
  tagName: 'path',
  d: 'M 0 0 L 7 4 C 4 2 4 -2 7 -4 L 0 0'
}
export const CONNECTOR = {
  name: 'smooth',
  args: { direction: 'H' }
}
export const NODE_WIDTH = 200
export const NODE_HEIGHT = 60
export const EDGE_WIDTH = 1
export const EDGE_COLOR= '#BFBFBF'
export const LABEL_COLOR = '#8C8C8C'
export const LABEL_BACKGROUND = '#fff'
export const SOURCE_ANCHOR = 'right'
export const TARGET_ANCHOR = 'left'
export const CONNECTORPOINT = 'anchor'
export const ROUTER = 'normal'