import { Graph as G6Graph } from '@antv/g6';
import type { PropsWithChildren } from 'react';
import React, { CSSProperties, forwardRef, memo, useImperativeHandle } from 'react';
import { GraphinContext } from './context';
import useGraph from './hooks/useGraph';
import type { GraphinProps } from './types';

type GraphRef = G6Graph | null;

/**
 * Graphin, the react component for G6.
 */
const Graph = forwardRef<GraphRef, PropsWithChildren<GraphinProps>>((props, ref) => {
  const { style, children, ...restProps } = props;
  const { graph, containerRef, isReady } = useGraph<GraphinProps>(restProps);

  useImperativeHandle(ref, () => graph!, [graph]);

  const containerStyle: CSSProperties = {
    height: 'inherit',
    position: 'relative',
    ...style,
  };

  if (children) {
    return (
      <GraphinContext.Provider value={{ graph, isReady }}>
        <div ref={containerRef} style={containerStyle}>
          {isReady && children}
        </div>
      </GraphinContext.Provider>
    );
  }

  return <div ref={containerRef} style={containerStyle}></div>;
});

export const Graphin = memo(Graph);
