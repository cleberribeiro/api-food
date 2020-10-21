import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import connection from '../../database/connection';
export class ProdutoController implements Controller {
  async create(request: Request, response: Response) {
    try {

      const { nome, descricao, preco, imagem, tags, status } = request.body;

      await connection('produtos').insert({
        nome,
        descricao,
        preco,
        imagem,
        tags,
        status,
      });

      return Promise.resolve(response.json({ message: 'Deu certo man...' }));
    } catch (error) {
      return Promise.resolve(response.json(error));
    }
  }

  list(request: Request, response: Response) {
    return Promise.resolve(`Chegou aqui meu velho`);
  }

  update(request: Request, response: Response) {
    return Promise.resolve(null);
  }

  delete(request: Request, response: Response) {
    return Promise.resolve(null);
  }
}
