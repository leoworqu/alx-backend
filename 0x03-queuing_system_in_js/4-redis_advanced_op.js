import { createClient, print } from 'redis';

const client = createClient();
client.connect()
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: Error: Redis connection to ${err.address}:${err.port} failed -`, err.message);
});

const school = 'HolbertonSchools';
client.HSET(school, "Portland", '50', print)
client.HSET(school, "Seattle", '80', print)
client.HSET(school, "New York", '20', print)
client.HSET(school, "Bogota", '20', print)
client.HSET(school, "Cali", '40', print)
client.HSET(school, "Paris", '2', print)

const value = client.HGETALL(school)
value.then(res => {
    console.log({...res});
})
