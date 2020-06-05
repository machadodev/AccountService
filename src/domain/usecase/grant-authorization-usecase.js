const db = require("../../database");
const { findAuthorizationByUsername } = require("../authorizations/services");
const { findAccountByUsername } = require("../accounts/services");
const { findRoleByName } = require("../authorizations/services");
const grantAccountAuthorizationService = require("../authorizations/services/grantAuthorization");
const {
  AuthorizationAlreadyExists,
  AccountNotFound,
  AuthorizationNotFound
} = require("../../errors");

module.exports = class GrantAuthorizationUseCase {
  constructor(validators) {
    ({
      usernameValidator: this.usernameValidator,
      roleValidator: this.roleValidator,
      passwordAuthorizationValidator: this.passwordAuthorizationValidator,
      expireAtValidator: this.expireAtValidator
    } = validators);
  }

  async grant(username, rolename, pwd, expireAt) {
    this.validate(username, rolename, pwd, expireAt);

    const authorization = await findAuthorizationByUsername(db, username);

    if (authorization) {
      throw new AuthorizationAlreadyExists(username);
    }

    const account = await findAccountByUsername(db, username);

    if (!account) {
      throw new AccountNotFound(username);
    }

    const role = await findRoleByName(db, rolename);

    if (!role) {
      throw new AuthorizationNotFound(rolename);
    }

    const response = await grantAccountAuthorizationService(
      db,
      account,
      role,
      pwd,
      expireAt
    );

    return response;
  }

  validate(username, rolename, pwd, expireAt) {
    this.usernameValidator.validate(username);
    this.roleValidator.validate(rolename);
    this.passwordAuthorizationValidator.validate(pwd);
    this.expireAtValidator.validate(expireAt);
  }
};
