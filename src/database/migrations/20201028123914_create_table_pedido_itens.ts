import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('pedido_itens', function (table) {
        table.increments();
        table.integer('id_produto').notNullable();
        table.string('nome');
        table.float('preco');
        table.integer('qtd');
        table.integer('pedido_id').unsigned();
        // Referências
        table.foreign('pedido_id').references('pedidos.id');
      });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('pedido_itens');
}

