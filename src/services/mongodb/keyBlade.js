import KeyBlade from '../../models/keyBlade.js';

export async function insertKeyBlade(keyBladeData) {
    const newKeyBlade = new KeyBlade(keyBladeData);
    return newKeyBlade.save();
};

export async function findKeyBladeByName(name) {
    return KeyBlade.findOne({ name });
};

export async function updateKeyBlade(name, updatedData) {
    return KeyBlade.findOneAndUpdate({ name }, updatedData, { new: true });
};

export async function deleteKeyBlade(name) {
    return KeyBlade.findOneAndDelete({ name });
};

export async function findAllKeyBlades() {
    return KeyBlade.find();
};