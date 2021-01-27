module.exports = (database, email) => {
  const query =
    'SELECT "id", "firstname", "lastname", "email", "birthday", "createdAt", "updatedAt" ' +
    'FROM "People"' +
    'WHERE "email" = $1 AND "deletedAt" IS NULL';

  return new Promise((resolve, reject) => {
    database
      .query(query, [email])
      .then(result => resolve(result.rows[0]))
      .catch(e => reject(e));
  });
};
