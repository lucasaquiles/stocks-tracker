require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true,
    connection: {
      filename: 'stocks.dev.db'
    },
    seeds: {
      directory: './seeds/'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
