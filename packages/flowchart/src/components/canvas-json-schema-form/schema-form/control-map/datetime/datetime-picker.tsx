import React, { useEffect, useRef, useState, useCallback } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}

export const DatetimePicker: React.FC<Props> = (props) => {
  const { className, style, disabled, value, onChange } = props;
  const [innerValue, setInnerValue] = useState<moment.Moment | undefined>(value ? moment(value) : undefined);
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const valueMoment = moment(value);
    if (valueMoment.isValid()) {
      setInnerValue(valueMoment);
    }
  }, [value]);

  const onChangeMoment = useCallback(
    (_: any, dateString: string) => {
      const nextMoment = moment(dateString);
      setInnerValue(nextMoment.isValid() ? nextMoment : undefined);
      if (typeof onChange === 'function') {
        onChange(nextMoment.isValid() ? nextMoment.format('YYYY-MM-DD HH:mm:ss') : '');
      }
    },
    [onChange],
  );

  return (
    <DatePicker
      showTime
      allowClear
      className={className}
      style={style}
      disabled={disabled}
      value={innerValue}
      onChange={onChangeMoment}
    />
  );
};
