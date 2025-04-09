import type { LayoutServerLoad } from './';
import { getLoggedInUser } from '$lib/auth';


export const load: LayoutServerLoad = async ({ request, cookies }) => {

	const currentUser = await getLoggedInUser(cookies);

	const { password, _id, ...rest } = currentUser || {};

	return {
		user: currentUser ? {...rest} : null,
	};
};