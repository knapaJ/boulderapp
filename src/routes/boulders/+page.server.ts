import { type Actions, fail } from '@sveltejs/kit';
import { getLoggedInUser } from '$lib/auth';
import fs from 'fs/promises';
import { type Boulder, boulderCollection, createBoulder, getBoulder, getBoulders } from '$lib/boulder';
import type { PageServerLoad } from './$types';
import { ObjectId } from 'mongodb';


export const load: PageServerLoad = async ({ request, cookies }) => {

	const currentUser = await getLoggedInUser(cookies);

	const boulders = await getBoulders();

	let exportboulders = boulders.map((boulder) => {
		return {
			id: boulder._id.toString(),
			name: boulder.name,
			description: boulder.description,
			rating: boulder.rating,
			image: boulder.image,
		};
	});

	exportboulders.sort((a,b) => {
		return a.rating > b.rating ? 1: -1;
	});


	if(currentUser){
		const bouldersWithAttempts = await boulderCollection.aggregate(
			[
				{
					$lookup: {
						from: "attempts",
						localField: "_id",
						foreignField: "boulderId",
						pipeline: [
							{
								$match: {
									userId: currentUser._id
								}
							}
						],
						as: "attempts"
					}
				},
				{
					$set: {
						attempt: {
							$first: "$attempts"
						}
					}
				},
				{
					$set: {
						topped: "$attempt.topped",
						count: "$attempt.count"
					}
				},
				{
					$unset: ["attempt", "attempts"]
				}
			]
		).toArray();
		exportboulders = bouldersWithAttempts.map((boulder) => {
			return {
				id: boulder._id.toString(),
				name: boulder.name,
				description: boulder.description,
				rating: boulder.rating,
				image: boulder.image,
				topped: boulder.topped ?? false,
				count: boulder.count ?? 0,
			};
		})
	}


	return {
		boulders: exportboulders,
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		const currentUser = await getLoggedInUser(cookies);
		if (!currentUser?.isAdmin){
			fail(403, { error: 'not-admin' });
		}

		const data = await request.formData();
		const name = data.get('name');
		const description = data.get('description');
		const rating = data.get('rating');
		const image = data.get('image');

		if (!name || !description || !rating || !image) {
			return fail(400, { error: 'missing-fields' });
		}

		const existingBoulder = await getBoulder(name.toString());
		if (existingBoulder){
			return fail(400, { error: 'exists' });
		}

		console.log("Image recieved!");
		const file = image as File;
		const filename = `/uploads/${file.name}`;
		await fs.mkdir(`./uploads/`, { recursive: true });
		await fs.writeFile("."+filename, Buffer.from(await file.arrayBuffer()));

		const boulder = {
			name: name.toString(),
			description: description.toString(),
			rating: rating.toString(),
			image: filename,
		}

		await createBoulder(boulder);

		return {success: true};
	}
} satisfies Actions