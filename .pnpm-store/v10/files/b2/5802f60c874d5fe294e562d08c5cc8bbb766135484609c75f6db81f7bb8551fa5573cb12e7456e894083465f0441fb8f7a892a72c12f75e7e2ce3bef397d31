import { convertBreakpointToResponsive } from "../utils/responsive";
import { Grid } from 'antd';
import { useMemo } from 'react';
export var useResponsive = function useResponsive() {
  var breakpoints = Grid.useBreakpoint();
  return useMemo(function () {
    return convertBreakpointToResponsive(breakpoints);
  }, [breakpoints]);
};