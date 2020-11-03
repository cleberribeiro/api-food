import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('produtos', function (table) {
    table.increments();
    table.string('nome', 200).notNullable();
    table.text('descricao');
    table.float('preco').notNullable();
    table.string('imagem');
    table.string('tags');
    table.boolean('status').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('produtos');
}
