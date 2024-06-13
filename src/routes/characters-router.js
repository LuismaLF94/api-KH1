import { Router } from 'express';

import { getCharacter, createCharacter, updCharacter, delCharacter } from '../controllers/character-controller.js';

const router = Router();

router.get('/:id?', getCharacter);

router.post('/', createCharacter);

router.put('/:id', updCharacter);

router.delete('/:id', delCharacter);

export default router;

