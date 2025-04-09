import type { PageServerLoad } from './$types';
import { attemptCollection, deleteBoulder, getAttemptOfUser, getBoulderById, updateBoulder } from '$lib/boulder';
import { type Actions, fail, redirect } from '@sveltejs/kit';
import { getLoggedInUser } from '$lib/auth';
import fs from 'fs/promises';
import { getAppConfig } from '$lib/appconfig';

export const load: PageServerLoad = async ({ cookies, params }) => {
	const boulderId = params.boulderId;

	const boulder = await getBoulderById(boulderId);

	if (!boulder) {
		throw new Error('Boulder not found!');
	}

	const currentUser = await getLoggedInUser(cookies);

	let myAttempt = null
	if (currentUser) {
		myAttempt = await getAttemptOfUser(currentUser, boulder);
	}


	return {
		boulder: {
			id: boulder._id.toString(),
			name: boulder.name,
			description: boulder.description,
			rating: boulder.rating,
			image: boulder.image,
		},
		myAttempt: myAttempt? {
			id: myAttempt._id.toString(),
			count: myAttempt.count,
			topped: myAttempt.topped,
			boulderId: myAttempt.boulderId.toString(),
			userId: myAttempt.userId.toString(),
		} : null,
	};
};


export const actions = {
	attempt: async ({ cookies, request, params }) => {
		const data = await request.formData();

		const appConfig = await getAppConfig();

		if(!appConfig.competition_enabled){
			return fail(403, { error: 'competition-not-enabled' });
		}


		const count = data.get('count');
		const topped = data.get('topped') === 'on';

		const currentUser = await getLoggedInUser(cookies);

		if (!currentUser) {return fail(403, { error: 'not-logged-in' });}

		const boulder = await getBoulderById(params.boulderId);

		const attempt = await getAttemptOfUser(currentUser, boulder);

		attempt.count = Number(count);
		attempt.topped = topped;


		await attemptCollection.updateOne({ _id: attempt._id }, { $set: attempt });
		return {success: "attempt"};
	},

	delete: async ({ cookies, request, params }) => {
		const currentUser = await getLoggedInUser(cookies);
		if (!currentUser?.isAdmin){
			return fail(403, { error: 'not-logged-in' });
		}

		const currentBoulder = await getBoulderById(params.boulderId);

		await deleteBoulder(currentBoulder);

		return redirect(303, '/boulders');
	},

	edit: async ({ cookies, request, params }) => {
		const currentUser = await getLoggedInUser(cookies);
		if (!currentUser?.isAdmin){
			return fail(403, { error: 'not-logged-in' });
		}
		const data = await request.formData();

		const name = data.get('name');
		const description = data.get('description');
		const rating = data.get('rating');

		const currentBoulder = await getBoulderById(params.boulderId);
		if (!currentBoulder) {
			return fail(404, { error: 'not-found' });
		}

		currentBoulder.name = name.toString();
		currentBoulder.description = description.toString();
		currentBoulder.rating = rating.toString();



		await updateBoulder(currentBoulder);

		return {success: "edit"};
	},

	image: async ({ cookies, request, params }) => {
		const currentUser = await getLoggedInUser(cookies);
		if (!currentUser?.isAdmin){
			return fail(403, { error: 'not-logged-in' });
		}

		const data = await request.formData();
		const image = data.get('image');

		if (!image) {
			return fail(400, { error: 'missing-fields' });
		}

		const file = image as File;
		const filename = `/uploads/boulders/${file.name}`;
		await fs.mkdir(`static/uploads/boulders`, { recursive: true });
		await fs.writeFile("static"+filename, Buffer.from(await file.arrayBuffer()));

		const currentBoulder = await getBoulderById(params.boulderId);
		if (!currentBoulder) {
			return fail(404, { error: 'not-found' });
		}

		currentBoulder.image = filename;

		await updateBoulder(currentBoulder);

		return {success: "edit"};
	}
} satisfies Actions