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
const component = async () => component_cache ??= (await import('./_page.svelte-YM96kUaK.js')).default;
const server_id = "src/routes/boulders/[boulderId]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.Cjgi3qHk.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DByUNY1F.js","_app/immutable/chunks/COEWmh9o.js","_app/immutable/chunks/Ck4oHBPF.js","_app/immutable/chunks/_Zplzhdy.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/chunks/DSKLuoxe.js","_app/immutable/chunks/C-nfw-4r.js","_app/immutable/chunks/B3A3sArZ.js","_app/immutable/chunks/BuPJRR4A.js","_app/immutable/chunks/DE_hd0gQ.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/CUYIzaHr.js","_app/immutable/chunks/HxhXq1Lt.js","_app/immutable/chunks/DONLyqfI.js","_app/immutable/chunks/rgf6lF5A.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/WaQYlQPx.js","_app/immutable/chunks/tyUjBdYN.js","_app/immutable/chunks/DmPCDNx3.js","_app/immutable/chunks/B_GE2rLa.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/CzAmippD.js","_app/immutable/chunks/B5jDhvST.js","_app/immutable/chunks/CFd8L-yr.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-D94J8DMf.js.map
