
## 1.2.8

`2022-09-05`

- 🐞 修复节点配置 level 后无法区分 markerCfg.show 状态

```ts
  const level = 2;
  const chartProps = {
    data: TreeData,
    level,
    markerCfg: (cfg) => {
      return {
        position: 'right',
        show: cfg.children?.length,
        collapsed: cfg.depth >= level - 1,
      };
    },
  }
```

## 1.2.7

`2022-08-25`

- 🔥 nodeCfg 新增 `percent` 配置

<img src=https://gw.alipayobjects.com/zos/antfincdn/9UCy2n8WPu/fe8e1b07-efde-4ba8-9e83-97986f668faf.png>

## 1.2.6

`2022-08-23`

- 🐞 修复 `edgeCfg` 透传错误

## 1.2.5

`2022-08-22`

- 🔥 `RadialGraph` 升级，可以动态拓展
- 🔥 新增 `fetchLoading` 配置，可配合 `asyncData` `getChildren` 等配置做自定义loading
- 🐞 完善 `layout` 定义

## 1.2.4

`2022-08-19`

- 🔥 新增 `menuCfg` 配置
- 🐞 [关系图透传节点配置，支持 image 等节点](https://github.com/ant-design/ant-design-charts/issues/1489)

## 1.2.3

`2022-07-22`

- 🐞 [指标拆解图 fitCenter设置为false 时， 树从头节点重新展开](https://github.com/ant-design/ant-design-charts/issues/1441)


## 1.2.2

`2022-07-21`

- 🔥 [来源去向图新增一个异步加载功能](https://github.com/ant-design/ant-design-charts/issues/1437)

