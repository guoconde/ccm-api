import { Request, Response } from 'express';
import * as cepService from '../services/cepService.js'

export async function getInfoByCEP(req: Request, res: Response) {
  const { cep } = req.body

  const response = await cepService.viaCepConnection(cep)

  res.send(response)
}
