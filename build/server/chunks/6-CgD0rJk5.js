import { g as getLoggedInUser, u as userCollection } from './auth-CefYItrd.js';
import { f as fail } from './index2-DHSpIlkf.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async ({ cookies, request }) => {
  const currentUser = await getLoggedInUser(cookies);
  let allUsers = await userCollection.find({}).toArray();
  allUsers = allUsers.map((user) => {
    const { _id, ...rest } = user;
    return { id: _id.toString(), ...rest };
  });
  if (!currentUser?.isAdmin) {
    throw new Error("Unauthorized");
  }
  return {
    users: allUsers
  };
};
const actions = {
  promote: async ({ cookies, request }) => {
    const data = await request.formData();
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) {
      return fail(403, { message: "Unauthorized" });
    }
    await userCollection.updateOne({ username: data.get("username").toString() }, { $set: { isAdmin: true } });
    return { success: true };
  },
  demote: async ({ cookies, request }) => {
    const data = await request.formData();
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) {
      return fail(403, { message: "Unauthorized" });
    }
    await userCollection.updateOne({ username: data.get("username").toString() }, { $set: { isAdmin: false } });
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-COIMukxK.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/6.lk-_LOQf.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/DGN4UEna.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/CFHJzbpE.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/D2q45BGo.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/K28pohxX.js","_app/immutable/chunks/HGIwls_L.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-CgD0rJk5.js.map
