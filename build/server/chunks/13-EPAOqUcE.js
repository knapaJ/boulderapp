import { r as redirect, f as fail } from './index2-DHSpIlkf.js';
import { g as getLoggedInUser, a as updateUser } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async (event) => {
  return {};
};
const actions = {
  logout: async ({ cookies }) => {
    cookies.delete("session", { path: "/" });
    redirect(303, "/");
  },
  edit: async ({ request, cookies }) => {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const faculty = formData.get("faculty");
    const hiddenFromLeaderboard = formData.get("hiddenFromLeaderboard") ?? false;
    const sex = formData.get("sex");
    const level = formData.get("level");
    let currentUser = await getLoggedInUser(cookies);
    if (!currentUser) {
      return redirect(303, "/login");
    }
    currentUser.firstName = firstName.toString();
    currentUser.lastName = lastName.toString();
    currentUser.faculty = faculty.toString();
    currentUser.hiddenFromLeaderboard = hiddenFromLeaderboard === "on";
    currentUser.sex = sex.toString();
    currentUser.level = level.toString();
    const success = await updateUser(currentUser);
    if (!success) {
      return fail(500, { error: "failed-update" });
    }
    return { success: true };
  },
  passwd: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get("password");
    const confirm_new_password = formData.get("confirm-new-password");
    const new_password = formData.get("new-password");
    let currentUser = await getLoggedInUser(cookies);
    if (!currentUser) {
      return redirect(303, "/login");
    }
    if (password !== currentUser.password) {
      return fail(403, { error: "wrong-password" });
    }
    if (new_password !== confirm_new_password) {
      return fail(400, { error: "passwd-nomatch" });
    }
    currentUser.password = new_password.toString();
    await updateUser(currentUser);
    return { passwd: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-De9N9URd.js')).default;
const server_id = "src/routes/user/+page.server.ts";
const imports = ["_app/immutable/nodes/13.DjoQ2Lxl.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/kod56iPk.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/CgsOS3jt.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/B4mSe7me.js","_app/immutable/chunks/C-r2qoMl.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/y3fQ2zal.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-EPAOqUcE.js.map
