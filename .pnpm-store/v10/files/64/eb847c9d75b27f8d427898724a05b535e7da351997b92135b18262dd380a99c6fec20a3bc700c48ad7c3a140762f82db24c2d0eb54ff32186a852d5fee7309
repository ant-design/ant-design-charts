import React, { type FC } from 'react';
import { ThunderIcon } from '../icons/ThunderIcon';

export interface IProps {
  starters: string[];
  onClick?: (msg: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

const StarterList: FC<IProps> = ({ starters, onClick, style, className }) => {
  return (
    <div className="petercat-assistant">
      <div
        className={`flex flex-col flex-wrap gap-2 items-start ${className}`}
        style={style}
      >
        {starters?.map((starterStr) => {
          return (
            <div
              key={starterStr}
              className="px-4 py-2 rounded-[20px] bg-[#3F3F46] shadow-md align-content-start cursor-pointer"
            >
              <span
                className="text-[14px] font-[500] leading-[22px] text-white flex items-center gap-1 "
                onClick={() => {
                  onClick?.(starterStr);
                }}
              >
                {starterStr}
                <ThunderIcon />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarterList;
