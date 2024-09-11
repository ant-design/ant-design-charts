import { ChartLoading, ErrorBoundary } from '@ant-design/charts-util';
import type { Graph } from '@antv/g6';
import { Graphin } from '@antv/graphin';
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import type { GraphOptions, GraphType } from '../types';
import { useOptions } from './hooks';

interface BaseGraphProps extends GraphOptions {
  /**
   * 内部属性，只读
   */
  readonly type: GraphType;
}

export const BaseGraph: ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<BaseGraphProps>> & RefAttributes<Graph>
> = forwardRef<Graph, PropsWithChildren<BaseGraphProps>>(({ children, ...props }, ref) => {
  const { type, containerStyle, className, errorTemplate, loading, loadingTemplate, ...propOptions } = props;
  const graphRef = useRef<Graph | null>(null);

  const options = useOptions(type, propOptions);

  useImperativeHandle(ref, () => graphRef.current!);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <Graphin
        onInit={(ref) => {
          graphRef.current = ref;
        }}
        className={className}
        style={containerStyle}
        options={options}
      >
        {children}
      </Graphin>
    </ErrorBoundary>
  );
});
