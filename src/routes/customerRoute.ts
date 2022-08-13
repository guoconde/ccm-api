import { Router } from 'express';
import { newCustomer } from '../controllers/customerController.js';

const customerRoute = Router();

customerRoute.post('/customer', newCustomer);

export default customerRoute;
