import Character from '../../models/character.js';

export async function findCharacterById(id) {
    return Character.findById(id);
};

export async function insertCharacter(characterData) {
    const newCharacter = new Character(characterData);
    return newCharacter.save();
};

export async function updateCharacter(id, updatedData) {
    return Character.findByIdAndUpdate(id, updatedData, { new: true });
};

export async function deleteCharacter(id) {
    return Character.findByIdAndDelete(id);
};

export async function findAllCharacters(query = {}) {
    return Character.find(query);
};
