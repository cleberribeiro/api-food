export const produtoPath = {
  post: {
    tags: ['Produto'],
    summary: 'API para cadastro de produto',
    requestBody: {
      description: 'Sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/produtoBodySchema',
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
              $ref: '#/schemas/produtoCreateSchema',
            },
          },
        },
      },
      '400': {
        description: 'Bad Request',
      },
    },
  },
  get: {
    tags: ['Produto'],
    summary: 'API para listar todos os produto',
    responses: {
      '200': {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produtoListSchema',
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
