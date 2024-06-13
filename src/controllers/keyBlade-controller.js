import { insertKeyBlade, findKeyBladeById, updateKeyBlade, deleteKeyBlade, findAllKeyBlades } from '../services/mongodb/keyBlade.js';

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
    const { id } = req.params;
    const { damage, pm, criticalHit, bonusCritical } = req.query;
    try {
        if (id) {
            const keyBlade = await findKeyBladeById(id);
            if (keyBlade) {
                res.status(200).json(keyBlade);
            } else {
                res.status(404).json({ message: 'KeyBlade not found' });
            }
        } else {
            const query = {};
            if (damage) query.damage = damage;
            if (pm) query.pm = pm;
            if (criticalHit) query.criticalHit = criticalHit;
            if (bonusCritical) query.bonusCritical = bonusCritical;

            const keyBlades = await findAllKeyBlades(query);
            res.status(200).json(keyBlades);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching KeyBlade(s)', error });
    }
};

export async function updKeyBlade(req, res) {
    const { id } = req.params;
    const updatedKeyBladeData = req.body;
    try {
        const updatedKeyBlade = await updateKeyBlade(id, updatedKeyBladeData);
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
    const { id } = req.params;
    try {
        const result = await deleteKeyBlade(id);
        if (result) {
            res.status(200).json({ message: 'KeyBlade deleted successfully' });
        } else {
            res.status(404).json({ message: 'KeyBlade not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting KeyBlade', error });
    }
};
