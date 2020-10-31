// Update with your config settings.

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'db',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'api_food',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "database/migrations"
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: 'db',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'api_food',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "database/migrations"
    },
  },
};
