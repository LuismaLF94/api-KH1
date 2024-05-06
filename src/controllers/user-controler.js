import { insertUser } from "../services/mongodb/user.js";
import { findUser } from "../services/mongodb/user.js";

export async function getUser(req, res) {
    const name = req.query.name;
    const user = await findUser(name);
    res.send(user);
  }

export function createUser(req, res) {
    const user = req.body;
    const userDoc = insertUser(user);
    res.send(userDoc);
}