const { Result, status } = require("../../helper/Result");

module.exports = (database, person) => {
  const query =
    'INSERT INTO "People" ("id", "firstname", "lastname", "email", "birthday", "createdAt", "updatedAt", "deletedAt") ' +
    'VALUES (DEFAULT, $1, $2, $3, $4, NOW(), NOW(), NULL) RETURNING "id", "firstname", "email"';

  return new Promise((resolve, reject) => {
    database
      .query(query, [
        person.firstname,
        person.lastname,
        person.email,
        person.birthday
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
