import { Router } from 'express';
import { countBitsController, numeroAleatorioController, pingController } from '../controllers/misc-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/ping', pingController);

router.get('/numero', checkToken, numeroAleatorioController);

router.get('/n/:number', countBitsController);

export default router;
