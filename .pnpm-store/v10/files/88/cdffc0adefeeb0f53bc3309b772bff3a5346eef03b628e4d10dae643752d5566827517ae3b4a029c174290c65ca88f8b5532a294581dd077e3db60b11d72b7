import Lottie from 'lottie-react';
import React, { useState } from 'react';

import LoadingAnimationEnd from '../../assets/bubble-end.json';

interface LoadingEndProps {
  children?: React.ReactNode;
  onComplete?: () => void;
}

const LoadingEnd: React.FC<LoadingEndProps> = (props) => {
  const { children } = props;

  const [complete, setComplete] = useState(false);

  if (complete) {
    return children;
  }

  return (
    <>
      <div className="loading">
        <Lottie
          animationData={LoadingAnimationEnd}
          autoplay={true}
          loop={false}
          onComplete={() => setComplete(true)}
        />
      </div>
    </>
  );
};

export default LoadingEnd;
