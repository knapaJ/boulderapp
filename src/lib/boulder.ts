import db from '$lib/db';


export type Boulder = {
	name: string,
	description: string,
	rating: string,
	image: string,
}

export const boulderCollection = db.collection<Boulder>('boulders');

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

export async function updateBoulder(boulder: Boulder) {
	return await boulderCollection.updateOne({ name: boulder.name }, { $set: boulder });
}

export async function getBoulders() {
	const boulders = await boulderCollection.find().toArray();
	return boulders;
}
