import mongoose from 'mongoose';

const { Schema } = mongoose;
const characterSchema = new Schema({
    name: String,
    level: String,
    hp: String,
    origin: String,
    description: String
});
const Character = mongoose.model('Character', characterSchema);
export default Character;