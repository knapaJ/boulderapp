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
const imports = ["_app/immutable/nodes/0.BjJHK3Nu.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/B5Z4V9zk.js","_app/immutable/chunks/DUffP19g.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/9WrrrnI1.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/B0Ghn160.js","_app/immutable/chunks/BcgnSmE8.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/B1MeWYu8.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/BF0gavg6.js","_app/immutable/chunks/qRW3QOex.js"];
const stylesheets = ["_app/immutable/assets/0.fiNTFURj.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-B0e26M0w.js.map
