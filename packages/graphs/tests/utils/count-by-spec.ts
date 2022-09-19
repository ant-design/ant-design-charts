import { countBy } from '../../src/utils';

describe('utils countBy', () => {
  it('countBy', () => {
    const data = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ];
    const countObj1 = countBy(data, (item) => item.active);
    expect(countObj1['true']).toBe(2);
    expect(countObj1['false']).toBe(1);
    const countObj2 = countBy(
      data.map((item) => item.user),
      (item) => item,
    );
    expect(countObj2['barney']).toBe(1);
    expect(countObj2['betty']).toBe(1);
    expect(countObj2['fred']).toBe(1);
    const countObj3 = countBy(data.map((item) => item.user));
    expect(countObj3['barney']).toBe(1);
    expect(countObj3['betty']).toBe(1);
    expect(countObj3['fred']).toBe(1);
  });
});
