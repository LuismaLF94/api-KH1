import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
import userRouter from './users-router.js';
import characterRouter from './characters-router.js';
import heartlessRouter from './heartless-router.js';
import keyBladesRouter from './keyBlades-router.js';
import itemRouter from './items-router.js';
import worldRouter from './worlds-router.js';
import { loggerMiddleware } from '../middlewares/log-middleware.js';

const router = express.Router();

router.use(loggerMiddleware)

router.post('/login', login);

router.use('/users', userRouter);

router.use('/characters', characterRouter);

router.use('/heartless', heartlessRouter);

router.use('/keyblades', keyBladesRouter);

router.use('/items', itemRouter);

router.use('/worlds', worldRouter);

router.use(miscRouter);

export default router;
