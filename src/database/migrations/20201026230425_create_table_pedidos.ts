import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('pedidos', function (table) {
    table.increments();
    table.string('forma_pagamento', 200).notNullable();
    table.string('endereco_entrega', 255).notNullable();
    table.timestamp('data_criacao').notNullable().defaultTo(knex.fn.now());
    table.float('valor_total').notNullable();
    table
    .enu('status', [
      'novo',
      'aceito',
      'saiuEntrega',
      'entregue',
      'cancelado',
    ])
    .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('produtos');
}
