import {MongoClient, type ObjectId } from 'mongodb';
import { env } from '$env/dynamic/private';


const client = new MongoClient(env.DB_URI);
await client.connect();

export default client.db('boulder');


