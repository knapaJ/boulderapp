import { type User, userCollection } from '$lib/user';
import jwt from 'jsonwebtoken';
import type { WithId } from 'mongodb';
import type { Cookies } from '@sveltejs/kit';


export async function tokenForUser(user: User): Promise<string> {
	const token: string = jwt.sign({
		user: user.username,
	}, "hello-world-secret-token", {expiresIn: '1d'});

	return token;
}

export async function userFromToken(token: string): Promise<WithId<User> | null> {
	try {
		const decoded = jwt.verify(token, "hello-world-secret-token");
		const decoded_user = decoded.user;
		const user = await userCollection.findOne({ username: decoded_user });
		if (!user) return null;
		return user;
	}
	catch (e) {
		return null;
	}
}

export async function getLoggedInUser(cookies: Cookies): Promise<WithId<User> | null> {
	const cookieUser = cookies.get('session');
	if (!cookieUser) return null;
	const user = await userFromToken(cookieUser);
	if (!user) return null;
	return user;
}