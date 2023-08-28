/**
 * @description: 需要支持 JSX 的配置项
 * @example
 *    1. config: { label: { render: () => <div>xxx</div> } }
 */
export const JSX_TO_STRING = [
  { path: ['label', 'render'] },
  {
    path: ['interaction', 'tooltip', 'render'],
    extra: {
      className: 'g2-tooltip',
    },
  },
];
