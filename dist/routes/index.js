import { Router } from 'express';
import customerRoute from './customerRoute.js';
var router = Router();
router.use(customerRoute);
export default router;
