
import { Router } from 'express';
import { createKeyBlade, getKeyBlade, updKeyBlade, delKeyBlade } from '../controllers/keyBlade-controller.js';

const router = Router();

router.get('/:id?', getKeyBlade);

router.post('/', createKeyBlade);

router.put('/:id', updKeyBlade);

router.delete('/:id', delKeyBlade);

export default router;
