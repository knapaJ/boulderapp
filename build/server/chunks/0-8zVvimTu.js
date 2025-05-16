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
const component = async () => component_cache ??= (await import('./_layout.svelte-X--vLKRP.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.BzdBDLru.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/Da6lfxMM.js","_app/immutable/chunks/HGIwls_L.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/kod56iPk.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/DGN4UEna.js","_app/immutable/chunks/CFHJzbpE.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/BEV99Pe6.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/DR1wtrqt.js","_app/immutable/chunks/qRW3QOex.js"];
const stylesheets = ["_app/immutable/assets/0.DPjmdtOS.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-8zVvimTu.js.map
