import { f as fail, r as redirect } from './index2-DHSpIlkf.js';
import { u as userCollection, t as tokenForUser } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const actions = {
  default: async ({ cookies, request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const user = await userCollection.findOne({ username, password });
    if (!user) {
      return fail(403, {
        error: "Invalid username or password"
      });
    }
    const token = await tokenForUser(user);
    cookies.set("session", token, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 1e3),
      // 1 day
      httpOnly: true,
      path: "/"
    });
    redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-RoGwDKX_.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/10.DI1K5_yC.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/B1TSEx5U.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/BY63YvFM.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/CjNWXRZ5.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/CeLcVuBD.js","_app/immutable/chunks/Co6FbBpI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-BSYa4MQC.js.map
