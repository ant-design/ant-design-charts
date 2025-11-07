import * as React from 'react';
function useTypingConfig(typing) {
  return React.useMemo(() => {
    if (!typing) {
      return [false, 0, 0, null];
    }
    let baseConfig = {
      step: 1,
      interval: 50,
      // set default suffix is empty
      suffix: null
    };
    if (typeof typing === 'object') {
      baseConfig = {
        ...baseConfig,
        ...typing
      };
    }
    return [true, baseConfig.step, baseConfig.interval, baseConfig.suffix];
  }, [typing]);
}
export default useTypingConfig;