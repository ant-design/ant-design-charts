import useForceRender from "../useForceRender";
import { useRefCallback } from "../useRefCallback";
export function useReactiveRef(initialValue) {
  var forceRender = useForceRender();
  var ref = useRefCallback(forceRender, initialValue);
  return ref;
}