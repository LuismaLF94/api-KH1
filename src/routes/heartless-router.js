import { Router } from 'express';
import { createHeartless, getHeartless, updHeartless, delHeartless } from '../controllers/heartless-controller.js';

const router = Router();

router.get('/:id?', getHeartless); 

router.post('/', createHeartless);

router.put('/:id', updHeartless);

router.delete('/:id', delHeartless);

export default router;
