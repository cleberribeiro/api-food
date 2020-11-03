export const produtoBodySchema = {
    type: 'object',
    properties: {
        nome: { type: 'string' },
        descricao: { type: 'string' },
        preco: { type: 'number' },
        imagem: { type: 'string' },
        tags: { type: 'string' },
        status: { type: 'boolean' },
    },
    required: ['nome', 'preco', 'status']
}