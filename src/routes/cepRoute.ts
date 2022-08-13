import { Router } from 'express';
import { getInfoByCEP } from '../controllers/cepController.js';

const cepRoute = Router();

cepRoute.post('/viacep', getInfoByCEP);

export default cepRoute;
