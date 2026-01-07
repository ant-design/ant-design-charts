import React from 'react';

interface ChartHeaderProps {
  title: string;
  operation?: React.ReactNode;
}

const ChartHeader: React.FC<ChartHeaderProps> = ({ title, operation }) => {
  return (
    <div className="petercat-assistant">
      <div className="flex justify-between items-center">
        <div className="text-gray-800 font-bold text-[20px]">{title}</div>
        <>{operation}</>
      </div>
    </div>
  );
};

export default ChartHeader;
