import mongoose from 'mongoose';

const { Schema } = mongoose;
const heartlessSchema = new Schema({
    name: String,
    hp: String,
    description: String
});
const Heartless = mongoose.model('Heartless', heartlessSchema);
export default Heartless;
