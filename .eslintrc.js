module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    // 建议以后打开
    '@typescript-eslint/consistent-type-imports': 0,
    // 所有的路径都要有返回值
    'consistent-return': 0,
    // 不要使用__proto__，有一定的兼容性风险
    'no-proto': 0,
    // 不要修改传入的参数
    'no-param-reassign': 0,
  },
};
