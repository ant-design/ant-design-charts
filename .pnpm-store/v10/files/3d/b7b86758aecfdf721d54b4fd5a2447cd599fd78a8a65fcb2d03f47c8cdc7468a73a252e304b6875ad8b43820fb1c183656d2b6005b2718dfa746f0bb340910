import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
  UpOutlined,
} from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { IToolExtraInfo, IToolStatus } from '../interface';

const getColorClass = (status: IToolStatus) => {
  const colorClasses = {
    [IToolStatus.loading]: 'text-blue-600',
    [IToolStatus.success]: 'text-green-600',
    [IToolStatus.end]: 'text-gray-500',
    [IToolStatus.error]: 'text-red-600',
  };

  // Return the class, or a default value if the status is undefined
  return colorClasses[status] || 'text-gray-900';
};

const safeJsonParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error('Parsing error:', e);
    return null;
  }
};

export interface ThoughtChainProps {
  content?: IToolExtraInfo;
  status?: IToolStatus;
  source?: string;
  timeCost?: string;
}

const ThoughtChain: React.FC<ThoughtChainProps> = (params) => {
  const { content, status, source } = params;

  const [activeKey, setActiveKey] = useState([]);

  const items: CollapseProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label:
          activeKey.length > 0 ? (
            <span
              className={`flex items-center justify-between text-xs min-w-[90px] ${getColorClass(
                status!,
              )}`}
            >
              <span className="mt-px mr-4">Hide the process</span>
              <UpOutlined />
            </span>
          ) : (
            <span
              className={`flex items-center justify-between text-xs min-w-[90px] mt-[2px] ${getColorClass(
                status!,
              )}`}
            >
              <span className="mt-px mr-4">{source}</span>
              <DownOutlined className={`${getColorClass(status!)}`} />
            </span>
          ),
        children: <div>{JSON.stringify(content?.data)}</div>,
      },
    ];
  }, [status, content, activeKey, source]);

  const onChange = useCallback((key: string | string[]) => {
    // @ts-ignore
    setActiveKey(key);
  }, []);

  return (
    <div className="petercat-assistant">
      <Collapse
        size="small"
        items={items}
        activeKey={activeKey}
        onChange={onChange}
        style={{ maxWidth: '100%' }}
        expandIcon={(panelProps: any) => {
          if (panelProps.isActive) {
            return <UnorderedListOutlined className="text-gray-900 text-xs" />;
          }
          switch (status) {
            case IToolStatus.success:
              return (
                <CheckCircleOutlined
                  className={`text-xs ${getColorClass(status!)}`}
                />
              );
            case IToolStatus.loading:
              return (
                <LoadingOutlined
                  className={`text-xs ${getColorClass(status!)}`}
                />
              );
            case IToolStatus.error:
              return (
                <CloseCircleOutlined
                  className={`text-xs ${getColorClass(status!)}`}
                />
              );
            case IToolStatus.end:
              return (
                <ExclamationCircleOutlined
                  className={`text-xs ${getColorClass(status!)}`}
                />
              );
            default:
              return '';
          }
        }}
      />
    </div>
  );
};

export default ThoughtChain;
