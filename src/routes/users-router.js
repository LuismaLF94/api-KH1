import { Router } from 'express';

import { getUser, createUser, updateUser, deleteUser } from '../controllers/user-controler.js';

const router = Router();

router.get('/', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;
 