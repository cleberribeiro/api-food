import { produtoPath } from './paths/produto.paths';
import { produtoListPath } from './paths/produto-list.paths';
import { produtoUpdatePath } from './paths/produtoUpdate.paths';
import { carrinhoAddPath } from './paths/carrinhoAdd.paths';
import { produtoCreateSchema } from './schemas/produtoCreateSchema';
import { produtoBodySchema } from './schemas/produtoBodySchema';
import { produtoListSchema } from './schemas/produtoListSchema';
import { produtoListVendaSchema } from './schemas/produtoListVendaSchema';
import { produtoUpdateSchema } from './schemas/produtoUpdateSchema';
import { produtoDeleteSchema } from './schemas/produtoDeleteSchema'; 
import { carrinhoAddBodySchema } from './schemas/carrinhoAddBodySchema'; 

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
        { name: 'Carrinho' }
    ],
    paths: {
        '/api/v1/produtos': produtoPath,
        '/api/v1/list-produtos': produtoListPath,
        '/api/v1/produtos/{id}': produtoUpdatePath,
        '/api/v1/carrinhos/add-produto': carrinhoAddPath,
    },
    schemas: {
        produtoCreateSchema: produtoCreateSchema,
        produtoBodySchema: produtoBodySchema,
        produtoListSchema: produtoListSchema,
        produtoListVendaSchema: produtoListVendaSchema,
        produtoUpdateSchema: produtoUpdateSchema,
        produtoDeleteSchema: produtoDeleteSchema,
        carrinhoAddBodySchema: carrinhoAddBodySchema
    }
}