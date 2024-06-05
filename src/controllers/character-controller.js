import { insertCharacter, findCharacter, findAllCharacters, updateCharacter, deleteCharacter } from '../services/mongodb/character.js';

export async function getCharacter(req, res) {
    const name = req.query.name;
    try {
        if (name) {
            const character = await findCharacter(name);
            if (character) {
                res.status(200).json(character);
            } else {
                res.status(404).json({ message: 'Character not found' });
            }
        } else {
            const characters = await findAllCharacters();
            res.status(200).json(characters);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching character(s)', error });
    }
};

export async function createCharacter(req, res) {
    const character = req.body;
    try {
        const characterDoc = await insertCharacter(character);
        res.status(201).json(characterDoc);
    } catch (error) {
        res.status(500).json({ message: 'Error creating character', error });
    }
};

export async function updCharacter(req, res) {
    const name = req.query.name;
    const updatedCharacterData = req.body;
    try {
        const characterDoc = await updateCharacter(name, updatedCharacterData);
        if (characterDoc) {
            res.status(200).json(characterDoc);
        } else {
            res.status(404).json({ message: 'Character not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating character', error });
    }
};

export async function delCharacter(req, res) {
    const name = req.query.name;
    try {
        const result = await deleteCharacter(name);
        if (result) {
            res.status(200).json({ message: 'Character deleted successfully' });
        } else {
            res.status(404).json({ message: 'Character not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting character', error });
    }
};
