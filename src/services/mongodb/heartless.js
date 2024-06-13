import Heartless from '../../models/heartless.js';

export async function findHeartlessById(id) {
    return Heartless.findById(id);
};

export async function insertHeartless(heartlessData) {
    const newHeartless = new Heartless(heartlessData);
    return newHeartless.save();
};

export async function updateHeartless(id, updatedData) {
    return Heartless.findByIdAndUpdate(id, updatedData, { new: true });
};

export async function deleteHeartless(id) {
    return Heartless.findByIdAndDelete(id);
};

export async function findAllHeartless(query = {}) {
    return Heartless.find(query);
};