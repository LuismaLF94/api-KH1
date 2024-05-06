import { Router } from 'express';
import { digPowController, findOddController, dnaController,digitalRootController, countBitsController, numeroAleatorioController, pingController } from '../controllers/misc-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/ping', pingController);

router.get('/numero', /*checkToken*/ numeroAleatorioController);

router.get('/n/:number', checkToken, countBitsController);

router.get('/nRoot/:number', digitalRootController);

router.get('/dna', dnaController);

router.get('/findOdd/:numbers', findOddController);

router.get('/digPow', checkToken, digPowController);

export default router;
 