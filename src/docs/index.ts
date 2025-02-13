import { produtoPath } from './paths/produto.paths';
import { produtoListPath } from './paths/produto-list.paths';
import { produtoUpdatePath } from './paths/produtoUpdate.paths';
import { pedidoFinalizarPath } from './paths/pedidoFinalizar.paths';
import { carrinhoAddPath } from './paths/carrinhoAdd.paths';
import { listarPedidoPath } from './paths/listarPedido.path';
import { atualizarStatusPedidoPath } from './paths/atualizarStatusPedidoPath.paths';
import { produtoCreateSchema } from './schemas/produtoCreateSchema';
import { produtoBodySchema } from './schemas/produtoBodySchema';
import { produtoListSchema } from './schemas/produtoListSchema';
import { produtoListVendaSchema } from './schemas/produtoListVendaSchema';
import { produtoUpdateSchema } from './schemas/produtoUpdateSchema';
import { produtoDeleteSchema } from './schemas/produtoDeleteSchema'; 
import { carrinhoAddBodySchema } from './schemas/carrinhoAddBodySchema'; 
import { finalizarPedidoBodySchema } from './schemas/finalizarPedidoBodySchema';
import { listPedidoBodySchema } from './schemas/listPedidoBodySchema';
import { atualizarStatusPedidoBodySchema } from './schemas/atualizarStatusPedidoBodySchema';

export default {
    openapi: '3.0.0',
    info: {
        title: 'Food API',
        description: 'API de controle de pedidos e cadastro de produtos.',
        version: '1.0.0'
    },
    server: [
        { url: '/api' }
    ],
    tags: [
        { name: 'Produto' },
        { name: 'Carrinho' },
        { name: 'Pedido' }
    ],
    paths: {
        '/api/v1/produtos': produtoPath,
        '/api/v1/list-produtos': produtoListPath,
        '/api/v1/produtos/{id}': produtoUpdatePath,
        '/api/v1/carrinhos/add-produto': carrinhoAddPath,
        '/api/v1/pedidos/finalizar-pedido': pedidoFinalizarPath,
        '/api/v1/pedidos/listar-pedido': listarPedidoPath,
        '/api/v1/pedidos/atualizar-status-pedido': atualizarStatusPedidoPath,
    },
    schemas: {
        produtoCreateSchema: produtoCreateSchema,
        produtoBodySchema: produtoBodySchema,
        produtoListSchema: produtoListSchema,
        produtoListVendaSchema: produtoListVendaSchema,
        produtoUpdateSchema: produtoUpdateSchema,
        produtoDeleteSchema: produtoDeleteSchema,
        carrinhoAddBodySchema: carrinhoAddBodySchema,
        finalizarPedidoBodySchema: finalizarPedidoBodySchema,
        listPedidoBodySchema: listPedidoBodySchema,
        atualizarStatusPedidoBodySchema: atualizarStatusPedidoBodySchema
    }
}