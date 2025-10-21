import React, { useState } from 'react';

export interface TabItem {
  value: string;
  label: string;
}

interface SegmentedTabsProps {
  tabs?: TabItem[];
  defaultValue?: string;
  onChange?: (val: string) => void;
}

const defaultTabs = [
  { value: 'year', label: 'Year' },
  { value: 'quarter', label: 'Quarter' },
  { value: 'month', label: 'Month' },
];

const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  tabs = defaultTabs,
  defaultValue = 'month',
  onChange,
}) => {
  const initialActive =
    defaultValue && tabs.find((tab) => tab.value === defaultValue)
      ? defaultValue
      : tabs[0]?.value || '';

  const [active, setActive] = useState<string>(initialActive);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  const getTabClass = (value: string) => {
    const isActive = active === value;

    const base =
      'flex-1 flex items-center justify-center cursor-pointer text-[14px]';

    const normal = 'bg-white text-black border-none';

    const selected =
      'bg-[#3F3F46] text-white h-full border-2 border-[#3F3F46] rounded-[6px]';

    return `${base} ${isActive ? selected : normal}`;
  };

  return (
    <div
      className="
        relative
        flex
        h-[28px]
        w-[300px]
        bg-white
        border 
        border-solid
        border-gray-300
        rounded-[8px]
        items-center
        justify-between
        p-[4px]
      "
    >
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.value}>
          <div
            className={getTabClass(tab.value)}
            onClick={() => handleClick(tab.value)}
          >
            {tab.label}
          </div>

          {index !== tabs.length - 1 && (
            <div className="w-[1px] h-4 bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SegmentedTabs;
