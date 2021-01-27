const moment = require("moment");
const db = require("../../database");
const {
  AuthorizationExpired,
  AuthorizationNotFound,
  AuthorizationNotFoundOrPasswordIncorret
} = require("../../errors");
const {
  findAuthorizationByUsername,
  softRemoveAuthorization
} = require("../authorizations/services");

module.exports = class AuthenticateUseCase {
  // constructor will be used to Dependencies Injections
  constructor(validators) {
    ({
      usernameValidator: this.usernameValidator,
      passwordAuthorizationValidator: this.passwordAuthorizationValidator
    } = validators);
  }

  async authorize(username, pwd) {
    this.usernameValidator.validate(username);
    this.passwordAuthorizationValidator.validate(pwd);

    const authorization = await findAuthorizationByUsername(db, username);

    if (!authorization) {
      throw new AuthorizationNotFound(username);
    }

    const { role, password, expireAt } = authorization;

    if (password !== pwd) {
      throw new AuthorizationNotFoundOrPasswordIncorret(username);
    }

    const now = moment();
    const expireDate = moment(expireAt);

    if (now > expireDate) {
      const { affectedRows, values } = await softRemoveAuthorization(
        db,
        username
      );
      throw new AuthorizationExpired(username);
    }

    return { role, expireAt: expireDate.format() };
  }
};
