import React, { useEffect, useState } from 'react';
import { G6, Fishbone, type FishboneOptions } from '@ant-design/graphs';

const { treeToGraphData } = G6;

const data = {
  id: 'Overcome procrastination',
  children: [
    {
      id: 'Perfectionism',
      children: [
        { id: 'Correctly assess the difficulty of things' },
        { id: 'Complete first, then improve' },
        { id: 'Just do it' },
      ],
    },
    {
      id: 'Improve concentration',
      children: [
        { id: 'Pomodoro Technique' },
        { id: 'Limited time, limited quantity, only do one thing at a time' },
        { id: 'Improve anti-interference ability, reduce interruptions' },
      ],
    },
    {
      id: 'Set a clear task management process',
      children: [
        { id: 'Set priorities for completed tasks' },
        { id: 'Break down specific executable goals' },
        { id: 'Collect-sort-sort-execute feedback-summary' },
      ],
    },
    {
      id: 'Establish positive feedback',
      children: [{ id: 'Do what you like' }, { id: 'Spiritual motivation' }, { id: 'Material motivation' }],
    },
    {
      id: 'Relax and enjoy',
      children: [
        { id: 'Focus on process rather than results' },
        { id: 'Driven by needs rather than anxiety' },
        { id: 'Accept and understand' },
      ],
    },
  ],
};


export default () => {
  const options: FishboneOptions = {
    containerStyle: { height: '320px' },
    autoFit: 'view',
    type: 'decision',
    data: treeToGraphData(data),
  };

  return <Fishbone {...options} />;
};
