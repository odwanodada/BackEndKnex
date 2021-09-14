const dotenv = require("dotenv");

dotenv.config();

const { CLIENT, DATABASE, USER, PASSWORD } = process.env;

module.exports = {
  development: {
    client: "",
    connection: {
      database: "",
      user: "",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      __directory: "./db/knex.js",
    },
    seeds: {
      __directory: "./db/knex.js",
    },
  },
};
