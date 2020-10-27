import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('pedidos', function (table) {
    table.increments();
    table.json('lista_itens').notNullable();
    table.string('forma_pagamento', 200).notNullable();
    table.string('endereco_entrega', 255).notNullable();
    table.date('data_criacao').notNullable();
    table.float('valor_total').notNullable();
    table
      .enu('status', [
        'novo',
        'aceito',
        'saiu para entrega',
        'entregue',
        'cancelado',
      ])
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('produtos');
}
