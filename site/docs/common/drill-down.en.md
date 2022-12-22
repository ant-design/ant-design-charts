#### drilldown

<description>**optional** *DrillDownCfg* </description>

Configuration of drilldown interaction.

Types of *DrillDownCfg* are as follows:

| Properties | Type            | Description                      |
| ---------- | --------------- | -------------------------------- |
| enabled | *boolean* | Whether enable drilldown interaction, default: 'false' |
| breadCrumb | *BreadCrumbCfg* | UI configurations of breadCrumb. |

Types of *BreadCrumbCfg* are as follows:

| Properties  | Type         | Description                           |
| ----------- | ------------ | ------------------------------------- |
| position    | *string*     | Position of breadCrumnb. Options: 'top-left' | 'bottom-left' |
| rootText    | *string*     | Text content of root, default: 'Root' |
| dividerText | *string*     | Divider, default: '/'                 |
| textStyle   | *ShapeAttrs* | Style of text                         |
| activeStyle | *ShapeAttrs* | Style of text when active (hover)     |
