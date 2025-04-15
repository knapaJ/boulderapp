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
const component = async () => component_cache ??= (await import('./_page.svelte-BIzNX-Tl.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/6.CTcK36tq.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DmPCDNx3.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/BuPJRR4A.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/DE_hd0gQ.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/CaRWzoOj.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/CzAmippD.js","_app/immutable/chunks/B5jDhvST.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-D8VzKKp2.js.map
