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
const component = async () => component_cache ??= (await import('./_page.svelte-Cg02cc_o.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/11.C1PzhGBv.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/CgsOS3jt.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/B4mSe7me.js","_app/immutable/chunks/C-r2qoMl.js","_app/immutable/chunks/BEV99Pe6.js","_app/immutable/chunks/CFHJzbpE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-7_y4M2r0.js.map
