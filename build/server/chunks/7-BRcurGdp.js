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
  exportboulders.sort((a, b) => {
    return a.rating > b.rating ? 1 : -1;
  });
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
const component = async () => component_cache ??= (await import('./_page.svelte-2ZVTSxBz.js')).default;
const server_id = "src/routes/boulders/+page.server.ts";
const imports = ["_app/immutable/nodes/7.BQgruKKK.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/3CYtqPsI.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/DGN4UEna.js","_app/immutable/chunks/CFHJzbpE.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/chunks/DzUJORiG.js","_app/immutable/chunks/BEV99Pe6.js","_app/immutable/chunks/BrTIFRsO.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/gjQUlgBw.js","_app/immutable/chunks/CCCyPENC.js","_app/immutable/chunks/CBBpUeS1.js","_app/immutable/chunks/qRW3QOex.js","_app/immutable/chunks/K28pohxX.js","_app/immutable/chunks/BBh6C1Ul.js","_app/immutable/chunks/BDb4uv6j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-BRcurGdp.js.map
