import { Router } from 'express';
import customerRoute from './customerRoute.js';

const router = Router();

router.use(customerRoute);

export default router;
