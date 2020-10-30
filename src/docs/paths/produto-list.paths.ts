export const produtoListPath = {
    get: {
      tags: ['Produto'],
      summary: 'API para listar todos os produto ativos para venda',
      responses: {
        '200': {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/produtoListVendaSchema',
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
  