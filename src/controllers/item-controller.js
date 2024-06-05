import { insertItem, findItemByName, updateItem, deleteItem, findAllItems } from '../services/mongodb/item.js';

export async function createItem(req, res) {
    const itemData = req.body;
    try {
        const savedItem = insertItem(itemData);
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Item', error });
    }
};


export async function getItem(req, res) {
    const { name } = req.query;
    try {
        if (name) {
            const item = await findItemByName(name);
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } else {
            const items = await findAllItems();
            res.status(200).json(items);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Items', error });
    }
};

export async function updItem(req, res) {
    const { name } = req.query;
    const updatedItemData = req.body;
    try {
        const updatedItem = await updateItem(name, updatedItemData);
        if (updatedItem) {
            res.status(200).json(updatedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating Item', error });
    }
};

export async function delItem(req, res) {
    const { name } = req.query;
    try {
        const result = await deleteItem(name);
        if (result) {
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Item', error });
    }
};
