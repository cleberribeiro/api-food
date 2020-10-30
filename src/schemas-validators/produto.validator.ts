import { Joi } from 'celebrate';

export const produtoSchemaPost = {
  body: {
    nome: Joi.string().max(200).required(),
    descricao: Joi.string(),
    preco: Joi.number().required(),
    imagem: Joi.string().max(255).optional(),
    tags: Joi.string().max(255).optional(),
    status: Joi.boolean().required(),
  }
};

export const produtoSchemaPut = {
  body: {
    nome: Joi.string().max(200).optional(),
    descricao: Joi.string(),
    preco: Joi.number().optional(),
    imagem: Joi.string().max(255).optional(),
    tags: Joi.string().max(255).optional(),
    status: Joi.boolean().optional(),
  },
  params: {
    id: Joi.number().required()
  }
};

export const produtoSchemaDelete = {
  params: {
    id: Joi.number().required()
  }
};
