import World from '../../models/world.js';

export async function insertWorld(worldData) {
    const newWorld = new World(worldData);
    return newWorld.save();
};

export async function findWorldByName(name) {
    return World.findOne({ name });
};

export async function updateWorld(name, updatedData) {
    return World.findOneAndUpdate({ name }, updatedData, { new: true });
};

export async function deleteWorld(name) {
    return World.findOneAndDelete({ name });
};

export async function findAllWorlds() {
    return World.find();
};
