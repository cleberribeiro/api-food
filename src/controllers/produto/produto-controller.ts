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
/**
 * Este método será útil para listar os produtos ativos para venda. Ele recebe 
 * um parametro opcional chamado status (1 ou 0), conforme o que for informado nele
 * a query será executada levando em consideração o status de cada registro.
 * 
 * @param request 
 * @param response 
 */
  async list(request: Request, response: Response) {
    try {
      if (request.params.status && request.params.status !== undefined) {
        const produtos = await connection('produtos').where({ status: Number(request.params.status) }).select('*');
        return Promise.resolve(response.json(produtos));
      } else {
        const produtos = await connection('produtos').select('*');
        return Promise.resolve(response.json(produtos));
      }
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
      return Promise.resolve(response.json({ message: 'Produto removido com sucesso.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
