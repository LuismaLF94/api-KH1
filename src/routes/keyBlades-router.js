import { Router } from 'express';
import { createKeyBlade, getKeyBlade, updKeyBlade, delKeyBlade } from '../controllers/keyBlade-controller.js';

const router = Router();

router.get('/', getKeyBlade);
router.post('/', createKeyBlade);
router.put('/', updKeyBlade);
router.delete('/', delKeyBlade);

export default router;
