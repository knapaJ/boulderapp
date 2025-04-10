import { MongoClient } from 'mongodb';
import { d as private_env } from './shared-server-DIsQ43MR.js';
import jwt from 'jsonwebtoken';

const client = new MongoClient(private_env.DB_URI);
await client.connect();
const db = client.db("boulder");
const userCollection = db.collection("users");
async function createUser(user) {
  const userCollection2 = db.collection("users");
  const existingUser = await userCollection2.findOne({ username: user.username });
  if (existingUser) return null;
  const numUsers = await userCollection2.countDocuments();
  user.isAdmin = numUsers === 0;
  await userCollection2.insertOne(user);
  return user;
}
async function updateUser(user) {
  const userCollection2 = db.collection("users");
  const existingUser = await userCollection2.findOne({ username: user.username });
  if (!existingUser) return null;
  if (user.username !== existingUser.username && !user.isAdmin) {
    return null;
  }
  await userCollection2.updateOne({ username: user.username }, { $set: user });
  return user;
}
async function tokenForUser(user) {
  const token = jwt.sign({
    user: user.username
  }, "hello-world-secret-token", { expiresIn: "1d" });
  return token;
}
async function userFromToken(token) {
  try {
    const decoded = jwt.verify(token, "hello-world-secret-token");
    const decoded_user = decoded.user;
    const user = await userCollection.findOne({ username: decoded_user });
    if (!user) return null;
    return user;
  } catch (e) {
    return null;
  }
}
async function getLoggedInUser(cookies) {
  const cookieUser = cookies.get("session");
  if (!cookieUser) return null;
  const user = await userFromToken(cookieUser);
  if (!user) return null;
  return user;
}

export { updateUser as a, createUser as c, db as d, getLoggedInUser as g, tokenForUser as t, userCollection as u };
//# sourceMappingURL=auth-CefYItrd.js.map
