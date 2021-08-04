import React, { useCallback } from 'react';
import {
  NsGraphCmd,
  XFlowGraphCommands,
  ContextServiceUtils,
  XFlowNodeCommands,
  XFlowEdgeCommands,
  NsEdgeCmd,
  IControlProps,
} from '@ali/xflow';
import useAsync from './useAsync';
import { usePanelContext, FormItemWrapper } from '@ali/xflow';

export interface IFormWrapper {
  children: (
    config: Object,
    plugin: { updateNode: (params: Object) => void; updateEdge: (params: Object) => void },
  ) => React.ReactElement;
}

export const FormWrapper: React.FC<IControlProps & IFormWrapper & { type: string }> = (props) => {
  const { controlSchema, children, type = 'node' } = props;
  const { commands, contextService } = usePanelContext();

  const getSelectNode = useCallback(async () => {
    const { data } = await ContextServiceUtils.useSelectedNode(contextService);
    return data as object;
  }, [props]);

  const getSelectEdge = useCallback(async () => {
    const { cell, data } = await ContextServiceUtils.useSelectedCell(contextService);
    return {
      id: cell.id,
      ...(data as object),
    };
  }, [props]);

  const { data, loading } = useAsync(type === 'edge' ? getSelectEdge : getSelectNode);

  React.useEffect(() => {
    commands.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
      saveGraphDataService: async (meta, graph) => {
        return { err: null, data: graph, meta };
      },
    } as NsGraphCmd.SaveGraphData.IArgs);
  }, [props]);

  const updateNode = async (value: object) => {
    const currentNodeData = await getSelectNode();
    commands.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...currentNodeData,
        ...value,
      },
    });
  };

  const updateEdge = async (value: object) => {
    const currentEdgeData = await getSelectEdge();

    commands.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
      edgeConfig: {
        ...currentEdgeData,
        ...value,
      },
    } as NsEdgeCmd.UpdateEdge.IArgs);
  };

  if (loading) {
    return null;
  }

  return (
    <FormItemWrapper schema={controlSchema}>
      {() => {
        return children({ ...(data as object) }, { updateNode, updateEdge });
      }}
    </FormItemWrapper>
  );
};
