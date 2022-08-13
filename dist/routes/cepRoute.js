import { Router } from 'express';
import { getInfoByCEP } from '../controllers/cepController.js';
var cepRoute = Router();
cepRoute.post('/viacep', getInfoByCEP);
export default cepRoute;
