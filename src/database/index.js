const Pool = require("pg").Pool;
const config = require("../../config");

const pool = new Pool({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port
});

module.exports = pool;
