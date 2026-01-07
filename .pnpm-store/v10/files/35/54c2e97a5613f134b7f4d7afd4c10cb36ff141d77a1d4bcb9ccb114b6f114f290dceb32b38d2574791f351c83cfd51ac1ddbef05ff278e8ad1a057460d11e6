import React, { memo, useEffect, useState } from 'react';
import CountCard from './components/CountCard';

export interface GitInsightProps {
  forkCount: number;
  commitCount: number;
  starCount: number;
}

const MemoizedCountCard = memo(CountCard);

const GitInsight = (props: GitInsightProps) => {
  const { forkCount = 0, commitCount = 0, starCount = 0 } = props;
  const [num0End, setNum0End] = useState<boolean>(false);
  const [num1End, setNum1End] = useState<boolean>(false);
  const DELAY = 333;

  useEffect(() => {
    const timer0 = setTimeout(() => {
      setNum0End(true);
    }, DELAY);

    const timer1 = setTimeout(() => {
      setNum1End(true);
    }, DELAY * 2);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="petercat-assistant">
      <div className="flex justify-start items-center">
        <div className="opacity-0 transform transition-opacity duration-500 delay-200 animate-fade-in">
          <MemoizedCountCard type="star" count={starCount} />
        </div>

        {num0End && (
          <div className="opacity-0 transform transition-opacity duration-500 delay-200 animate-fade-in">
            <MemoizedCountCard type="fork" count={forkCount} />
          </div>
        )}

        {num1End && (
          <div className="opacity-0 transform transition-opacity duration-500 delay-200 animate-fade-in">
            <MemoizedCountCard type="commit" count={commitCount} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GitInsight;
