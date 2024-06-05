import { insertUser } from "../services/mongodb/user.js";
import { findUser } from "../services/mongodb/user.js";
import { updateUser as updateUserService } from "../services/mongodb/user.js";
import { deleteUser as deleteUserService } from "../services/mongodb/user.js";

export async function getUser(req, res) {
    const name = req.query.name;
    const user = await findUser(name);
    res.send(user);
  };

export function createUser(req, res) {
    const user = req.body;
    const userDoc = insertUser(user);
    res.send(userDoc);
};

export async function updateUser(req, res) {
    try {
        const name = req.query.name;
        const updatedUser = req.body;
        const userDoc = await updateUserService(name, updatedUser);
        if (userDoc) {
            res.send(userDoc);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
};


export async function deleteUser(req, res) {
    try {
        const name = req.query.name;
        const result = await deleteUserService(name);
        if (result) {
            res.send({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting user', error });
    }
};