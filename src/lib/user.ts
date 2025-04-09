import db from '$lib/db';
import type { Cookies } from '@sveltejs/kit';
import type { OptionalId } from 'mongodb';

export type User = {
	username: string,
	password: string,
	firstName: string,
	lastName: string,
	faculty: string,
	isAdmin: boolean,
	hiddenFromLeaderboard: boolean,
	sex: string,
	level: string,
}

export const userCollection = db.collection<User>('users');

export async function getUser(username: string): Promise<User | null> {
	const user = await userCollection.findOne({ username });
	if (!user) return null;
	return user;
}

export async function createUser(user: User): Promise<User | null> {
	const userCollection = db.collection<User>('users');
	const existingUser = await userCollection.findOne({ username: user.username });
	if (existingUser) return null;

	// check if its the first user and make him admin if yes
	const numUsers = await userCollection.countDocuments();
	user.isAdmin = numUsers === 0;

	await userCollection.insertOne(user);
	return user;
}

export async function updateUser(user: User): Promise<User | null> {
	const userCollection = db.collection<User>('users');
	const existingUser = await userCollection.findOne({ username: user.username });
	if (!existingUser) return null;

	if((user.username !== existingUser.username) && (!user.isAdmin)){
		return null;
	}

	await userCollection.updateOne({ username: user.username }, { $set: user });
	return user;
}
