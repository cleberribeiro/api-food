import { Router } from 'express';
import { CarrinhoController } from '../controllers/carrinho/carrinho-controller';

const carrinhoController = new CarrinhoController();

export default (router: Router): void => {
  router.post('/carrinho/add-produto/:id_produto/:qtd', carrinhoController.add);
};