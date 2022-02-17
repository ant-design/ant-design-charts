import React, { useState, useContext } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import { usePanelContext } from '@antv/xflow';
import AppContext from '../../context';
import { getProps } from '../../util';
import { FlowchartProps } from '../../interface';
import { IProps, ICheckboxOption } from './interface';
import { CHECKBOX_OPTIONS } from './constants';
import { storage } from '../../util/stroage';

export interface IFooterProps extends IProps {
  visibleNodeTypes: string[];
  setVisibleNodeTypes: (visibleNodeTypes: string[]) => void;
}

export const NodePanelFooter: React.FC<IFooterProps> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { prefixClz, visibleNodeTypes, setVisibleNodeTypes } = props;
  const [checkedValue, setCheckedValue] = useState<string[]>([...visibleNodeTypes]);
  const { propsProxy } = usePanelContext<IProps>();
  const panelProps = propsProxy.getValue();

  const { flowchartId } = useContext(AppContext);
  const { registerNode = [] } = (getProps(flowchartId, 'nodePanelProps') as FlowchartProps['nodePanelProps']) ?? {};
  const extraCheckBoxOptions: ICheckboxOption[] = registerNode.map((item) => {
    return {
      value: item.type,
      label: item.name,
      disabled: false,
    };
  });

  const checkBoxOptions: ICheckboxOption[] = [...CHECKBOX_OPTIONS, ...extraCheckBoxOptions];

  const handleModalOk = () => {
    setIsModalVisible(false);
    setVisibleNodeTypes([...checkedValue]);
    storage.setItem('visibleNodeTypes', [...checkedValue]);
  };
  return (
    <React.Fragment>
      <div
        className={`${prefixClz}-footer`}
        style={{
          zIndex: 1,
          ...props.style,
        }}
      >
        {panelProps.footer && React.isValidElement(panelProps.footer) && panelProps.footer}
        <Button onClick={() => setIsModalVisible(true)}>更多节点</Button>
      </div>
      <Modal
        title="更多节点"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
        okText="确定"
        cancelText="取消"
      >
        <Checkbox.Group
          options={checkBoxOptions}
          value={checkedValue}
          onChange={(values) => setCheckedValue(values as string[])}
        ></Checkbox.Group>
      </Modal>
    </React.Fragment>
  );
};
