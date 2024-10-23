import { OrganizationChart, CollapseExpandIcon } from "@ant-design/graphs";
import type { OrganizationChartOptions } from "@ant-design/graphs";
import React from "react";

const { ArrowCountIcon } = CollapseExpandIcon;

const data = {
  "nodes": [{ "id": "0", "data": { "email": "ejoplin@yoyodyne.com", "fax": "555-0101", "name": "Eric Joplin", "phone": "555-0100", "position": "Chief Executive Officer", "status": "online" } }, { "id": "1", "data": { "email": "groberts@yoyodyne.com", "fax": "555-0101", "name": "Gary Roberts", "phone": "555-0100", "position": "Chief Executive Assistant", "status": "busy" } }, { "id": "2", "data": { "email": "aburns@yoyodyne.com", "fax": "555-0103", "name": "Alex Burns", "phone": "555-0102", "position": "Senior Executive Assistant", "status": "offline" } }, { "id": "6", "data": { "email": "jjones@yoyodyne.com", "fax": "555-0119", "name": "John Jones", "phone": "555-0118", "position": "IT Manager", "status": "offline" } }, { "id": "11", "data": { "email": "wbrown@yoyodyne.com", "fax": "555-0129", "name": "Will Brown", "phone": "555-0128", "position": "Customer Support Manager", "status": "busy" } }, { "id": "16", "data": { "email": "ywang@yoyodyne.com", "fax": "555-0139", "name": "Yvonne Wang", "phone": "555-0138", "position": "Research and Development Manager", "status": "online" } }, { "id": "17", "data": { "email": "jsanchez@yoyodyne.com", "fax": "555-0141", "name": "Juan Sanchez", "phone": "555-0140", "position": "Chief Technology Officer", "status": "busy" } }
  ],
  "edges": [{ "source": "0", "target": "1" }, { "source": "1", "target": "2" }, { "source": "0", "target": "17" }, { "source": "17", "target": "6" }, { "source": "17", "target": "16" }, { "source": "6", "target": "11" }
  ]
}

export default () => {
  const options: OrganizationChartOptions = {
    autoFit: 'view',
    data,
  };

  const updateCollapseExpandBehavior = (options) => {
    return (transforms) => [
      ...transforms.filter((transform) => (transform as any).key !== 'collapse-expand-react-node'),
      {
        ...(transforms.find((transform) => (transform as any).key === 'collapse-expand-react-node') || {} as any),
        ...options,
      },
    ]
  }

  return <div>
    <OrganizationChart {...options} containerStyle={{ height: '320px', marginBottom: '16px' }} direction="horizontal" transforms={updateCollapseExpandBehavior({ enable: true, iconOffsetX: 12, })} />
    <OrganizationChart {...options} containerStyle={{ height: '360px' }} direction="vertical" transforms={updateCollapseExpandBehavior({
      enable: true,
      iconRender: function (isCollapsed, data) {
        return <ArrowCountIcon style={{ display: 'flex' }} graph={this} data={data} isCollapsed={isCollapsed} />;
      },
    })} />
  </div>;
}
