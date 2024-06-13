import { Router } from 'express';
import { createItem, getItem, updItem, delItem } from '../controllers/item-controller.js';

const router = Router();

router.get('/:id?', getItem); // Cambia de query a params
router.post('/', createItem);
router.put('/:id', updItem); // Cambia de query a params
router.delete('/:id', delItem); // Cambia de query a params

export default router;