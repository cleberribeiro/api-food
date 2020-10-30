import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import connection from '../../database/connection';
import { ItemPedido } from '../../@types/pedido/item-pedido.type';
import { Pedido, StatusPedido } from '../../@types/pedido/pedido.type';
export class PedidoController {

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

      const pedido: Pedido = {
        endereco_entrega: endereco_entrega,
        forma_pagamento: forma_pagamento,
        status: StatusPedido.aceito,
        valor_total: valorPedido
      }
  
      const trx = await connection.transaction();
        trx('pedidos')
          .insert(pedido)
          .then((id) => {
            const itens: ItemPedido[] = carrinho.map(item => {
              return { id_produto: item.id, nome: item.nome, preco: item.preco, qtd: item.qtd, pedido_id: id }
            });
            return trx('pedido_itens').insert(itens)
          })
          .then(() => {
            return trx('carrinho_produto').where({id_carrinho: id_carrinho}).del();
          })
          .then(() => {
            return trx('carrinhos').where({id: id_carrinho}).del();
          })
          .then(trx.commit);

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
      const pedidos = await connection('pedidos as p').orderBy('data_criacao').select('p.*');
      const pedido_itens = await connection('pedido_itens as pi').select('pi.pedido_id', 'pi.nome');

      pedidos.map(pedido => {
        pedido.lista_itens = pedido_itens.filter(item => {
          if (item.pedido_id === pedido.id) {
            delete item.pedido_id;
            return item.nome;
          }
        })
      });

      return Promise.resolve(response.json({data: pedidos}));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async atualizarStatusPedido(request: Request, response: Response) {
    try {

      const { id_pedido, status } = request.body;

      await connection('pedidos')
      .where({ id: id_pedido })
      .update({ status: status })
      .catch((error) => { return Promise.reject(response.json(error)); });

      return Promise.resolve(
        response.json({ message: 'Status do pedido atualizado.' })
      );
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
