import { createClient } from 'redis';

const clientSubsc = createClient();
clientSubsc.connect()
clientSubsc.on('connect', () => {
  console.log('Redis client connected to the server');
});

clientSubsc.on('error', (err) => {
  console.error(`Redis client not connected to the server:`, err.message);
});

const CHANNEL = 'holberton school channel';

clientSubsc.subscribe(CHANNEL);

clientSubsc.on('message', (channel, message) => {
  if (channel === CHANNEL) {
    console.log(message);
  }

  if (message === 'KILL_SERVER') {
    clientSubsc.unsubscribe(CHANNEL);
    clientSubsc.quit();
  }
});
