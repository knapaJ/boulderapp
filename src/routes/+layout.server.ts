import type { LayoutServerLoad } from './';
import { getLoggedInUser } from '$lib/auth';


export const load: LayoutServerLoad = async ({ request, cookies }) => {

	const currentUser = await getLoggedInUser(cookies);


	return {
		user: currentUser ? {
			username: currentUser.username,
			firstName: currentUser.firstName,
			lastName: currentUser.lastName,
			faculty: currentUser.faculty,
			avatar: `https://picsum.photos/seed/${currentUser.username}/300/300`,
			isAdmin: currentUser.isAdmin,
			hiddenFromLeaderboard: currentUser.hiddenFromLeaderboard,
		}: null,
	};
};