import mongoose from 'mongoose';

const { Schema } = mongoose;
const worldSchema = new Schema({
    name: String,
    origin: String,
    description: String
});
const World = mongoose.model('World', worldSchema);
export default World;