const AccountMapper = require("../models/AccountDTO");

module.exports = (database, username) => {
  const query =
    'SELECT "id", "uuid", "user" AS "username", "createdAt", "updatedAt" ' +
    'FROM public."Accounts"' +
    'WHERE "user" = $1 AND "deletedAt" IS NULL';

  return new Promise((resolve, reject) => {
    database
      .query(query, [username])
      .then(result => resolve(AccountMapper.toEntity(result.rows[0])))
      .catch(e => reject(e));
  });
};
