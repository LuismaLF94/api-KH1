import mongoose from 'mongoose';

const { Schema } = mongoose;
const itemSchema = new Schema({
    name: String,
    origin: String,
    description: String
});
const Item = mongoose.model('Item', itemSchema);
export default Item;