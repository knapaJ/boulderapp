import type { PageServerLoad } from './$types';
import { type Actions, fail, redirect } from '@sveltejs/kit';
import { getLoggedInUser } from '$lib/auth';
import { updateUser } from '$lib/user';

export const load: PageServerLoad = async (event) => {
	return {};
};

export const actions = {
		logout: async ({ cookies }) => {
			cookies.delete('session', { path: '/' });
			redirect(303, '/');
		},
		edit: async ({ request, cookies }) =>{
			const formData = await request.formData();

			const firstName = formData.get('firstName');
			const lastName = formData.get('lastName');
			const faculty = formData.get('faculty');
			const hiddenFromLeaderboard = formData.get('hiddenFromLeaderboard');

			let currentUser = await getLoggedInUser(cookies);
			if (!currentUser) {
				return redirect(303, '/login');
			}

			currentUser.firstName = firstName.toString();
			currentUser.lastName = lastName.toString();
			currentUser.faculty = faculty.toString();
			currentUser.hiddenFromLeaderboard = hiddenFromLeaderboard === 'on';

			// Save the updated user to the database
			const success = await updateUser(currentUser);
			if (!success) {
				return fail(500, { error: 'failed-update' });
			}
			return {success: true};
		},
		passwd: async ({ request, cookies }) =>{
			const formData = await request.formData();
			const password = formData.get('password');
			const confirm_new_password = formData.get('confirm-new-password');
			const new_password = formData.get('new-password');

			let currentUser = await getLoggedInUser(cookies);

			if (!currentUser) {
				return redirect(303, '/login');
			}

			if (password !== currentUser.password) {
				return fail(403, { error: 'wrong-password' });
			}

			if (new_password !== confirm_new_password) {
				return fail(400, { error: 'passwd-nomatch' });
			}

			currentUser.password = new_password.toString();
			// Save the updated user to the database
			await updateUser(currentUser);

			return {passwd: true};
		}
} satisfies Actions