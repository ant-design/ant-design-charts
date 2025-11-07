export interface ObjectType<T> {
  [key: string]: T;
}

function substitute<T>(str: string, o: ObjectType<T>) {
  if (!str || !o) {
    return str;
  }
  return str.replace(/\\?\{([^{}]+)\}/g, (match, name): any => {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }
    return o[name] === undefined ? '' : o[name];
  });
}

export default substitute;
