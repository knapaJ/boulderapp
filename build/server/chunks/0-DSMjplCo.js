import { g as getLoggedInUser } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async ({ request, cookies }) => {
  const currentUser = await getLoggedInUser(cookies);
  const { password, _id, ...rest } = currentUser || {};
  return {
    user: currentUser ? { ...rest } : null
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-B6-wyy2e.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.BNZ0lOyb.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/BS_gJSaj.js","_app/immutable/chunks/B5jDhvST.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/CH_zrnVc.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/BuPJRR4A.js","_app/immutable/chunks/DE_hd0gQ.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/WaQYlQPx.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/CIe2F5Vi.js","_app/immutable/chunks/qRW3QOex.js"];
const stylesheets = ["_app/immutable/assets/0.fiNTFURj.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-DSMjplCo.js.map
