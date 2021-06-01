import { processMinimap, getGraphSize } from '../../src/graph/utils';

describe('Dagre Graph', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('minimap without graph', () => {
    processMinimap({ show: true }, undefined);
  });
  it('getGraphSize without width and CANVAS_WIDTH', () => {
    getGraphSize(undefined, undefined, undefined);
  });
});
