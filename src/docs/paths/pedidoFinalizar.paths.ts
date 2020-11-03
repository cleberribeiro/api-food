export const pedidoFinalizarPath = {
  post: {
    tags: ['Pedido'],
    summary: 'API para finalizar o pedido',
    requestBody: {
      description: 'Sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/finalizarPedidoBodySchema',
          },
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
};
