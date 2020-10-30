export const produtoUpdatePath = {
    put: {
      tags: ['Produto'],
      summary: 'API para atualizar um produto',
      parameters: [
        {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Código do produto a ser atualizado.',
            schema: {
                type : 'integer',
                format: 'int64',
                minimum: 1
            }
        }
    ],
    requestBody: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produtoUpdateSchema',
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
                $ref: '#/schemas/produtoUpdateSchema',
              },
            },
          },
        },
        '400': {
          description: 'Bad Request',
        },
      },
    },
    delete: {
        tags: ['Produto'],
        summary: 'API para remover um produto',
        parameters: [
          {
              name: 'id',
              in: 'path',
              required: true,
              description: 'Código do produto a ser removido.',
              schema: {
                  type : 'integer',
                  format: 'int64',
                  minimum: 1
              }
          }
      ],
      responses: {
        '200': {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/produtoDeleteSchema',
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
  