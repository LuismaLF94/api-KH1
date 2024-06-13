import Item from '../../models/item.js';

export async function insertItem(itemData) {
    try {
        const newItem = new Item(itemData);
        const savedItem = await newItem.save();
        return savedItem;
    } catch (error) {
        throw new Error('Error inserting item: ' + error.message);
    }
};

export async function findItemById(id) {
    try {
        return await Item.findById(id);
    } catch (error) {
        throw new Error('Error finding item by ID: ' + error.message);
    }
};

export async function updateItem(id, updatedData) {
    try {
        const updatedItem = await Item.findByIdAndUpdate(id, updatedData, { new: true });
        return updatedItem;
    } catch (error) {
        throw new Error('Error updating item: ' + error.message);
    }
};

export async function deleteItem(id) {
    try {
        const deletedItem = await Item.findByIdAndDelete(id);
        return deletedItem;
    } catch (error) {
        throw new Error('Error deleting item: ' + error.message);
    }
};

export async function findAllItems() {
    try {
        return await Item.find();
    } catch (error) {
        throw new Error('Error finding all items: ' + error.message);
    }
};
