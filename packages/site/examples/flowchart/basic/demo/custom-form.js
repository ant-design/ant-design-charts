import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import { Flowchart, FormWrapper } from '@ant-design/charts';
import 'antd/dist/antd.css';

const InputComponent = (props) => {
  const { config, plugin = {} } = props;
  const { placeholder, disabled } = config;
  const { updateNode } = plugin;
  const [label, setLabel] = useState < string > config?.label;

  const onLabelChange = async (e) => {
    setLabel(e.target.value);
    updateNode({
      label: e.target.value,
    });
  };

  useEffect(() => {
    setLabel(config?.label);
  }, [config]);

  return (
    <div>
      <label>标签: </label>
      <Input value={label} onChange={onLabelChange} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

const Rename = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <InputComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};

export const controlMapService = (controlMap) => {
  controlMap.set('rename-service', Rename);
  return controlMap;
};

const formSchemaService = async (args) => {
  const { targetType } = args;
  const isGroup = args.targetData?.isGroup;

  const groupSchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '分组名',
                name: 'group-service',
                shape: 'group-service',
                placeholder: '分组名称',
              },
            ],
          },
        ],
      },
    ],
  };
  const nodeSchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点名',
                name: '自定义form',
                shape: 'custom-service',
                placeholder: '节点名称',
              },
            ],
          },
        ],
      },
    ],
  };
  const edgeSchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'edge',
            controls: [
              {
                label: '边',
                shape: 'edge-service',
              },
            ],
          },
        ],
      },
    ],
  };

  if (isGroup) {
    return groupSchema;
  }

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    return edgeSchema;
  }
  return {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  };
};

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        onSave={(d) => {
          console.log(d);
        }}
        toolbarPanelProps={{
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        canvasProps={{
          position: {
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
        nodePanelProps={{
          position: { width: 160, top: 40, bottom: 0, left: 0 },
        }}
        detailPanelProps={{
          position: { width: 200, top: 40, bottom: 0, right: 0 },
          controlMapService,
          formSchemaService,
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
