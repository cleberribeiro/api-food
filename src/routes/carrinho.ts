import { celebrate } from 'celebrate';
import { Router } from 'express';
import { carrinhoSchema } from '../schemas-validators/carrinho.validator';
import { CarrinhoController } from '../controllers/carrinho/carrinho-controller';

const carrinhoController = new CarrinhoController();

export default (router: Router): void => {
  router.post('/carrinhos/add-produto', celebrate(carrinhoSchema), carrinhoController.add);
};