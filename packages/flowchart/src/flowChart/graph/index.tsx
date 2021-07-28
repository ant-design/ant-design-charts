import React, { useEffect } from 'react';
import { Graph } from '@antv/x6';

const X6Graph: React.FC = (props) => {
  const container = React.useRef(null);

  useEffect(() => {
    new Graph({
      container: container.current as any,
      width: 800,
      height: 600,
    });
  }, []);

  return <div ref={container} />;
};

export default X6Graph;
