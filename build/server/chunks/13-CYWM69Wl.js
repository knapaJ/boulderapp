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
const imports = ["_app/immutable/nodes/13.D4bNb5IY.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/9WrrrnI1.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/CCM25BtL.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/CjNWXRZ5.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/CeLcVuBD.js","_app/immutable/chunks/BxdvUpGC.js","_app/immutable/chunks/B1TSEx5U.js","_app/immutable/chunks/CYN42q-7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-CYWM69Wl.js.map
