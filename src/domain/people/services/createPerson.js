const { Result, status } = require("../../helper/Result");

module.exports = (database, person, account) => {
  const query =
    'INSERT INTO "People" ("id", "firstname", "lastname", "email", "birthday", "createdAt", "updatedAt", "deletedAt", "accountId") ' +
    'VALUES (DEFAULT, $1, $2, $3, $4, NOW(), NOW(), NULL, $5) RETURNING "firstname", "lastname", "email"';

  return new Promise((resolve, reject) => {
    database
      .query(query, [
        person.firstname,
        person.lastname,
        person.email,
        person.birthday,
        account.id
      ])
      .then(result => {
        resolve(
          new Result({
            status: status.SUCCESS,
            message: "Pessoa criada com sucesso",
            data: result.rows[0]
          })
        );
      })
      .catch(e => {
        reject(
          new Result({
            status: status.FAILED,
            message: "Falha ao criar pessoa",
            data: e
          })
        );
      });
  });
};
