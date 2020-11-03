export const carrinhoAddBodySchema = {
    type: 'object',
    properties: {
        id_produto: { type: 'number' },
        qtd: { type: 'number' },
    },
    required: ['id_produto', 'qtd']
}