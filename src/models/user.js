import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
});
const User = mongoose.model('User', userSchema);
export default User;