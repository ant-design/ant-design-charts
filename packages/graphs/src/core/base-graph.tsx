import { ChartLoading, ErrorBoundary } from '@ant-design/charts-util';
import type { GraphOptions as G6GraphOptions, Graph } from '@antv/g6';
import { Graphin } from '@antv/graphin';
import { isEmpty } from 'lodash';
import React, {
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import type { GraphOptions } from '../types';

export const BaseGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<GraphOptions>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<GraphOptions>>(({ children, ...props }, ref) => {
  const { containerStyle, className, onInit, onReady, onDestroy, errorTemplate, loading, loadingTemplate, ...options } =
    props;
  const graphRef = useRef<Graph | null>(null);

  useImperativeHandle(ref, () => graphRef.current!);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      {!isEmpty(options.data) && (
        <Graphin
          ref={(ref) => {
            graphRef.current = ref;
          }}
          className={className}
          style={containerStyle}
          options={options as G6GraphOptions}
          onInit={onInit}
          onReady={onReady}
          onDestroy={onDestroy}
        >
          {children}
        </Graphin>
      )}
    </ErrorBoundary>
  );
});
