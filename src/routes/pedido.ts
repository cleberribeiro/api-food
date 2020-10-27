import { Router } from 'express';
import { PedidoController } from '../controllers/pedido/pedido-controller';

const pedidoController = new PedidoController();

export default (router: Router): void => {
  router.post('/pedidos/finalizar-pedido', pedidoController.finalizarPedido);
  router.get('/pedidos/finalizar-pedido', pedidoController.listarPedidos);
  router.put('/pedidos/atualizar-status-pedido', pedidoController.atualizarStatusPedido);
};