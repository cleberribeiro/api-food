import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import connection from '../../database/connection';
import { ItemPedido } from 'src/@types/pedido/item-pedido.type';
import { Pedido, StatusPedido } from 'src/@types/pedido/pedido.type';
export class PedidoController {

  itens: ItemPedido[] = [];

  async finalizarPedido(request: Request, response: Response) {

    const MIN_PEDIDO = 10.0;
    
    try {
      
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

      const itens: ItemPedido[] = carrinho.map(item => {
        return { id_produto: item.id, nome: item.nome, preco: item.preco, qtd: item.qtd }
      });

      const pedido: Pedido = {
        data_criacao: '2020-10-28',
        endereco_entrega: endereco_entrega,
        forma_pagamento: forma_pagamento,
        lista_itens: JSON.stringify(itens),
        status: StatusPedido.aceito,
        valor_total: valorPedido
      }
  
      const trx = await connection.transaction();
        trx('pedidos')
          .insert(pedido)
          .then(() => {
            return trx('carrinho_produto').where({id_carrinho: id_carrinho}).del();
          })
          .then(() => {
            return trx('carrinhos').where({id: id_carrinho}).del();
          })
          .then(trx.commit)
          .catch((e) => {console.log('DBG[error]', e); trx.rollback});

        return Promise.resolve(
          response.json({
            message: 'Seu pedido foi registrado com sucesso!'
          })
        );

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
