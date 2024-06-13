import World from '../../models/world.js';

export async function insertWorld(worldData) {
    const newWorld = new World(worldData);
    return newWorld.save();
};

export async function findWorldById(id) {
    return World.findById(id);
};

export async function updateWorld(id, updatedData) {
    return World.findByIdAndUpdate(id, updatedData, { new: true });
};

export async function deleteWorld(id) { // Cambiado a findByIdAndDelete
    return World.findByIdAndDelete(id); // Cambiado a findByIdAndDelete
};

export async function findAllWorlds() {
    return World.find();
};