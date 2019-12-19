// 组件应用文档: https://bigfish.alipay.com/doc/zhq7zk

export default {
  appType: 'library',
  deployMode: 'custom',
  doc: {
    include: ['src'],
  },
  library: {
    esm: 'rollup',
    cjs: 'rollup',
    disableTypeCheck: true,
  },
};
