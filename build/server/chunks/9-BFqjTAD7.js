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
    if (a.toppedBoulders > b.toppedBoulders) return 1;
    if (a.toppedBoulders < b.toppedBoulders) return -1;
    if (a.totalAttempts < b.toppedBoulders) return 1;
    if (a.totalAttempts > b.toppedBoulders) return -1;
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
const component = async () => component_cache ??= (await import('./_page.svelte-BEH6C-_d.js')).default;
const server_id = "src/routes/leaderboard/+page.server.ts";
const imports = ["_app/immutable/nodes/9.CqeqSwLw.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/BvHPN-qt.js","_app/immutable/chunks/C88kszIe.js","_app/immutable/chunks/cn-fBLYH.js","_app/immutable/chunks/BY-NkPsp.js","_app/immutable/chunks/BGMQuSJQ.js","_app/immutable/chunks/DOT34lVl.js","_app/immutable/chunks/WxRvG9W7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-BFqjTAD7.js.map
