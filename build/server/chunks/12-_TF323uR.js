import fs from 'fs/promises';
import { g as getAppConfig, u as updateAppConfig } from './appconfig-DpBOouc3.js';
import { f as fail } from './index2-DHSpIlkf.js';
import { g as getLoggedInUser } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async ({ request }) => {
  const rules = await getAppConfig();
  return {
    rules: {
      rules: rules.rules,
      competition_enabled: rules.competition_enabled,
      image: rules.image
    }
  };
};
const actions = {
  default: async ({ request, cookies }) => {
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser) {
      return fail(401, { error: "not-logged-in" });
    }
    const data = await request.formData();
    const rules = data.get("rules");
    const competition_enabled = data.get("competition_enabled");
    const image = data.get("image");
    const currentRules = await getAppConfig();
    currentRules.rules = rules.toString();
    currentRules.competition_enabled = competition_enabled === "on";
    if (image) {
      console.log("Image recieved!");
      const file = image;
      if (file.name) {
        const filename = `/uploads/${file.name}`;
        await fs.mkdir(`./uploads/`, { recursive: true });
        await fs.writeFile("." + filename, Buffer.from(await file.arrayBuffer()));
        currentRules.image = filename;
      }
    } else {
      console.log("Image not recieved!");
    }
    await updateAppConfig(currentRules);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Do1LSl6O.js')).default;
const server_id = "src/routes/rules/+page.server.ts";
const imports = ["_app/immutable/nodes/12.D1c0k5_X.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/Dqyya-_0.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/BcgnSmE8.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/CjNWXRZ5.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/B1MeWYu8.js","_app/immutable/chunks/CCM25BtL.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/DTiPzDjC.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/B1TSEx5U.js","_app/immutable/chunks/LpOIsQIA.js","_app/immutable/chunks/BF0gavg6.js"];
const stylesheets = ["_app/immutable/assets/12.Mr06wvvd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-_TF323uR.js.map
