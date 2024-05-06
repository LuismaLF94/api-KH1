import User from '../../models/user.js';

export async function findUser(name){
   const user = await User.find({ name: name });
   return user;
}

export async function insertUser(user){
    const userDoc = new User(user);
    return userDoc.save();
}