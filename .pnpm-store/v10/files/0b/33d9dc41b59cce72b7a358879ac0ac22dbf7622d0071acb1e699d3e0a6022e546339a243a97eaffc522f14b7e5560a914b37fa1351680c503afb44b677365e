import Lottie from 'lottie-react';
import React from 'react';
import LoadingAnimationStart from '../../assets/bubble-start.json';

interface LoadingStartProps {
  loop?: boolean;
  onComplete?: () => void;
  className?: string;
}

const LoadingStart: React.FC<LoadingStartProps> = (props) => {
  const { onComplete, loop = true } = props;

  return (
    <div className={`loading ${props.className || ''}`}>
      <Lottie
        animationData={LoadingAnimationStart}
        loop={loop}
        autoplay={true}
        onComplete={onComplete}
      />
    </div>
  );
};

export default LoadingStart;
