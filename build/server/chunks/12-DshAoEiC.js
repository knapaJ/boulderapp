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
const component = async () => component_cache ??= (await import('./_page.svelte-D-Gamsco.js')).default;
const server_id = "src/routes/rules/+page.server.ts";
const imports = ["_app/immutable/nodes/12.D7LYwlBC.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/gjQUlgBw.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/CFHJzbpE.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/BEV99Pe6.js","_app/immutable/chunks/CgsOS3jt.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CFFKhyjJ.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/CEVFFVXY.js","_app/immutable/chunks/DR1wtrqt.js"];
const stylesheets = ["_app/immutable/assets/12.Mr06wvvd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-DshAoEiC.js.map
