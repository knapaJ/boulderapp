import fs from 'fs/promises'
import type { PageServerLoad } from './$types';
import { getAppConfig, updateAppConfig } from '$lib/appconfig';
import { type Actions, fail } from '@sveltejs/kit';
import { getLoggedInUser } from '$lib/auth';

export const load: PageServerLoad = async ({ request }) => {
	const rules = await getAppConfig();

	return {
		rules: {
			rules: rules.rules,
			competition_enabled: rules.competition_enabled,
			image: rules.image,
		}
	};
};

export const actions = {
	default: async ({ request, cookies }) => {
		const currentUser = await getLoggedInUser(cookies);
		if (!currentUser) {
			return fail(401, { error: 'not-logged-in' });
		}
		const data = await request.formData();
		const rules = data.get('rules');
		const competition_enabled = data.get('competition_enabled');
		const image = data.get('image');

		const currentRules = await getAppConfig();

		currentRules.rules = rules.toString();
		currentRules.competition_enabled = competition_enabled === "on";

		if (image){
			console.log("Image recieved!");
			const file = image as File
			if(file.name) {
				const filename = `/uploads/${file.name}`;
				await fs.mkdir(`./uploads/`, { recursive: true });
				await fs.writeFile("." + filename, Buffer.from(await file.arrayBuffer()));
				currentRules.image = filename;
			}
		} else {
			console.log("Image not recieved!");
		}

		await updateAppConfig(currentRules);

		return {success: true};
	}
} satisfies Actions