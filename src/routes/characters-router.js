import { Router } from 'express';

import { getCharacter, createCharacter, updCharacter, delCharacter } from '../controllers/character-controller.js';

const router = Router();

router.get('/', getCharacter);
router.post('/', createCharacter);
router.put('/', updCharacter);
router.delete('/', delCharacter);

export default router;

