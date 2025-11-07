import { _Promise } from './realtime';
import LiveQueryClient from './live-query-client';

const finalize = callback => [
  // eslint-disable-next-line no-sequences
  value => (callback(), value),
  error => {
    callback();
    throw error;
  },
];

const onRealtimeCreate = realtime => {
  /* eslint-disable no-param-reassign */
  realtime._liveQueryClients = {};
  realtime.createLiveQueryClient = subscriptionId => {
    if (realtime._liveQueryClients[subscriptionId] !== undefined) {
      return _Promise.resolve(realtime._liveQueryClients[subscriptionId]);
    }
    const promise = realtime
      ._open()
      .then(connection => {
        const client = new LiveQueryClient(
          realtime._options.appId,
          subscriptionId,
          connection
        );
        connection.on('reconnect', () =>
          client
            ._open()
            .then(
              () => client.emit('reconnect'),
              error => client.emit('reconnecterror', error)
            )
        );
        client._eventemitter.on(
          'beforeclose',
          () => {
            delete realtime._liveQueryClients[client.id];
          },
          realtime
        );
        client._eventemitter.on(
          'close',
          () => {
            realtime._deregister(client);
          },
          realtime
        );
        return client._open().then(() => {
          realtime._liveQueryClients[client.id] = client;
          realtime._register(client);
          return client;
        });
      })
      .then(
        ...finalize(() => {
          if (realtime._deregisterPending) realtime._deregisterPending(promise);
        })
      );
    realtime._liveQueryClients[subscriptionId] = promise;
    if (realtime._registerPending) realtime._registerPending(promise);
    return promise;
  };
  /* eslint-enable no-param-reassign */
};

const beforeCommandDispatch = (command, realtime) => {
  const isLiveQueryCommand = command.installationId && command.service === 1;
  if (!isLiveQueryCommand) return true;
  const targetClient = realtime._liveQueryClients[command.installationId];
  if (targetClient) {
    targetClient._dispatchCommand(command).catch(error => console.warn(error));
  } else {
    console.warn(
      'Unexpected message received without any live client match: %O',
      command
    );
  }
  return false;
};

// eslint-disable-next-line import/prefer-default-export
export const LiveQueryPlugin = {
  name: 'leancloud-realtime-plugin-live-query',
  onRealtimeCreate,
  beforeCommandDispatch,
};
