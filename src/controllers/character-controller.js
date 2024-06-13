import { insertCharacter, findCharacterById, findAllCharacters, updateCharacter, deleteCharacter } from '../services/mongodb/character.js';

export async function createCharacter(req, res) {
    const character = req.body;
    try {
        const characterDoc = await insertCharacter(character);
        res.status(201).json(characterDoc);
    } catch (error) {
        res.status(500).json({ message: 'Error creating character', error });
    }
};

export async function getCharacter(req, res) {
    const { id } = req.params;
    const { level, hp, origin } = req.query;

    try {
        if (id) {
            const character = await findCharacterById(id);
            if (character) {
                res.status(200).json(character);
            } else {
                res.status(404).json({ message: 'Character not found' });
            }
        } else {
            // Filtra los personajes según los parámetros proporcionados
            const query = {};
            if (level) query.level = level;
            if (hp) query.hp = hp;
            if (origin) query.origin = origin;

            const characters = await findAllCharacters(query);
            res.status(200).json(characters);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching character(s)', error });
    }
};

export async function updCharacter(req, res) {
    const { id } = req.params;
    const updatedCharacterData = req.body;
    try {
        const characterDoc = await updateCharacter(id, updatedCharacterData);
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
    const { id } = req.params;
    try {
        const result = await deleteCharacter(id);
        if (result) {
            res.status(200).json({ message: 'Character deleted successfully' });
        } else {
            res.status(404).json({ message: 'Character not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting character', error });
    }
};
