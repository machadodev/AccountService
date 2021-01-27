const AccountNotFound = require("./AccountNotFound");
const AuthorizationAlreadyExists = require("./AuthorizationAlreadyExists");
const AccountNotFoundOrPasswordIncorrect = require("./AccountNotFoundOrPasswordIncorrect");
const AuthorizationExpired = require("./AuthorizationExpired");
const ValidationError = require("./ValidationError");
const AuthorizationNotFound = require("./AuthorizationNotFound");
const AuthorizationNotFoundOrPasswordIncorret = require("./AuthorizationNotFoundOrPasswordIncorret");
const AccountAlreadyExists = require("./AccountAlreadyExists");
const PersonAlreadyExists = require("./PersonAlreadyExists");

module.exports = {
  AccountNotFound,
  AuthorizationAlreadyExists,
  AccountNotFoundOrPasswordIncorrect,
  AuthorizationExpired,
  ValidationError,
  AuthorizationNotFound,
  AuthorizationNotFoundOrPasswordIncorret,
  AccountAlreadyExists,
  PersonAlreadyExists
};
