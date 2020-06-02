const db = require("../../../database");
const AccountMapper = require("../models/AccountDTO");
const { AccountNotFound } = require("../../../errors");

module.exports = username => {
  const query =
    'SELECT "id", "uuid", "user" AS "username", "createdAt", "updatedAt" ' +
    'FROM public."Accounts"' +
    'WHERE "user" = $1 AND "deletedAt" IS NULL';

  return new Promise((resolve, reject) => {
    db.query(query, [username])
      .then(result => {
        if (result.rowCount > 0) {
          resolve(AccountMapper.toEntity(result.rows[0]));
        } else {
          throw new AccountNotFound(username);
        }
      })
      .catch(e => reject(e));
  });
};
