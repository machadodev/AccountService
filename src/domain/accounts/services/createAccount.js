"use strict";

const db = require("../../../database");
const AccountMapper = require("../models/AccountDTO");
const findAccount = require("./findAccountByUsername");
const { uuid } = require("uuidv4");
const generateuuidv4 = uuid;

const { Result, status } = require("../../helper/Result");

const createAccountDB = account => {
  const query =
    'INSERT INTO public."Accounts" ("id", "uuid", "user", "pwd", "createdAt", "updatedAt", "deletedAt") ' +
    'VALUES (DEFAULT, $1, $2, $3, NOW(), NOW(), NULL) RETURNING "id", "uuid", "user", "createdAt", "updatedAt"';

  return new Promise((resolve, reject) => {
    db.query(query, [generateuuidv4(), account.user, account.pwd])
      .then(result => {
        if (result.rowCount > 0) {
          resolve(
            new Result({
              status: status.SUCCESS,
              message: "Conta criada com sucesso",
              data: AccountMapper.toEntity(result.rows[0])
            })
          );
        } else {
          throw e;
        }
      })
      .catch(e => {
        reject(
          new Result({
            status: status.FAILED,
            message: "Falha ao criar conta",
            data: e
          })
        );
      });
  });
};

const checkIfAccountAlreadyExists = account => {
  return new Promise((resolve, reject) => {
    findAccount(account.user)
      .then(found => {
        if (found) {
          reject(new Error(`Account "${account.user}" already exists`));
        }
        return createAccountDB(account);
      })
      .then(result => {
        resolve(result);
      })
      .catch(e => reject(e));
  });
};

module.exports = createAccountDB;
