import React from 'react';
import ReactDOM from 'react-dom';
import { ConversionDagreGraph } from '@ant-design/graphs';

const DemoConversionDagreGraph = () => {
  const data = {
    "nodes": [
      {
        "id": "node-0",
        "name": "页面-0",
        "layerName": "层级0",
        "measure": {
          "name": "DAU",
          "value": 17500000000,
          "formattedValue": 175,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 1000000,
            "formattedValue": 100,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#F5A623"
        }
      },
      {
        "id": "node-1",
        "name": "页面1",
        "layerName": "层级0",
        "measure": {
          "name": "DAU",
          "value": 5500000000,
          "formattedValue": 55,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 500000,
            "formattedValue": 50,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#F5A623"
        }
      },
      {
        "id": "node-2",
        "name": "页面2",
        "layerName": "层级0",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 100000,
            "formattedValue": 10,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#F5A623"
        }
      },
      {
        "id": "node-3",
        "name": "页面3",
        "layerName": "层级0",
        "measure": {
          "name": "DAU",
          "value": 900000000,
          "formattedValue": 9,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 50000,
            "formattedValue": 5,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#F5A623"
        }
      },
      {
        "id": "node-4",
        "name": "页面4",
        "layerName": "层级0",
        "measure": {
          "name": "DAU",
          "value": 5700000000,
          "formattedValue": 57,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 60000,
            "formattedValue": 6,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#F5A623"
        }
      },
      {
        "id": "node-5",
        "name": "页面5",
        "layerName": "层级1",
        "measure": {
          "name": "DAU",
          "value": 24000000000,
          "formattedValue": 240,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 1600000,
            "formattedValue": 160,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#4A90E2"
        }
      },
      {
        "id": "node-6",
        "name": "页面6",
        "layerName": "层级1",
        "measure": {
          "name": "DAU",
          "value": 6600000000,
          "formattedValue": 66,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 110000,
            "formattedValue": 11,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#4A90E2"
        }
      },
      {
        "id": "node-7",
        "name": "页面7",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
              "name": "MAU",
              "value": 500000,
              "formattedValue": 50,
              "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      },
      {
        "id": "node-8",
        "name": "页面8",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 500000,
            "formattedValue": 50,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      },
      {
        "id": "node-9",
        "name": "页面9",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 900000,
          "formattedValue": 90,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 500000,
            "formattedValue": 50,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      },
      {
        "id": "node-10",
        "name": "页面10",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 10000000000,
          "formattedValue": 100,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
              "name": "MAU",
              "value": 100000,
              "formattedValue": 10,
              "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      },
      {
        "id": "node-11",
        "name": "页面11",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 1000000000,
          "formattedValue": 10,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
              "name": "MAU",
              "value": 90000,
              "formattedValue": 9,
              "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      },
      {
        "id": "node-12",
        "name": "页面12",
        "layerName": "层级2",
        "measure": {
          "name": "DAU",
          "value": 600000000,
          "formattedValue": 6,
          "formattedUnit": "万"
        },
        "relatedMeasures": [
          {
            "name": "MAU",
            "value": 10000,
            "formattedValue": 1,
            "formattedUnit": "万"
          }
        ],
        "compareMeasures": [],
        "style": {
          "stroke": "#7ED321"
        }
      }
    ],
    "edges": [
      {
        "id": "edge-0",
        "source": "node-0",
        "target": "node-5",
        "measure": {
          "name": "DAU",
          "value": 17500000000,
          "formattedValue": 175,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-1",
        "source": "node-1",
        "target": "node-5",
        "measure": {
          "name": "DAU",
          "value": 5500000000,
          "formattedValue": 55,
          "formattedUnit": "万"
      }
      },
      {
        "id": "edge-2",
        "source": "node-2",
        "target": "node-5",
        "measure": {
          "name": "DAU",
          "value": 1000000000,
          "formattedValue": 10,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-3",
        "source": "node-3",
        "target": "node-6",
        "measure": {
          "name": "DAU",
          "value": 900000000,
          "formattedValue": 9,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-4",
        "source": "node-5",
        "target": "node-7",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-5",
        "source": "node-5",
        "target": "node-8",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-6",
        "source": "node-5",
        "target": "node-9",
        "measure": {
          "name": "DAU",
          "value": 9000000000,
          "formattedValue": 90,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-7",
        "source": "node-5",
        "target": "node-10",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-8",
        "source": "node-6",
        "target": "node-11",
        "measure": {
          "name": "DAU",
          "value": 1000000000,
          "formattedValue": 10,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-9",
        "source": "node-4",
        "target": "node-6",
        "measure": {
          "name": "DAU",
          "value": 5700000000,
          "formattedValue": 57,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-10",
        "source": "node-5",
        "target": "node-6",
        "measure": {
          "name": "DAU",
          "value": 2000000000,
          "formattedValue": 20,
          "formattedUnit": "万"
        },
        "style": {
          "dashed": true
        }
      },
      {
        "id": "edge-11",
        "source": "node-6",
        "target": "node-12",
        "measure": {
          "name": "DAU",
          "value": 600000000,
          "formattedValue": 6,
          "formattedUnit": "万"
        }
      },
      {
        "id": "edge-12",
        "source": "node-6",
        "target": "node-10",
        "measure": {
          "name": "DAU",
          "value": 5000000000,
          "formattedValue": 50,
          "formattedUnit": "万"
        }
      }
    ]
  };

  const config = {
    data,
    layerOrder: ['层级0', '层级1', '层级2'],
    segmLayer: '层级1',
    ratioMethod: 'both',
    onChangeData,
  };

  return <ConversionDagreGraph {...config} />;
};

ReactDOM.render(<DemoConversionDagreGraph />, document.getElementById('container'));
