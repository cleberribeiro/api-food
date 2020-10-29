import { Router } from 'express';
import { ProdutoController } from './../controllers/produto/produto-controller';
import produtoValidator from '../middlewares/produto.validator';

const produtoController = new ProdutoController();

export default (router: Router): void => {
  router.post('/produtos', produtoValidator, produtoController.create);
  router.get('/produtos', produtoController.list);
  router.get('/list-produtos', produtoController.listProdutosVenda);
  router.put('/produtos/:id', produtoController.update);
  router.delete('/produtos/:id', produtoController.delete);
};
