import { insertHeartless, findHeartlessById, updateHeartless, deleteHeartless, findAllHeartless } from '../services/mongodb/heartless.js';

export async function createHeartless(req, res) {
    const heartlessData = req.body;
    try {
        const savedHeartless = await insertHeartless(heartlessData);
        res.status(201).json(savedHeartless);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Heartless', error });
    }
};

export async function getHeartless(req, res) {
    const { id } = req.params;
    try {
        if (id) {
            const heartless = await findHeartlessById(id);
            if (heartless) {
                res.status(200).json(heartless);
            } else {
                res.status(404).json({ message: 'Heartless not found' });
            }
        } else {
            const heartlesses = await findAllHeartless();
            res.status(200).json(heartlesses);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Heartless', error });
    }
};

export async function updHeartless(req, res) {
    const { id } = req.params;
    const updatedHeartlessData = req.body;
    try {
        const updatedHeartless = await updateHeartless(id, updatedHeartlessData);
        if (updatedHeartless) {
            res.status(200).json(updatedHeartless);
        } else {
            res.status(404).json({ message: 'Heartless not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating Heartless', error });
    }
};

export async function delHeartless(req, res) {
    const { id } = req.params;
    try {
        const result = await deleteHeartless(id);
        if (result) {
            res.status(200).json({ message: 'Heartless deleted successfully' });
        } else {
            res.status(404).json({ message: 'Heartless not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Heartless', error });
    }
};
