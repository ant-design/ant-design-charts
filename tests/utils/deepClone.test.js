import { utils } from '../../src/util'

const { deepClone } = utils;

describe('utils deepClone', () => {
  it('deepClone', () => {
    const data = {
      nodes: [
        {
          id: 'node1'
        },
        {
          id: 'node2'
        }
      ],
      edges: [
        {
          source: 'node1',
          target: 'node2'
        }
      ]
    }

    const cloneObj = deepClone(data)
    expect(deepClone(undefined)).toBeUndefined();
    expect(JSON.stringify(data)).toEqual(JSON.stringify(cloneObj))
    // 修改 clone 后的数据
    cloneObj.nodes.push({
      id: 'node3'
    })
    
    expect(data).not.toEqual(cloneObj)
    expect(JSON.stringify(data)).not.toEqual(JSON.stringify(cloneObj))
  })
});
