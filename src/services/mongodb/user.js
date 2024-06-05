import User from '../../models/user.js';

export async function findUser(name){
   const user = await User.find({ name: name });
   return user;
};

export async function insertUser(user){
    const userDoc = new User(user);
    return userDoc.save();
};

export async function updateUser(name, updatedUser) {
    const result = await User.findOneAndUpdate(
      { name },
      { $set: updatedUser },
      { returnOriginal: false }
    );
    return result;
  };
  
  export async function deleteUser(name) {
    const result = await User.deleteOne({ name });
    return result;
  };