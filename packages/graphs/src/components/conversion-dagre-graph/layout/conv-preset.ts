import G6 from '@antv/g6';

// 自定义preset布局，如果节点中都有位置信息时走这里
export const registerConvPreset = () => {
  G6.registerLayout('conv-preset', {
    // 执行布局
    execute: function execute() {
      // 执行一次空布局，目的是为了走布局流程触发afterlayout
    },
  });
}
