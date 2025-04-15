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
const component = async () => component_cache ??= (await import('./_page.svelte-CNZHA1Ud.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/11.BsUyDI7L.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DSKLuoxe.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/tyUjBdYN.js","_app/immutable/chunks/DmPCDNx3.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/rgf6lF5A.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/BlJmR8TG.js","_app/immutable/chunks/8rQJs0b3.js","_app/immutable/chunks/WaQYlQPx.js","_app/immutable/chunks/DE_hd0gQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-B4DwBUi8.js.map
