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
      secure: false,
      // To be able to use on local hosting non-https
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
const component = async () => component_cache ??= (await import('./_page.svelte-CgJQ3FRF.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/10.Bmsx95CK.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/BJp59F01.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/B4mSe7me.js","_app/immutable/chunks/HGIwls_L.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-Cf0LSvmq.js.map
