import { Joi } from 'celebrate';

export const carrinhoSchema = {
  body: {
    id_produto: Joi.number().required(),
    qtd: Joi.number().required(),
  }
};