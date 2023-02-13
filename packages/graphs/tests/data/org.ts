export const ORG_DATA = {
  id: 'root',
  value: {
    name: 'Joel Alan',
    title: 'CEO',
    // 建议使用 bae64 数据
    icon: 'https://avatars.githubusercontent.com/u/31396322?v=4',
  },
  children: [
    {
      id: 'joel',
      value: {
        name: 'Joel Alan',
      },
      children: [
        {
          id: 'c1',
          value: {
            name: 'c1',
          },
          children: [
            {
              id: 'c1-1',
              value: {
                name: 'c1-1',
              },
            },
            {
              id: 'c1-2',
              value: {
                name: 'c1-2',
              },
              children: [
                {
                  id: 'c1-2-1',
                  value: {
                    name: 'c1-2-1',
                  },
                },
                {
                  id: 'c1-2-2',
                  value: {
                    name: 'c1-2-2',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'c2',
          value: {
            name: 'c2',
          },
        },
        {
          id: 'c3',
          value: {
            name: 'c3',
          },
          children: [
            {
              id: 'c3-1',
              value: {
                name: 'c3-1',
              },
            },
            {
              id: 'c3-2',
              value: {
                name: 'c3-2',
              },
              children: [
                {
                  id: 'c3-2-1',
                  value: {
                    name: 'c3-2-1',
                  },
                },
                {
                  id: 'c3-2-2',
                  value: {
                    name: 'c3-2-2',
                  },
                },
                {
                  id: 'c3-2-3',
                  value: {
                    name: 'c3-2-3',
                  },
                },
              ],
            },
            {
              id: 'c3-3',
              value: {
                name: 'c3-3',
              },
            },
          ],
        },
      ],
    },
  ],
};
