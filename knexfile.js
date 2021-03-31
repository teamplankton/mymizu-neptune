// Update with your config settings.
const parse = require("pg-connection-string").parse;

let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

const db = {
  client: "pg",
  connection:
    pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/neptune`,
  searchPath: "public",
  migrations: {
    directory: "./Migrations",
  },
  seeds: {
    directory: "./Seeds",
  },
};

module.exports = db;
