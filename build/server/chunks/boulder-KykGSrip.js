import { d as db } from './auth-CefYItrd.js';
import { ObjectId } from 'mongodb';

const boulderCollection = db.collection("boulders");
const attemptCollection = db.collection("attempts");
async function createBoulder(boulder) {
  const existing = await boulderCollection.findOne({ name: boulder.name });
  if (existing) {
    return null;
  }
  return await boulderCollection.insertOne(boulder);
}
async function deleteBoulder(boulder) {
  return await boulderCollection.deleteOne(boulder);
}
async function updateBoulder(boulder) {
  return await boulderCollection.updateOne({ _id: boulder._id }, { $set: boulder });
}
async function getBoulders() {
  const boulders = await boulderCollection.find().toArray();
  return boulders;
}
async function getBoulder(name) {
  const existing = await boulderCollection.findOne({ name });
  return existing;
}
async function getBoulderById(id) {
  const existing = await boulderCollection.findOne({ _id: new ObjectId(id) });
  return existing;
}
async function getAttemptOfUser(user, boulder) {
  const current = await attemptCollection.findOne({ userId: user._id, boulderId: boulder._id });
  if (!current) {
    const defaultAttempt = {
      count: 0,
      topped: false,
      boulderId: boulder._id,
      userId: user._id
    };
    const ret = await attemptCollection.insertOne(defaultAttempt);
    return {
      ...defaultAttempt,
      _id: ret.insertedId
    };
  }
  return current;
}

export { getBoulders as a, boulderCollection as b, createBoulder as c, getBoulderById as d, deleteBoulder as e, getAttemptOfUser as f, getBoulder as g, attemptCollection as h, updateBoulder as u };
//# sourceMappingURL=boulder-KykGSrip.js.map
