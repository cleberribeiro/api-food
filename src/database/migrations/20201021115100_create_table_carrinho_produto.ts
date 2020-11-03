import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('carrinho_produto', function (table) {
    table.integer('id_carrinho').unsigned();
    table.integer('id_produto').unsigned();
    table.integer('qtd').notNullable();
    // Referências
    table.foreign('id_carrinho').references('carrinhos.id');
    table.foreign('id_produto').references('produtos.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('carrinho_produto');
}
