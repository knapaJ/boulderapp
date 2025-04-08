import db from '$lib/db';


export type AppConfig = {
	rules: string,
	competition_enabled: boolean,
	image: string
}

export async function getAppConfig(): Promise<AppConfig> {
	const appConfigCollection = db.collection<AppConfig>('appconfig');
	const appConfig = await appConfigCollection.findOne({});

	if (!appConfig) {
		const defaultConfig: AppConfig = {
			rules: 'Pravidla ještě nevložena',
			competition_enabled: false,
			image: ''
		};
		await appConfigCollection.insertOne(defaultConfig);
		return defaultConfig;
	}

	return appConfig;
}

export const updateAppConfig =  async (appConfig: AppConfig): Promise<void> => {
	const appConfigCollection = db.collection<AppConfig>('appconfig');
	await appConfigCollection.updateOne({}, { $set: appConfig });
}