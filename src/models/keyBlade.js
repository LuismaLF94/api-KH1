import mongoose from 'mongoose';

const { Schema } = mongoose;
const keyBladeSchema = new Schema({
    name: String,
    damage: String,
    PM: String,
    criticalHit: String,
    bonusCritical: String,
    description: String
});
const KeyBlade = mongoose.model('Keyblade', keyBladeSchema);
export default KeyBlade;