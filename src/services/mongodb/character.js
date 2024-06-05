import Character from '../../models/character.js';


export async function findCharacter(name) {
    return Character.findOne({ name });
};

export async function insertCharacter(characterData) {
    const newCharacter = new Character(characterData);
    return newCharacter.save();
};

export async function updateCharacter(name, updatedData) {
    return Character.findOneAndUpdate({ name }, updatedData, { new: true });
};

export async function deleteCharacter(name) {
    return Character.findOneAndDelete({ name });
};

export async function findAllCharacters() {
    return Character.find(); 
};