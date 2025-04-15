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
const component = async () => component_cache ??= (await import('./_page.svelte-DO9--fJV.js')).default;
const server_id = "src/routes/user/+page.server.ts";
const imports = ["_app/immutable/nodes/13.ViEb1Fnm.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/CH_zrnVc.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/tyUjBdYN.js","_app/immutable/chunks/DmPCDNx3.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/rgf6lF5A.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/BlJmR8TG.js","_app/immutable/chunks/8rQJs0b3.js","_app/immutable/chunks/DSKLuoxe.js","_app/immutable/chunks/DvARfM1e.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-Moju_84j.js.map
