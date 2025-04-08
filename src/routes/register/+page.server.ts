import type { PageServerLoad } from './$types';
import { type Actions, fail, redirect } from '@sveltejs/kit';
import { createUser } from '$lib/user';
import { tokenForUser } from '$lib/auth';

export const load: PageServerLoad = async (event) => {
	return {};
};

export const actions: Actions = {
	default: async ({ cookies, request }) =>{
		const data = await request.formData();

		const username = data.get('username');
		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const faculty = data.get('faculty');
		const password = data.get('password');
		const confirm_password = data.get('confirm-password');
		const tnc = data.get('tnc');



		if (password !== confirm_password) {
			return fail(400, {
				username, firstName,lastName, faculty, tnc,
				error: 'passwd-nomatch' } );
		}
		if (!tnc) {
			return fail(400, { username, firstName,lastName, faculty, error: 'tnc-not-accepted' });
		}
		if (!username || !firstName || !lastName || !faculty || !password) {
			return fail(400, { error: 'missing-fields' });
		}

		//console.log(username, firstName, lastName, faculty, password, confirm_password, tnc);

		const createdUser = await createUser({
			username: username.toString(),
			password: password.toString(),
			firstName: firstName.toString(),
			lastName: lastName.toString(),
			faculty: faculty.toString(),
			isAdmin: false,
			hiddenFromLeaderboard: false,
		});

		if (!createdUser) {
			return fail(400, { firstName,lastName, faculty, error: 'user-exists' });
		}

		const token = await tokenForUser(createdUser);

		cookies.set('session', token, {
			expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // 1 day
			httpOnly: true,
			path: '/',
		})

		//success
		redirect(303, '/');
	}
} satisfies Actions;
