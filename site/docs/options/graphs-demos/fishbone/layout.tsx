import { Fishbone, type FishboneOptions } from '@ant-design/graphs';
import React from 'react';

const data = {
  id: 'Product Profitability Below Expectations',
  children: [
    {
      id: 'Problem Description',
      children: [
        { id: 'Brand Sales Volume' },
        { id: 'Market Capacity' },
        { id: 'Brand Market Share' },
        { id: 'Total Contribution Margin' },
      ],
    },
    {
      id: 'Brand Positioning',
      children: [{ id: 'Packaging' }, { id: 'Brand Name' }, { id: 'Selling Price' }, { id: 'Product Specifications' }],
    },
    {
      id: 'Distribution Channels',
      children: [{ id: 'Region' }, { id: 'Channel' }, { id: 'Customer Type' }, { id: 'Sales Personnel Coverage' }],
    },
    {
      id: 'Market Awareness',
      children: [
        { id: 'Regional Weighting' },
        { id: 'Media Mix' },
        { id: 'Advertising Investment' },
        { id: 'Quality Perception' },
      ],
    },
    {
      id: 'Trial Purchase',
      children: [
        { id: 'In-store Display' },
        { id: 'Promotion Type' },
        { id: 'Timing of Promotion' },
        { id: 'Supply Assurance' },
      ],
    },
    {
      id: 'Repeat Purchase',
      children: [
        { id: 'Consumer Profile' },
        { id: 'Usage Occasion' },
        { id: 'Frequency of Use' },
        { id: 'Returns Due to Product Issues' },
      ],
    },
  ],
};

export default () => {
  const options: FishboneOptions = {
    autoFit: 'view',
    data,
    layout: {
      hGap: 40,
      vGap: 60,
      getRibSep: (node) => (node.depth === 0 ? 0 : -40),
    },
  };

  return <Fishbone {...options} />;
};
