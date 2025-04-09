import type { PageServerLoad } from './';
import { getLoggedInUser } from '$lib/auth';
import { getUser, updateUser, userCollection } from '$lib/user';
import { type Actions, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, request }) => {

	const currentUser = await getLoggedInUser(cookies);

	let allUsers = await userCollection.find({}).toArray()
	allUsers = allUsers.map(user => {
		const { _id, ...rest } = user;
		return {id: _id.toString(), ...rest};
	})

	if(!currentUser?.isAdmin){
		throw new Error('Unauthorized');
	}

	return {
		users: allUsers,
	};
};

export const actions = {
	promote: async ({ cookies, request }) => {
		const data = await request.formData();
		const currentUser = await getLoggedInUser(cookies);

		if(!currentUser?.isAdmin){
			return fail(403, { message: 'Unauthorized' });
		}

		await userCollection.updateOne({ username: data.get("username").toString() }, { $set: { isAdmin: true } });
		return { success: true };
	},

	demote: async ({ cookies, request }) => {
		const data = await request.formData();
		const currentUser = await getLoggedInUser(cookies);

		if(!currentUser?.isAdmin){
			return fail(403, { message: 'Unauthorized' });
		}

		await userCollection.updateOne({ username: data.get("username").toString() }, { $set: { isAdmin: false } });
		return { success: true };
	},
} satisfies Actions;