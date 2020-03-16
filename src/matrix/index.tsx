import React, { useContext, useEffect } from 'react';
import { Matrix, MatrixConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface MatrixConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Matrix | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechMatrix: React.FC<MatrixConfig> = (props: MatrixConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Matrix, MatrixConfig>(Matrix, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const MatrixChart = (props: MatrixConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechMatrix {...config} {...props} />
    </ErrorBoundary>
  );
};

MatrixChart.defaultProps = Matrix.getDefaultOptions();

export default MatrixChart;
