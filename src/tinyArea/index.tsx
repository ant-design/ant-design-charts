// import React, { useEffect, useContext } from 'react';
// import { TinyArea, TinyAreaConfig as G2plotProps } from '@antv/g2plot';
// import useChart from '../hooks/useChart';
// import { ErrorBoundary, ConfigContext } from '../base';

// export interface TinyAreaConfig extends G2plotProps {
//   chartRef?: React.MutableRefObject<TinyArea | undefined>;
// }

// const TechTinyArea: React.FC<TinyAreaConfig> = (props: TinyAreaConfig) => {
//   const { chartRef, ...rest } = props;

//   const { chart, container } = useChart<TinyArea, TinyAreaConfig>(TinyArea, rest);

//   useEffect(() => {
//     if (chartRef) {
//       chartRef.current = chart.current;
//     }
//   }, [chart.current]);

//   return <div ref={container} />;
// };

// export default (props: TinyAreaConfig) => {
//   const config = useContext(ConfigContext);
//   return (
//     <ErrorBoundary>
//       <TechTinyArea {...config} {...props} />
//     </ErrorBoundary>
//   );
// };
