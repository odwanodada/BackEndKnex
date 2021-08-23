// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'Blog',
      user:     'postgres',
      password: 'nodada'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      __directory: './db/knex.js'
    },
    seeds: {
      __directory: './db/knex.js'
    }
  },
};
