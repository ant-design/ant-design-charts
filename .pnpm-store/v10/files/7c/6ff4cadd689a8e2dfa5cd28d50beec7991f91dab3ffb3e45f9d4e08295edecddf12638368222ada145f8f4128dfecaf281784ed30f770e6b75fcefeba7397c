import React from 'react';
import GitInsightIcon from './GitInsightIcon';
import ScrollNumber from './ScrollNumber';

export interface CountCardProps {
  type: 'fork' | 'commit' | 'star';
  count: number;
}
const CountCard: React.FC<CountCardProps> = (props) => {
  const { type, count } = props;

  return (
    <div className="flex items-center justify-center">
      <GitInsightIcon type={type} />
      <ScrollNumber count={count} />
    </div>
  );
};

export default CountCard;
