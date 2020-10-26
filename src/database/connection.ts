import knex from 'knex';
import configuration from '../knexfile';

const env = process.env.NODE_ENV === 'development' ? configuration.development : configuration.production;

const connection = knex(env);

export default connection;