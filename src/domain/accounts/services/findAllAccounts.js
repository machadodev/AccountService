const AccountMapper = require("../models/AccountDTO");

module.exports = (database, { offset, limit }) => {
  const query =
    'SELECT "id", "uuid", "user" AS "username", "createdAt", "updatedAt" ' +
    'FROM public."Accounts"' +
    'WHERE "deletedAt" IS NULL ' +
    'ORDER BY "id" ASC ' +
    "OFFSET $1 " +
    "LIMIT $2";

  return new Promise((resolve, reject) => {
    database
      .query(query, [offset, limit])
      .then(result => {
        resolve({
          total: result.rowCount,
          users: result.rows.map(account => {
            return AccountMapper.toEntity(account);
          })
        });
      })
      .catch(e => reject(e));
  });
};
