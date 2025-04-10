import { d as db } from './auth-CefYItrd.js';

async function getAppConfig() {
  const appConfigCollection = db.collection("appconfig");
  const appConfig = await appConfigCollection.findOne({});
  if (!appConfig) {
    const defaultConfig = {
      rules: "Pravidla ještě nevložena",
      competition_enabled: false,
      image: ""
    };
    await appConfigCollection.insertOne(defaultConfig);
    return defaultConfig;
  }
  return appConfig;
}
const updateAppConfig = async (appConfig) => {
  const appConfigCollection = db.collection("appconfig");
  await appConfigCollection.updateOne({}, { $set: appConfig });
};

export { getAppConfig as g, updateAppConfig as u };
//# sourceMappingURL=appconfig-DpBOouc3.js.map
