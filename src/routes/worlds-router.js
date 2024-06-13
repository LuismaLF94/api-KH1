import { Router } from 'express';
import { createWorld, getWorld, updWorld, delWorld } from '../controllers/world-controller.js';

const router = Router();

router.get('/:id?', getWorld); // Cambiado a params

router.post('/', createWorld);

router.put('/:id', updWorld); // Cambiado a params

router.delete('/:id', delWorld); // Cambiado a params

export default router;