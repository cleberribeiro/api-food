import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import connection from '../../database/connection';
export class PedidoController {
  async finalizarPedido(request: Request, response: Response) {
    try {
      const MIN_PEDIDO = 10.0;
      console.log('DBG[request]', request.body);
      // knex.select('*').from('users').leftJoin('accounts', 'users.id', 'accounts.user_id')

      const { id_carrinho, forma_pagamento, endereco_entrega } = request.body;

      const carrinho = await connection
        .from('carrinho_produto')
        .select('*')
        .leftJoin('produtos', 'carrinho_produto.id_produto', 'produtos.id')
        .where({ id_carrinho: id_carrinho });

      if (carrinho.length === 0) {
        return Promise.resolve(
          response.json({
            message: `Não é possível finalizar o pedido, carrinho está vazio.`,
          })
        );
      }

      const valorPedido = carrinho
        .map((registro) => registro.qtd * registro.preco)
        .reduce((total, registro) => (total += registro));

      if (valorPedido < MIN_PEDIDO) {
        return Promise.resolve(
          response.json({
            message: `Pedido mínimo no valor de R$ ${MIN_PEDIDO}.`,
          })
        );
      }

      console.log('DBG.carrinho', carrinho);

      // await connection('pedidos').insert({

      // });

      return Promise.resolve(response.json({ message: 'finalizarPedidoo.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async listarPedidos(request: Request, response: Response) {
    try {
      return Promise.resolve(response.json({ message: 'listarPedidos.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async atualizarStatusPedido(request: Request, response: Response) {
    try {
      return Promise.resolve(
        response.json({ message: 'atualizarStatusPedido.' })
      );
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
