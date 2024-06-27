import { createClient } from 'redis';
import { promisify } from 'util'

const client = createClient();
client.connect()
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: Error: Redis connection to ${err.address}:${err.port} failed -`, err.message);
});

function setNewSchool(schoolName, value) {
  const key = client.set(schoolName, value);
  key.then(result => {
    console.log(`Reply: ${result}`);
  })
}

const displaySchoolValue = async (schoolName) => {
  const getAsync = promisify(client.get).bind(client);
  const value = await getAsync(schoolName)
  console.log(value)
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
