import { f as fail } from './index2-DHSpIlkf.js';
import { g as getLoggedInUser } from './auth-CefYItrd.js';
import fs from 'fs/promises';
import { g as getBoulder, c as createBoulder, a as getBoulders, b as boulderCollection } from './boulder-KykGSrip.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

const load = async ({ request, cookies }) => {
  const currentUser = await getLoggedInUser(cookies);
  const boulders = await getBoulders();
  let exportboulders = boulders.map((boulder) => {
    return {
      id: boulder._id.toString(),
      name: boulder.name,
      description: boulder.description,
      rating: boulder.rating,
      image: boulder.image
    };
  });
  exportboulders.sort((a, b) => {
    return a.rating > b.rating ? 1 : -1;
  });
  if (currentUser) {
    const bouldersWithAttempts = await boulderCollection.aggregate(
      [
        {
          $lookup: {
            from: "attempts",
            localField: "_id",
            foreignField: "boulderId",
            pipeline: [
              {
                $match: {
                  userId: currentUser._id
                }
              }
            ],
            as: "attempts"
          }
        },
        {
          $set: {
            attempt: {
              $first: "$attempts"
            }
          }
        },
        {
          $set: {
            topped: "$attempt.topped",
            count: "$attempt.count"
          }
        },
        {
          $unset: ["attempt", "attempts"]
        }
      ]
    ).toArray();
    exportboulders = bouldersWithAttempts.map((boulder) => {
      return {
        id: boulder._id.toString(),
        name: boulder.name,
        description: boulder.description,
        rating: boulder.rating,
        image: boulder.image,
        topped: boulder.topped ?? false,
        count: boulder.count ?? 0
      };
    });
  }
  return {
    boulders: exportboulders
  };
};
const actions = {
  default: async ({ cookies, request }) => {
    const currentUser = await getLoggedInUser(cookies);
    if (!currentUser?.isAdmin) ;
    const data = await request.formData();
    const name = data.get("name");
    const description = data.get("description");
    const rating = data.get("rating");
    const image = data.get("image");
    if (!name || !description || !rating || !image) {
      return fail(400, { error: "missing-fields" });
    }
    const existingBoulder = await getBoulder(name.toString());
    if (existingBoulder) {
      return fail(400, { error: "exists" });
    }
    console.log("Image recieved!");
    const file = image;
    const filename = `/uploads/${file.name}`;
    await fs.mkdir(`./uploads/`, { recursive: true });
    await fs.writeFile("." + filename, Buffer.from(await file.arrayBuffer()));
    const boulder = {
      name: name.toString(),
      description: description.toString(),
      rating: rating.toString(),
      image: filename
    };
    await createBoulder(boulder);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1sejzi5n.js')).default;
const server_id = "src/routes/boulders/+page.server.ts";
const imports = ["_app/immutable/nodes/7.C6uN8YZk.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/DQa5x7Q4.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/B0Ghn160.js","_app/immutable/chunks/BcgnSmE8.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/B1MeWYu8.js","_app/immutable/chunks/DA2B45FJ.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/Dqyya-_0.js","_app/immutable/chunks/WxRvG9W7.js","_app/immutable/chunks/CjNWXRZ5.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/Zjt7pbTb.js","_app/immutable/chunks/B1TSEx5U.js","_app/immutable/chunks/Bjd63-pR.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-BFd_avQQ.js.map
