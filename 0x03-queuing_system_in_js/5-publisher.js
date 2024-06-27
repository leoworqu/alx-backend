import { createClient } from 'redis';

const clientPub = createClient();
clientPub.connect()
clientPub.on('connect', () => {
  console.log('Redis client connected to the server');
});

clientPub.on('error', (err) => {
  console.error(`Redis client not connected to the server:`, err.message);
});

const CHANNEL = 'holberton school channel';

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    clientPub.publish(CHANNEL, message);
  }, time);
}

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
