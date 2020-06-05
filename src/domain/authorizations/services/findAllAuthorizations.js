const AuthorizationMapper = require("../models/AuthorizationDTO");

module.exports = database => {
  const query =
    "SELECT " +
    "A.user AS username, " +
    'B.pwd AS "password", ' +
    "UPPER(C.role) AS role, " +
    'B."disuseAt" AS "expireAt", ' +
    'B."deletedAt" ' +
    'FROM "Accounts" AS A ' +
    'INNER JOIN "AccountAuthorization" AS B ' +
    'ON A.id = B."accountId" ' +
    'INNER JOIN "Authorizations" AS C ' +
    'ON B."authorizationId" = C.id ' +
    'ORDER BY "expireAt" ASC';

  return new Promise((resolve, reject) => {
    database
      .query(query)
      .then(result =>
        resolve({
          total: result.rowCount,
          users: result.rows.map(authorization => {
            return AuthorizationMapper.toEntity(authorization);
          })
        })
      )
      .catch(e => reject(e));
  });
};
