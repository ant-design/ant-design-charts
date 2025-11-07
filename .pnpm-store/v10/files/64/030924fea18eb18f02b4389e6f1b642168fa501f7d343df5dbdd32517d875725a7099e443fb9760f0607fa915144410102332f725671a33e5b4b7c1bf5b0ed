export const classNames = <T extends { [key: string]: any }>(cls: T, prefix: string) => {
  const PREFIX = (str: string) => `${prefix}-${str}`;
  const obj = Object.fromEntries(
    Object.entries(cls).map(([k, v]) => {
      const name = PREFIX(v);
      return [
        k,
        {
          name,
          class: `.${name}`,
          id: `#${name}`,
          toString() {
            return name;
          },
        },
      ];
    })
  );
  Object.assign(obj, { prefix: PREFIX });
  return obj as {
    [K in keyof T]: {
      name: string;
      class: string;
      id: string;
    };
  };
};
