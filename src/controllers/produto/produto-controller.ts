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
 * Lista todos os produtos, independente dos status, ativo ou inativo.
 * 
 * @param request 
 * @param response 
 */
  async list(request: Request, response: Response) {
    try {
      const produtos = await connection('produtos').select('*');
      return Promise.resolve(response.json({ data: produtos }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
/**
 * Lista todos os produtos para venda, que estão com o status ativo.
 * 
 * @param request 
 * @param response 
 */
  async listProdutosVenda(request: Request, response: Response) {
    try {
      const produtos = await connection('produtos').where({ status: true }).select('*');
      return Promise.resolve(response.json({data: produtos}));
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
