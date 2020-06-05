module.exports = (database, account, role, pwd, expireAt) => {
  const query =
    'INSERT INTO public."AccountAuthorization" ' +
    '("id", "pwd", "disuseAt", "createdAt", "updatedAt", "accountId", "authorizationId", "deletedAt") ' +
    'VALUES (DEFAULT, $1, $2, NOW(), NOW(), $3, $4, NULL) RETURNING "createdAt", "disuseAt"';

  return new Promise((resolve, reject) => {
    database
      .query(query, [pwd, expireAt, account.id, role.id])
      .then(result => resolve(result.rows[0]))
      .catch(e => reject(e));
  });
};
