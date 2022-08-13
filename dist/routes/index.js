import { Router } from 'express';
import cepRoute from './cepRoute.js';
import customerRoute from './customerRoute.js';
var router = Router();
router.use(customerRoute);
router.use(cepRoute);
export default router;
