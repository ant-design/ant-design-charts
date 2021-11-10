import React, { useState, useEffect, useRef, useCallback } from 'react';
import { InputNumber as AInputNumber } from 'antd';

interface Props {
  disabled?: boolean;
  placeholder?: string;
  value?: number;
  onChange?: (val: number | string) => void;
}

function transformValue(val: string | number | undefined): number | undefined {
  const result = Number(val);
  return Number.isNaN(result) ? undefined : result;
}

export const InputNumber: React.FC<Props> = (props) => {
  const { disabled, placeholder, value, onChange } = props;
  const [innerValue, setInnerValue] = useState<number | undefined>(transformValue(value));
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    }
    setInnerValue(transformValue(value));
  }, [value]);

  const onValueChange = useCallback(
    (nextValue: string | number | undefined) => {
      setInnerValue(nextValue as any);
      if (typeof onChange === 'function') {
        if (nextValue === undefined) {
          onChange('');
        } else if (typeof transformValue(nextValue) === 'number') {
          onChange(transformValue(nextValue) as number);
        }
      }
    },
    [onChange],
  );

  return (
    <AInputNumber
      style={{ width: '100%' }}
      size="small"
      placeholder={placeholder}
      value={innerValue}
      onChange={onValueChange}
      disabled={disabled}
    />
  );
};
