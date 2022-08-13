import { Router } from 'express';
import { newCustomer } from '../controllers/customerController.js';
var customerRoute = Router();
customerRoute.post('/customer', newCustomer);
export default customerRoute;
