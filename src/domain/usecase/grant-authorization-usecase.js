const { findAuthorizationByUsername } = require("../authorizations/services");
const { findAccountByUsername } = require("../accounts/services");
const { findRoleByName } = require("../authorizations/services");
const grantAccountAuthorizationService = require("../authorizations/services/grantAuthorization");
const {
  RoleAlreadyExists,
  AccountNotFound,
  RoleNotFound
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

    const authorization = await findAuthorizationByUsername(username);

    if (authorization) {
      throw new RoleAlreadyExists(username);
    }

    const account = await findAccountByUsername(username);

    if (!account) {
      throw new AccountNotFound(username);
    }

    const role = await findRoleByName(rolename);

    if (!role) {
      throw new RoleNotFound(rolename);
    }

    const response = await grantAccountAuthorizationService(
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
