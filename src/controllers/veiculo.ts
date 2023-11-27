import { Request, Response } from 'express'

import { Aplicacao } from './prototype';

export function get(req: Request, res: Response) {
  res.send('Dentro do verbo GET, we are in!')

  // Teste da Aplicacao
  const app = new Aplicacao();
  const veiculosClonados = app.criarVeiculos();

  for (const veiculo of veiculosClonados) {
    console.log(veiculo.represent());
  }

}