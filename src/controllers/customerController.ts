import { Request, Response } from 'express';
import * as customerRepository from '../repositories/customerRepository.js';

export async function newCustomer(req: Request, res: Response) {
  try {
    await customerRepository.newCustomer(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}
