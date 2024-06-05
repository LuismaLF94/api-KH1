import { insertWorld, findWorldByName, updateWorld, deleteWorld, findAllWorlds } from '../services/mongodb/world.js';

export async function createWorld(req, res) {
    const worldData = req.body;
    try {
        const savedWorld = insertWorld(worldData);
        res.status(201).json(savedWorld);
    } catch (error) {
        res.status(500).json({ message: 'Error creating World', error });
    }
};

export async function getWorld(req, res) {
    const { name } = req.query;
    try {
        if (name) {
            const world = await findWorldByName(name);
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
    const { name } = req.query;
    const updatedWorldData = req.body;
    try {
        const updatedWorld = await updateWorld(name, updatedWorldData);
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
    const { name } = req.query;
    try {
        const result = await deleteWorld(name);
        if (result) {
            res.status(200).json({ message: 'World deleted successfully' });
        } else {
            res.status(404).json({ message: 'World not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting World', error });
    }
};
