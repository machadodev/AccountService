module.exports = (database, username) => {
  const query =
    'UPDATE "AccountAuthorization" AS authz ' +
    'SET "deletedAt" = NOW() ' +
    'FROM "Accounts" AS acc ' +
    'WHERE acc.id = authz."accountId" ' +
    'AND acc."user" = $1 ' +
    'AND authz."deletedAt" IS NULL ' +
    'RETURNING acc."user" AS username';

  return new Promise((resolve, reject) => {
    database
      .query(query, [username])
      .then(result => {
        resolve({
          affectedRows: result.rowCount,
          values: result.rows[0]
        });
      })
      .catch(e => reject(e));
  });
};
