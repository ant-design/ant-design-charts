import { DisplayObject, Group, HTML, Text } from '../../shapes';
import { maybeAppend, select } from '../../util';

export function getTitleShapeBBox(titleShape?: DisplayObject): {
  top: number;
  left: number;
  right: number;
  bottom: number;
} {
  let box = { left: 0, top: 0, width: 0, height: 0 };
  if (titleShape?.tagName === 'html') {
    const { width, height } = titleShape.style;
    box = { left: 0, top: 0, width: width as number, height: height as number };
  } else if (titleShape) {
    const { min, halfExtents } = titleShape.getLocalBounds();
    box = {
      left: min[0],
      top: min[1],
      width: halfExtents[0] * 2,
      height: halfExtents[1] * 2,
    };
  }
  return { left: 0, top: 0, right: box.width, bottom: box.height };
}

export function renderTitle(container: Group, cfg?: any): any | null {
  if (!cfg) {
    const shape = container.querySelector('.legend-title');
    if (shape) shape.remove();
    return null;
  }
  const { style } = cfg;
  const className = `legend-title`;
  return maybeAppend(container, `.${className}`, () => new Text({ className, style }))
    .call((selection) => {
      selection.styles({
        fontSize: 12,
        textBaseline: 'top',
        text: cfg.content,
      });
    })
    .styles(style)
    .node();
}

export function renderGroup(container: Group, className: string, x: number, y: number): Group {
  return maybeAppend(container, `.${className}`, 'g').styles({ className, x, y }).node();
}

export function renderRect(container: Group, className: string, width: number, height: number, style: any = {}) {
  return select(container)
    .maybeAppendByClassName(className, 'rect')
    .styles({
      zIndex: -1,
      width,
      height,
      ...style,
    })
    .node();
}
