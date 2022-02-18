export interface IPlugn {
  updateNode: (config: object) => void;
  updateEdge: (config: object, type: string, key: 'arrow' | '') => void;
  updateGroup: (config: object) => void;
}

export interface IControlProps {
  plugin: IPlugn;
  config: object;
}
