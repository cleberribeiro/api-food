export const finalizarPedidoBodySchema = {
    type: 'object',
    properties: {
        id_carrinho: { type: 'number' },
        forma_pagamento: { type: 'string' },
        endereco_entrega: { type: 'string' }
    },
    required: ['id_carrinho', 'forma_pagamento', 'endereco_entrega']
}