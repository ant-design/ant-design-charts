import { useContext } from 'react';
import { ConfigContext, ConfigValue } from '../context';

export default function useConfig(): ConfigValue {
  return useContext(ConfigContext);
}
