// Update with your config settings.
require("dotenv").config();
const parse = require("pg-connection-string").parse;

let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

const db = {
  client: "pg",
  connection: pgconfig || {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || '5432',
    database: process.env.DATABASE_NAME || process.env.DB_NAME,
    user: process.env.DATABASE_USER || process.env.DB_USER,
    password: process.env.DATABASE_PASSWORD || process.env.DB_PW,
  },
  // connection:
  //   pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/neptune`,
  searchPath: "public",
  migrations: {
    directory: "./Migrations",
  },
  seeds: {
    directory: "./Seeds",
  },
};

module.exports = db;
