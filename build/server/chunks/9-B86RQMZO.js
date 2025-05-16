import { g as getLoggedInUser, u as userCollection } from './auth-CefYItrd.js';
import 'mongodb';
import './shared-server-DIsQ43MR.js';
import 'jsonwebtoken';

async function boardBy(filter) {
  const pipeline = [];
  pipeline.push({
    $match: {
      hiddenFromLeaderboard: false
    }
  });
  pipeline.push(filter);
  pipeline.push(
    {
      $lookup: {
        from: "attempts",
        localField: "_id",
        foreignField: "userId",
        pipeline: [
          {
            $match: {
              topped: true
            }
          },
          {
            $lookup: {
              from: "boulders",
              localField: "boulderId",
              foreignField: "_id",
              as: "temp"
            }
          },
          {
            $set: {
              temp: { $first: "$temp" }
            }
          },
          {
            $set: {
              boulderName: "$temp.name"
            }
          },
          {
            $unset: ["temp"]
          }
        ],
        as: "attempts"
      }
    }
  );
  const results = await userCollection.aggregate(pipeline).toArray();
  let board = results.map((user) => {
    return {
      id: user._id.toString(),
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      faculty: user.faculty,
      attempts: user.attempts.map((attempt) => {
        return {
          id: attempt._id.toString(),
          boulderId: attempt.boulderId.toString(),
          boulderName: attempt.boulderName,
          count: attempt.count
        };
      }),
      toppedBoulders: user.attempts.length,
      totalAttempts: user.attempts.reduce((acc, attempt) => {
        return acc + attempt.count;
      }, 0)
    };
  });
  board = board.filter((user) => {
    return user.toppedBoulders > 0;
  });
  board.sort((a, b) => {
    if (a.toppedBoulders > b.toppedBoulders) return -1;
    if (a.toppedBoulders < b.toppedBoulders) return 1;
    if (a.totalAttempts < b.totalAttempts) return -1;
    if (a.totalAttempts > b.totalAttempts) return 1;
    return 0;
  });
  board.forEach((row, index) => {
    row.rank = index + 1;
  });
  return board;
}
const load = async ({ cookies }) => {
  await getLoggedInUser(cookies);
  const levels = ["beginner", "advanced"];
  const sexes = ["F", "M"];
  const boards = [];
  for (const sexesKey of sexes) {
    for (const levelsKey of levels) {
      boards.push({
        sex: sexesKey,
        level: levelsKey,
        board: await boardBy({
          $match: {
            sex: sexesKey,
            level: levelsKey
          }
        })
      });
    }
  }
  return {
    boards
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DjXMl62h.js')).default;
const server_id = "src/routes/leaderboard/+page.server.ts";
const imports = ["_app/immutable/nodes/9.DWOajcXM.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/BOv8Mt8B.js","_app/immutable/chunks/CEmltEdG.js","_app/immutable/chunks/D3TbCEMT.js","_app/immutable/chunks/D5hllmO6.js","_app/immutable/chunks/BJCVVT2t.js","_app/immutable/chunks/D2q45BGo.js","_app/immutable/chunks/CCCyPENC.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-B86RQMZO.js.map
