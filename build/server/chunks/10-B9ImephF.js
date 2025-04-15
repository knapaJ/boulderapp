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
const imports = ["_app/immutable/nodes/10.bLmCWmP_.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DSKLuoxe.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/C-nfw-4r.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/rgf6lF5A.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/BlJmR8TG.js","_app/immutable/chunks/B5jDhvST.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-B9ImephF.js.map
