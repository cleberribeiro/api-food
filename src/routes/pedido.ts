import { celebrate } from 'celebrate';
import { Router } from 'express';
import { atualizarStatusPedidoSchema, finalizarPedidoSchema } from '../schemas-validators/pedido.validator';
import { PedidoController } from '../controllers/pedido/pedido-controller';

const pedidoController = new PedidoController();

export default (router: Router): void => {
  router.post('/pedidos/finalizar-pedido', celebrate(finalizarPedidoSchema), pedidoController.finalizarPedido);
  router.get('/pedidos/listar-pedido', pedidoController.listarPedidos);
  router.put('/pedidos/atualizar-status-pedido', celebrate(atualizarStatusPedidoSchema), pedidoController.atualizarStatusPedido);
};