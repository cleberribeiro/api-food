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
                $ref: '#/schemas/listarPedidoBodySchema',
              },
            },
          },
        },
        '400': {
          description: 'Bad Request',
        },
      },
    }, 
    /* put: {
      tags: ['Pedido'],
      summary: 'API para atualizar status do pedido',
      requestBody: {
        description: 'Dados a serem enviados no corpo da requisição',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/atualizarStatusPedidoBodySchema',
            },
          },
        },
        responses: {
          '200': {
            description: 'Sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Bad Request',
          },
        },
      },
    }, */
  };
  