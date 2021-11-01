/**
 * workspace panel
 * 上层通过 WorkspacePanel.create('panelType') 创建, 暂定支持 4 种类型
 * - node: 选中节点时触发
 * - egde: 选中边时触发
 * - canvas: 选中整个画布时触发，默认样式
 * - group: 选中分组
 * eg:
 *   ```tsx
 *     <WorkspacePanel
 *        className="xflow-workspace-right-panel"
 *        position={{ width: 240, top: 0, bottom: 0, right: 0 }}
 *      >
 *       <CustomPanel />
 *     </WorkspacePanel>
 *   ```
 * CustomPanel 通过 usePanelContext() 获取 context、nodes、egdes 等信息
 */
export { WorkspacePanel, usePanelContext, NodeTreePanel } from '@ali/xflow';
