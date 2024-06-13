import { insertItem, findItemById, updateItem, deleteItem, findAllItems } from '../services/mongodb/item.js';

export async function createItem(req, res) {
    const itemData = req.body;
    try {
        const savedItem = await insertItem(itemData); // Espera la inserción para obtener el documento creado
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Item', error });
    }
};

export async function getItem(req, res) {
    const { id } = req.params; // Cambia de query a params
    try {
        if (id) {
            const item = await findItemById(id);
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
    const { id } = req.params; // Cambia de query a params
    const updatedItemData = req.body;
    try {
        const updatedItem = await updateItem(id, updatedItemData);
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
    const { id } = req.params; // Cambia de query a params
    try {
        const result = await deleteItem(id);
        if (result) {
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Item', error });
    }
};