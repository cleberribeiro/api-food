import { Joi } from 'celebrate';

export const finalizarPedidoSchema = {
  body: {
    id_carrinho: Joi.number().required(),
    forma_pagamento: Joi.string().required(),
    endereco_entrega: Joi.string().max(255).required()
  }
};

export const atualizarStatusPedidoSchema = {
  body: {
    id_pedido: Joi.number().required(),
    status: Joi.string().required(),
  }
};
