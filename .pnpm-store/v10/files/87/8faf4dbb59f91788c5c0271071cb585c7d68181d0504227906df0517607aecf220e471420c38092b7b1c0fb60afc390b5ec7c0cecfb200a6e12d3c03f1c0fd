import uuid from 'uuid/v4';
import { APP_ID, APP_KEY } from '../../../test/configs';
import { Realtime } from '../../../src/core';
import { LiveQueryPlugin } from '../src';

const realtime = new Realtime({
  appId: APP_ID,
  appKey: APP_KEY,
  plugins: [LiveQueryPlugin],
});

describe('LiveQuery', () => {
  it('login and logout', () =>
    realtime.createLiveQueryClient(uuid()).then(client => client.close()));
});
