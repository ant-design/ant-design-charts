import { useLocation } from 'react-router-dom';
import { useAppData } from "./appContext";
export function __useFetcher() {
  var _useAppData = useAppData(),
    preloadRoute = _useAppData.preloadRoute;
  var location = useLocation();
  return {
    load: function load(path) {
      preloadRoute(path || location.pathname);
    }
  };
}