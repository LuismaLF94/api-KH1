import { insertKeyBlade, findKeyBladeByName, updateKeyBlade, deleteKeyBlade, findAllKeyBlades } from '../services/mongodb/keyBlade.js';

export async function createKeyBlade(req, res) {
    const keyBladeData = req.body;
    try {
        const newKeyBlade = await insertKeyBlade(keyBladeData);
        res.status(201).json(newKeyBlade);
    } catch (error) {
        res.status(500).json({ message: 'Error creating KeyBlade', error });
    }
};

export async function getKeyBlade(req, res) {
    const { name } = req.query;
    try {
        if (name) {
            const keyBlade = await findKeyBladeByName(name);
            if (keyBlade) {
                res.status(200).json(keyBlade);
            } else {
                res.status(404).json({ message: 'KeyBlade not found' });
            }
        } else {
            const keyBlades = await findAllKeyBlades();
            res.status(200).json(keyBlades);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching KeyBlade(s)', error });
    }
};

export async function updKeyBlade(req, res) {
    const { name } = req.query;
    const updatedKeyBladeData = req.body;
    try {
        const updatedKeyBlade = await updateKeyBlade(name, updatedKeyBladeData);
        if (updatedKeyBlade) {
            res.status(200).json(updatedKeyBlade);
        } else {
            res.status(404).json({ message: 'KeyBlade not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating KeyBlade', error });
    }
};

export async function delKeyBlade(req, res) {
    const { name } = req.query;
    try {
        const result = await deleteKeyBlade(name);
        if (result) {
            res.status(200).json({ message: 'KeyBlade deleted successfully' });
        } else {
            res.status(404).json({ message: 'KeyBlade not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting KeyBlade', error });
    }
};
