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
const component = async () => component_cache ??= (await import('./_page.svelte-D8rm_esB.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/6.CSMD3tgl.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/B0Ghn160.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/BcgnSmE8.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/DOT34lVl.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/Zjt7pbTb.js","_app/immutable/chunks/BQWhQth0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-CrfxeU5P.js.map
