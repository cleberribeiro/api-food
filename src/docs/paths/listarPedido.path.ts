export const listarPedidoPath = {
    get: {
      tags: ['Pedido'],
      summary: 'API para listar pedidos',
      responses: {
        '200': {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/listPedidoBodySchema',
              },
            },
          },
        },
        '400': {
          description: 'Bad Request',
        },
      },
    }, 
  };
  