import { useEffect } from 'react';
import { isBrowser } from "../../isBrowser";
export function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  useEffect(function () {
    if (isBrowser() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title, titleText]);
}