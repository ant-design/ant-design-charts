import React from 'react';
import { BaseMapType, BubbleMap as Bubble,  BubbleMapOptions, ColorAttr, SizeAttr, animateAttr, IPointLayerStyleOptions } from '@antv/l7plot';
import ErrorBoundary from '../../errorBoundary';
import useMap from '../../hooks/useMap';
import useProps from '../../hooks/useProps';
import ChartLoading from '../../util/createLoading';

import { CommonConfig } from '../../interface';

export interface BubbleMapConfig extends Omit<CommonConfig, 'source'> {
  /**
   * 具体的数据
   */
  source: BubbleMapOptions['source'];
  /**
   * 图斑颜色
   */
   color?: ColorAttr;
   /**
    * 图斑大小
    */
   size?: SizeAttr;
   /**
    * 图层样式
    */
   style?: IPointLayerStyleOptions;
   /**
    * animation 配置
    */
   animate?: animateAttr;
}

const defaultProps = {
  map: { type: BaseMapType.Amap },
  source: {
    data: [],
    parser: {
      type: 'json',
      x: 'x',
      y: 'y',
    },
  },
};

const BubbleMap: React.FC<BubbleMapConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  // @ts-ignore
  const { container } = useMap<Bubble, BubbleMapOptions>(Bubble, rest);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default BubbleMap;
