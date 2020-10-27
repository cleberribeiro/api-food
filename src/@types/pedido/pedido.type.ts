import { ItemPedido } from './item-pedido.type';

enum StatusPedido {
  novo = 'novo',
  aceito = 'aceito',
  saiuEntrega = 'saiu para entrega',
  enregue = 'entregue',
  cancelado = 'cancelado',
}

export type Pedido = {
  listaItens: [ItemPedido];
  forma_pagamento: string;
  endereco_entrega: string;
  data_criacao: string;
  valor_total: number;
  status: StatusPedido;
};
