import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
import userRouter from './users-router.js';
import { loggerMiddleware } from '../middlewares/log-middleware.js';

const router = express.Router();

router.use(loggerMiddleware)

router.post('/login', login);

router.use('/users', userRouter);

router.use(miscRouter);

export default router;
