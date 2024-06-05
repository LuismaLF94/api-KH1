import Item from '../../models/item.js';

export async function insertItem(itemData) {
    const newItem = new Item(itemData);
    return newItem.save();
};

export async function findItemByName(name) {
    return Item.findOne({ name });
};

export async function updateItem(name, updatedData) {
    return Item.findOneAndUpdate({ name }, updatedData, { new: true });
};

export async function deleteItem(name) {
    return Item.findOneAndDelete({ name });
};

export async function findAllItems() {
    return Item.find();
};