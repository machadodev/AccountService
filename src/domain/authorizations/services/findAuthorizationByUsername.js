module.exports = (database, username) => {
  const query =
    "SELECT A.user AS username, " +
    'B.pwd AS "password", ' +
    "UPPER(C.role) AS role, " +
    'B."disuseAt" AS "expireAt" ' +
    'FROM "Accounts" AS A ' +
    'INNER JOIN "AccountAuthorization" AS B ' +
    'ON A.id = B."accountId" AND B."deletedAt" IS NULL ' +
    'INNER JOIN "Authorizations" AS C ' +
    'ON B."authorizationId" = C.id ' +
    "WHERE A.user = $1";

  return new Promise((resolve, reject) => {
    database
      .query(query, [username])
      .then(result => resolve(result.rows[0]))
      .catch(e => reject(e));
  });
};
