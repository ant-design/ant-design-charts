import type { Options } from '../interface';
import { get, isArray, isString, set } from '.';

const DEFAULT_DOMAIN = [0, 1];

export default function scale(props: Options): Options {
  const { yField, data } = props;
  if (
    isArray(data) &&
    isString(yField) &&
    !get(props, 'scale.y.domain') &&
    data.reduce((acc, item) => acc + item[yField as string], 0) === 0
  ) {
    const newProps = Object.isFrozen(props) ? { ...props } : props;
    set(newProps, 'scale.y.domain', DEFAULT_DOMAIN);
    return newProps;
  }
  return props;
}
