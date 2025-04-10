import { f as fail, r as redirect } from './index2-DHSpIlkf.js';
import { c as createUser, t as tokenForUser } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async (event) => {
  return {};
};
const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const faculty = data.get("faculty");
    const password = data.get("password");
    const confirm_password = data.get("confirm-password");
    const tnc = data.get("tnc");
    const sex = data.get("sex");
    const level = data.get("level");
    if (password !== confirm_password) {
      return fail(400, {
        username,
        firstName,
        lastName,
        faculty,
        tnc,
        error: "passwd-nomatch"
      });
    }
    if (!tnc) {
      return fail(400, { username, firstName, lastName, faculty, error: "tnc-not-accepted" });
    }
    if (!username || !firstName || !lastName || !faculty || !password || !sex || !level) {
      return fail(400, { error: "missing-fields" });
    }
    const createdUser = await createUser({
      username: username.toString(),
      password: password.toString(),
      firstName: firstName.toString(),
      lastName: lastName.toString(),
      faculty: faculty.toString(),
      isAdmin: false,
      hiddenFromLeaderboard: false,
      sex: sex.toString(),
      level: level.toString()
    });
    if (!createdUser) {
      return fail(400, { firstName, lastName, faculty, error: "user-exists" });
    }
    const token = await tokenForUser(createdUser);
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
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQAvIJ5T.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/11.CwqJcgjk.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/B1TSEx5U.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/CCM25BtL.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/CjNWXRZ5.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/CeLcVuBD.js","_app/immutable/chunks/BxdvUpGC.js","_app/immutable/chunks/B1MeWYu8.js","_app/immutable/chunks/BcgnSmE8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-BNcbOWZ6.js.map
