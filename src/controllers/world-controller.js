import { insertWorld, findWorldById, updateWorld, deleteWorld, findAllWorlds } from '../services/mongodb/world.js';

export async function createWorld(req, res) {
    const worldData = req.body;
    try {
        const savedWorld = await insertWorld(worldData);
        res.status(201).json(savedWorld);
    } catch (error) {
        res.status(500).json({ message: 'Error creating World', error });
    }
};

export async function getWorld(req, res) {
    const { id } = req.params;
    try {
        if (id) {
            const world = await findWorldById(id);
            if (world) {
                res.status(200).json(world);
            } else {
                res.status(404).json({ message: 'World not found' });
            }
        } else {
            const worlds = await findAllWorlds();
            res.status(200).json(worlds);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Worlds', error });
    }
};

export async function updWorld(req, res) {
    const { id } = req.params;
    const updatedWorldData = req.body;
    try {
        const updatedWorld = await updateWorld(id, updatedWorldData);
        if (updatedWorld) {
            res.status(200).json(updatedWorld);
        } else {
            res.status(404).json({ message: 'World not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating World', error });
    }
};

export async function delWorld(req, res) {
    const { id } = req.params;
    try {
        const result = await deleteWorld(id);
        if (result) {
            res.status(200).json({ message: 'World deleted successfully' });
        } else {
            res.status(404).json({ message: 'World not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting World', error });
    }
};
