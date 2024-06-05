import { Router } from 'express';
import { createWorld, getWorld, updWorld, delWorld } from '../controllers/world-controller.js';

const router = Router();

router.get('/', getWorld);
router.post('/', createWorld);
router.put('/', updWorld);
router.delete('/', delWorld);

export default router;