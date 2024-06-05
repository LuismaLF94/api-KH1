import { Router } from 'express';
import { createItem, getItem, updItem, delItem } from '../controllers/item-controller.js';

const router = Router();

router.post('/', createItem);
router.get('/', getItem);
router.put('/', updItem);
router.delete('/', delItem);

export default router;
