import { d as getBoulderById, u as updateBoulder, e as deleteBoulder, f as getAttemptOfUser, h as attemptCollection } from './boulder-KykGSrip.js';
import { f as fail, r as redirect } from './index2-DHSpIlkf.js';
import { g as getLoggedInUser } from './auth-CefYItrd.js';
import fs from 'fs/promises';
import { g as getAppConfig } from './appconfig-DpBOouc3.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async ({ cookies, params }) => {
  const boulderId = params.boulderId;
  const boulder = await getBoulderById(boulderId);
  if (!boulder) {
    throw new Error("Boulder not found!");
  }
  const currentUser = await getLoggedInUser(cookies);
  let myAttempt = null;
  if (currentUser) {
    myAttempt = await getAttemptOfUser(currentUser, boulder);
  }
  return {
    boulder: {
      id: boulder._id.toString(),
      name: boulder.name,
      description: boulder.description,
      rating: boulder.rating,
      image: boulder.image
    },
    myAttempt: myAttempt ? {
      id: myAttempt._id.toString(),
      count: myAttempt.count,
      topped: myAttempt.topped,
      boulderId: myAttempt.boulderId.toString(),
      userId: myAttempt.userId.toString()
    } : null
  };
};
const actions = {
  attempt: async ({ cookies, request, params }) => {
    const data = await request.formData();
    const appConfig = await getAppConfig();
    if (!appConfig.competition_enabled) {
      return fail(403, { error: "competition-not-enabled" });
    }
    const count = data.get("count");
    const topped = data.get("topped") === "on";
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser) {
      return fail(403, { error: "not-logged-in" });
    }
    const boulder = await getBoulderById(params.boulderId);
    const attempt = await getAttemptOfUser(currentUser, boulder);
    attempt.count = Number(count);
    attempt.topped = topped;
    if (attempt.topped) {
      attempt.count = Math.max(1, attempt.count);
    }
    await attemptCollection.updateOne({ _id: attempt._id }, { $set: attempt });
    return { success: "attempt" };
  },
  delete: async ({ cookies, request, params }) => {
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) {
      return fail(403, { error: "not-logged-in" });
    }
    const currentBoulder = await getBoulderById(params.boulderId);
    await deleteBoulder(currentBoulder);
    return redirect(303, "/boulders");
  },
  edit: async ({ cookies, request, params }) => {
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) {
      return fail(403, { error: "not-logged-in" });
    }
    const data = await request.formData();
    const name = data.get("name");
    const description = data.get("description");
    const rating = data.get("rating");
    const currentBoulder = await getBoulderById(params.boulderId);
    if (!currentBoulder) {
      return fail(404, { error: "not-found" });
    }
    currentBoulder.name = name.toString();
    currentBoulder.description = description.toString();
    currentBoulder.rating = rating.toString();
    await updateBoulder(currentBoulder);
    return { success: "edit" };
  },
  image: async ({ cookies, request, params }) => {
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) {
      return fail(403, { error: "not-logged-in" });
    }
    const data = await request.formData();
    const image = data.get("image");
    if (!image) {
      return fail(400, { error: "missing-fields" });
    }
    const file = image;
    const filename = `/uploads/${file.name}`;
    await fs.mkdir(`./uploads/`, { recursive: true });
    await fs.writeFile("." + filename, Buffer.from(await file.arrayBuffer()));
    const currentBoulder = await getBoulderById(params.boulderId);
    if (!currentBoulder) {
      return fail(404, { error: "not-found" });
    }
    currentBoulder.image = filename;
    await updateBoulder(currentBoulder);
    return { success: "edit" };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CkgeXywh.js')).default;
const server_id = "src/routes/boulders/[boulderId]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.BfLkxH3C.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/BJp59F01.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/DGN4UEna.js","_app/immutable/chunks/CFHJzbpE.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/gjQUlgBw.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/BEV99Pe6.js","_app/immutable/chunks/CgsOS3jt.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CFFKhyjJ.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/K28pohxX.js","_app/immutable/chunks/HGIwls_L.js","_app/immutable/chunks/BDb4uv6j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-BmifiEEX.js.map
