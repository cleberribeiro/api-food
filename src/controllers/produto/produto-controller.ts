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

      return Promise.resolve(response.json({ message: 'Produto criado com sucesso.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async list(request: Request, response: Response) {
    try {
      const produtos = await connection('produtos').select('*');
      console.log(produtos);
      return Promise.resolve(response.json(produtos));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async update(request: Request, response: Response) {
    const produto = await connection('produtos')
      .where({ id: request.params.id })
      .update(request.body)
    return response.json({ message: 'Produto atualizado com sucesso.' });
  }

  async delete(request: Request, response: Response) {
    try {
      const resposta = await connection('produtos').where({ id: request.params.id }).delete();
      console.log(resposta);
      return Promise.resolve(response.json({ message: 'Produto removido com sucesso.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
