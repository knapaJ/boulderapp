import db from '$lib/db';
import { ObjectId, type WithId } from 'mongodb';
import type { User } from '$lib/user';


export type Boulder = {
	name: string,
	description: string,
	rating: string,
	image: string,
}

export type Attempt = {
	count: number,
	topped: boolean,
	boulderId: ObjectId,
	userId: ObjectId,
}

export const boulderCollection = db.collection<Boulder>('boulders');
export const attemptCollection = db.collection<Attempt>('attempts');

export async function createBoulder(boulder: Boulder) {
	const existing = await boulderCollection.findOne({ name: boulder.name });
	if (existing) {
		return null;
	}
	return await boulderCollection.insertOne(boulder);
}

export async function deleteBoulder(boulder: Boulder) {
	return await boulderCollection.deleteOne(boulder);
}

export async function updateBoulder(boulder: WithId<Boulder>) {
	return await boulderCollection.updateOne({ _id: boulder._id }, { $set: boulder });
}

export async function getBoulders() {
	const boulders = await boulderCollection.find().toArray();
	return boulders;
}

export async function getBoulder(name: string) {
	const existing = await boulderCollection.findOne({ name: name });
	return existing;
}

export async function getBoulderById(id: string) {
	const existing = await boulderCollection.findOne({ _id: new ObjectId(id) });
	return existing;
}

export async function getAttemptOfUser(user: WithId<User>, boulder: WithId<Boulder>): Promise<WithId<Attempt>> {
	const current = await attemptCollection.findOne({ userId: user._id, boulderId: boulder._id });
	if (!current) {
		const defaultAttempt: Attempt = {
			count: 0,
			topped: false,
			boulderId: boulder._id,
			userId: user._id,
		}
		const ret = await attemptCollection.insertOne(defaultAttempt);
		return {
			...defaultAttempt,
			_id: ret.insertedId,
		}
	}
	return current;
}