import { type Actions, fail, redirect } from '@sveltejs/kit';
import { userCollection } from '$lib/user';
import { tokenForUser } from '$lib/auth';

export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const username = formData.get('username');
		const password = formData.get('password');

		const user = await userCollection.findOne({ username, password });

		if (!user) {
			return fail(403, {
				error: 'Invalid username or password'
			})
		}

		const token = await tokenForUser(user);

		cookies.set('session', token, {
			expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // 1 day
			httpOnly: true,
			secure: false, // To be able to use on local hosting non-https
			path: '/',
		})

		redirect(303, '/');
	}
} satisfies Actions