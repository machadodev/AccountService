module.exports = (database, rolename) => {
  const query = 'SELECT "id", "role" FROM "Authorizations" WHERE "role" = $1';

  return new Promise((resolve, reject) => {
    database
      .query(query, [rolename])
      .then(result => resolve(result.rows[0]))
      .catch(e => reject(e));
  });
};
