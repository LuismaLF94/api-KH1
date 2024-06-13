import KeyBlade from '../../models/keyBlade.js';

export async function insertKeyBlade(keyBladeData) {
    const newKeyBlade = new KeyBlade(keyBladeData);
    return newKeyBlade.save();
};

export async function findKeyBladeById(id) {
    return KeyBlade.findById(id);
};

export async function updateKeyBlade(id, updatedData) {
    return KeyBlade.findByIdAndUpdate(id, updatedData, { new: true });
};

export async function deleteKeyBlade(id) {
    return KeyBlade.findByIdAndDelete(id);
};

export async function findAllKeyBlades(query = {}) {
    return KeyBlade.find(query);
};
