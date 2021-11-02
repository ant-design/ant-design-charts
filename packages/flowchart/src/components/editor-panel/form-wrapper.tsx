import React, { useCallback } from 'react';
import {
  NsGraphCmd,
  XFlowGraphCommands,
  MODELS,
  XFlowNodeCommands,
  XFlowEdgeCommands,
  NsJsonSchemaForm,
  usePanelContext,
  FormItemWrapper,
} from '@ali/xflow';
import { onConfigChange } from '../../util';
import useAsync from './useAsync';

export interface IFormWrapper {
  children: (
    config: Object,
    plugin: {
      updateNode: (params: Object) => void;
      updateEdge: (params: Object) => void;
      updateGroup: (params: Object) => void;
    },
  ) => React.ReactElement;
}

export const FormWrapper: React.FC<NsJsonSchemaForm.IControlProps & IFormWrapper & { type: string }> = (props) => {
  const { controlSchema, children, type = 'node' } = props;
  const { commandService, modelService } = usePanelContext();

  const getSelectNode = useCallback(async () => {
    const { data } = await MODELS.SELECTED_NODE.useValue(modelService);
    return data as object;
  }, [props]);

  const getSelectEdge = useCallback(async () => {
    const cell = await MODELS.SELECTED_CELL.useValue(modelService);
    const data = cell.getData();
    return {
      id: cell.id,
      ...(data as any),
    };
  }, [props]);

  const { data, loading } = useAsync(type === 'edge' ? getSelectEdge : getSelectNode);

  React.useEffect(() => {
    commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
      saveGraphDataService: async (meta, graph) => {
        return { err: null, data: graph, meta };
      },
    } as NsGraphCmd.SaveGraphData.IArgs);
  }, [props]);

  const updateNode = async (value: object) => {
    const currentNodeData = await getSelectNode();
    await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...currentNodeData,
        ...value,
      },
    });
    onConfigChange();
  };

  const updateEdge = async (value: object, type: 'text' | 'line' = 'line', key?: string) => {
    const currentEdgeData = await getSelectEdge();
    // 更新线、文本样式
    const edgeConfig = {
      ...currentEdgeData,
      ...(key ? value[key] : value),
      attrs: {
        ...currentEdgeData.attrs,
        [type]: {
          ...currentEdgeData.attrs?.[type],
          ...(key ? value[key] : value),
        },
      },
    };
    await commandService.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, { edgeConfig });
    onConfigChange();
  };

  const updateGroup = async (value: object) => {
    const currentGroupData = await getSelectNode();

    await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...currentGroupData,
        ...value,
      },
    });
    onConfigChange();
  };

  if (loading) {
    return null;
  }

  return (
    <FormItemWrapper schema={controlSchema}>
      {() => {
        return children({ ...(data as object) }, { updateNode, updateEdge, updateGroup });
      }}
    </FormItemWrapper>
  );
};
