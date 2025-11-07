import isType from './is-type';

export default (value: any): value is Array<any> => {
  return Array.isArray ?
    Array.isArray(value) :
    isType(value, 'Array');
}
