import { createClient } from 'redis';

const client = createClient();
client.connect()

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: Error: Redis connection to ${err.address}:${err.port} failed -`, err.message);
});

function setNewSchool(schoolName, value) {
  const key = client.set(schoolName, value, (_, replay) => {
    return replay
  });
  key.then(result => {
    console.log(`Replay: ${result}`);
  })
}

function displaySchoolValue(schoolName) {
  const value = client.get(schoolName, (_, replay) => {
    return replay
  });
  value.then(result => {
    console.log(result);
  })
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
