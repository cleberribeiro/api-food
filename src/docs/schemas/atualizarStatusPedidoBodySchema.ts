
export const atualizarStatusPedidoBodySchema = {
    type: 'object',
    properties: {
        id_pedido: { type: 'number' },
        status: { type: 'string' },
    },
    required: ['id_pedido', 'status']
}