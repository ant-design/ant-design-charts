import { useRouteMeta } from 'dumi';
import { type FC } from 'react';
import './index.less';
type IContentTabs = ReturnType<typeof useRouteMeta>['tabs'];
export interface IContentTabsProps {
    tabs: IContentTabs;
    tabKey: string | null;
    onChange: (tab?: NonNullable<IContentTabs>[0]) => void;
}
declare const ContentTabs: FC<IContentTabsProps>;
export default ContentTabs;
