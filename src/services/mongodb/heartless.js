import Heartless from '../../models/heartless.js';

export async function findHeartlessByName(name) {
    return Heartless.findOne({ name });
};

export async function insertHeartless(heartlessData) {
    const newHeartless = new Heartless(heartlessData);
    return newHeartless.save();
};

export async function updateHeartless(name, updatedData) {
    return Heartless.findOneAndUpdate({ name }, updatedData, { new: true });
};

export async function deleteHeartless(name) {
    return Heartless.findOneAndDelete({ name });
};

export async function findAllHeartless() {
    return Heartless.find();
};