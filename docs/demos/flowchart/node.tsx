import React from 'react';

export const CustomNode = (props) => {
  const { size = {}, data } = props;

  const { width = 60, height = 40 } = size;
  return (
    <div
      style={{
        width,
        height,
        border: '1px solid #ccc',
        display: 'flex',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <span> {data?.label}</span>
    </div>
  );
};
