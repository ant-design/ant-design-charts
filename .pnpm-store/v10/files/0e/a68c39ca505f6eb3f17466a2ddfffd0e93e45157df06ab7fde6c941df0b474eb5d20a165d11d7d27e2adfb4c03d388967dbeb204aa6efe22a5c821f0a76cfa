import { type useSiteSearch } from 'dumi';
import { type FC } from 'react';
import './index.less';
type ISearchResult = ReturnType<typeof useSiteSearch>['result'];
declare const SearchResult: FC<{
    data: ISearchResult;
    loading: boolean;
    onItemSelect?: (item: ISearchResult[0]['hints'][0]) => void;
}>;
export default SearchResult;
