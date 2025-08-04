import { get, isArray, isString, set } from '.';
import type { Options } from '../interface';

export default function scale(props: Options): Options {
  const { yField, data } = props;
  const noDomainMax = isArray(data) && data.length > 0 && isString(yField) && !get(props, 'scale.y.domainMax');
  const newProps = Object.isFrozen(props) ? { ...props } : props;
  if (noDomainMax && data.reduce((acc, item) => acc + item[yField as string], 0) === 0) {
    set(newProps, 'scale.y.domainMax', 1);
  } else if (noDomainMax && data.reduce((acc, item) => acc + item[yField as string], 0) !== 0) {
    set(newProps, 'scale.y.domainMax', undefined);
  }
  return newProps;
}
