export const carrinhoAddPath = {
    post: {
      tags: ['Carrinho'],
      summary: 'API para adicionar produto ao carrinho.',
      requestBody: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/carrinhoAddBodySchema',
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
                    message: { type: 'string' }
                }
              },
            },
          },
        },
        '400': {
          description: 'Bad Request',
        },
      },
    }
  };
  