const db = require("../../../database");
const AccountMapper = require("../models/AccountDTO");

module.exports = () => {
  const query =
    'SELECT "id", "uuid", "user" AS "username", "createdAt", "updatedAt" ' +
    'FROM public."Accounts"' +
    'WHERE "deletedAt" IS NULL ' +
    'ORDER BY "id" ASC';

  return new Promise((resolve, reject) => {
    db.query(query)
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
