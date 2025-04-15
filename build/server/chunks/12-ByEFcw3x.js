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
const imports = ["_app/immutable/nodes/12.MaVV5Xc1.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/CUYIzaHr.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/DE_hd0gQ.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/rgf6lF5A.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/WaQYlQPx.js","_app/immutable/chunks/tyUjBdYN.js","_app/immutable/chunks/DmPCDNx3.js","_app/immutable/chunks/B_GE2rLa.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/DSKLuoxe.js","_app/immutable/chunks/0yXuc5Cw.js","_app/immutable/chunks/CIe2F5Vi.js"];
const stylesheets = ["_app/immutable/assets/12.Mr06wvvd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-ByEFcw3x.js.map
