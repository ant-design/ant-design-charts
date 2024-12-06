import { OrganizationChart, RCNode, type OrganizationChartOptions } from "@ant-design/graphs"
import React from "react";

const { OrganizationChartNode } = RCNode;

const data = {
  "nodes": [{ "id": "0", "data": { "email": "ejoplin@yoyodyne.com", "fax": "555-0101", "name": "Eric Joplin", "phone": "555-0100", "position": "Chief Executive Officer", "status": "online" } }, { "id": "1", "data": { "email": "groberts@yoyodyne.com", "fax": "555-0101", "name": "Gary Roberts", "phone": "555-0100", "position": "Chief Executive Assistant", "status": "busy" } }, { "id": "2", "data": { "email": "aburns@yoyodyne.com", "fax": "555-0103", "name": "Alex Burns", "phone": "555-0102", "position": "Senior Executive Assistant", "status": "offline" } }, { "id": "6", "data": { "email": "jjones@yoyodyne.com", "fax": "555-0119", "name": "John Jones", "phone": "555-0118", "position": "IT Manager", "status": "offline" } }, { "id": "11", "data": { "email": "wbrown@yoyodyne.com", "fax": "555-0129", "name": "Will Brown", "phone": "555-0128", "position": "Customer Support Manager", "status": "busy" } }, { "id": "16", "data": { "email": "ywang@yoyodyne.com", "fax": "555-0139", "name": "Yvonne Wang", "phone": "555-0138", "position": "Research and Development Manager", "status": "online" } }, { "id": "17", "data": { "email": "jsanchez@yoyodyne.com", "fax": "555-0141", "name": "Juan Sanchez", "phone": "555-0140", "position": "Chief Technology Officer", "status": "busy" } }
  ],
  "edges": [{ "source": "0", "target": "1" }, { "source": "1", "target": "2" }, { "source": "0", "target": "17" }, { "source": "17", "target": "6" }, { "source": "17", "target": "16" }, { "source": "6", "target": "11" }
  ]
}

const CustomNode = ({ text }: { text: string }) => {
  return <div style={{
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f7f0fe',
    color: '#873bf4',
    boxShadow: '0 0 0 2px #873bf4'
  }}>{text}</div>
}

export default () => {
  const options: OrganizationChartOptions = {
    containerStyle: { height: '360px' },
    direction: 'horizontal',
    padding: [20, 0, 0, 80],
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => {
          const { name, position, status } = d.data || {};
          return <OrganizationChartNode name={name} position={position} status={status} />;
        },
        size: [240, 80],
      },
    },
    edge: {
      style: {
        radius: 16,
        lineWidth: 2,
        endArrow: true,
      },
    },
    layout: {
      type: 'antv-dagre',
      nodesep: -10,
      ranksep: 80,
    },
  };

  const options2: OrganizationChartOptions = {
    containerStyle: { height: '300px' },
    direction: 'horizontal',
    padding: [20, 0, 0, 60],
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.data.name} />,
        size: [120, 40],
      },
    },
    edge: {
      style: {
        stroke: '#873bf4',
        radius: 4,
        lineWidth: 2,
        endArrow: true,
      },
    },
    layout: {
      type: 'antv-dagre',
      nodesep: -10,
      ranksep: 80,
    },
  }

  return <div>
    <OrganizationChart {...options} />
    <OrganizationChart {...options2} />
  </div>;
}
