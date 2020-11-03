import { Router } from 'express';
import { ProdutoController } from './../controllers/produto/produto-controller';
import { produtoSchemaPost, produtoSchemaPut, produtoSchemaDelete } from '../schemas-validators/produto.validator';
import { celebrate, errors } from 'celebrate';

const produtoController = new ProdutoController();

export default (router: Router): void => {
  router.post('/produtos', celebrate(produtoSchemaPost), produtoController.create);
  router.get('/produtos', produtoController.list);
  router.get('/list-produtos', produtoController.listProdutosVenda);
  router.put('/produtos/:id', celebrate(produtoSchemaPut), produtoController.update);
  router.delete('/produtos/:id', celebrate(produtoSchemaDelete), produtoController.delete);
  router.use(errors());
};
