import React from 'react';
import { Link } from 'react-router-dom';

const dataSource = [
  {
    example: 'radar',
    description: '雷达图所有值为 0 的场景',
  },
].map((item, index) => ({ key: index, ...item }));

export const ExampleList = () => {
  return (
    <div
      style={{
        width: 600,
        margin: '24px auto',
        border: '1px solid #eee',
        borderRadius: 4,
        padding: 24,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {dataSource.map((data) => (
        <div key={data.key}>
          <Link to={`/${data.example}`} target="_blank" rel="noreferrer">
            <b>{data.example}: </b>
            <span>{data.description}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
