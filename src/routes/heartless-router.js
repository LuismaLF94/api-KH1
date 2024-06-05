import { Router } from 'express';
import { createHeartless, getHeartless, updHeartless, delHeartless } from '../controllers/heartless-controller.js';

const router = Router();

router.get('/', getHeartless);
router.post('/', createHeartless);
router.put('/', updHeartless);
router.delete('/', delHeartless);

export default router;
